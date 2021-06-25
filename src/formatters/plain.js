import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : String(value);
};

export default (diffValues) => {
  const iter = (currentValues, path, depth) => {
    const lines = currentValues.flatMap((diff) => {
      const newPath = depth === 0 ? diff.key : `${path}.${diff.key}`;
      switch (diff.status) {
        case 'removed':
          return `Property '${newPath}' was removed`;
        case 'added':
          return `Property '${newPath}' was added with value: ${stringify(diff.newValue)}`;
        case 'changed':
          return `Property '${newPath}' was updated. From ${stringify(diff.oldValue)} to ${stringify(diff.newValue)}`;
        case 'unchanged':
          return [];
        default:
          return iter(diff.children, newPath, depth + 1);
      }
    });
    return lines.join('\n');
  };
  return iter(diffValues, '', 0);
};
