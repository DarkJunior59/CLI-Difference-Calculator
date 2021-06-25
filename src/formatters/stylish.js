import _ from 'lodash';

const getInterval = (depth) => ' '.repeat(4 * depth);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  if (value === null) {
    return 'null';
  }
  const interval = getInterval(depth);
  const lines = Object
    .entries(value)
    .map(([key, val]) => `${interval}    ${key}: ${stringify(val, depth + 1)}`);
  return [
    '{',
    ...lines,
    `${interval}}`,
  ].join('\n');
};

const getStringValue = (ident, sign, key, value, strDepth) => `${ident}  ${sign} ${key}: ${stringify(value, strDepth + 1)}`;

const makeStylish = (diffValues) => {
  const iter = (currentValues, depth) => {
    const gap = getInterval(depth);
    const lines = currentValues.map((diff) => {
      switch (diff.status) {
        case 'removed':
          return getStringValue(gap, '-', diff.key, diff.oldValue, depth);
        case 'added':
          return getStringValue(gap, '+', diff.key, diff.newValue, depth);
        case 'changed':
          return `${getStringValue(gap, '-', diff.key, diff.oldValue, depth)}\n${getStringValue(gap, '+', diff.key, diff.newValue, depth)}`;
        case 'unchanged':
          return getStringValue(gap, ' ', diff.key, diff.oldValue, depth);
        default:
          return `${gap}    ${diff.key}: ${iter(diff.children, depth + 1)}`;
      }
    });
    return ['{', ...lines, `${gap}}`].join('\n');
  };
  return iter(diffValues, 0);
};

export default makeStylish;
