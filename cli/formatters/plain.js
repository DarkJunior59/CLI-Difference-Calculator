import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return _.isString(value) ? `'${value}'` : value;
};

const plain = (diffValues) => {
  const iter = (currentValues, path, depth) => {
    const lines = currentValues.flatMap((diff) => {
      const newPath = depth === 0 ? diff.key : `${path}.${diff.key}`;
      if (diff.status === 'removed') {
        return `Property '${newPath}' was removed`;
      }
      if (diff.status === 'added') {
        return `Property '${newPath}' was added with value: ${stringify(diff.newValue)}`;
      }
      if (diff.status === 'changed') {
        return `Property '${newPath}' was updated. From ${stringify(diff.oldValue)} to ${stringify(diff.newValue)}`;
      }
      if (diff.status === 'unchanged') {
        return [];
      }
      return iter(diff.children, newPath, depth + 1);
    });
    return lines.join('\n');
  };
  return iter(diffValues, '', 0);
};

export default plain;
