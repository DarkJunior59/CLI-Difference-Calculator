import _ from 'lodash';

const [minus, plus, space] = ['-', '+', ' '];

const getInterval = (depth) => space.repeat(4).repeat(depth);

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

const stylish = (diffValues) => {
  const iter = (currentValues, depth) => {
    const gap = getInterval(depth);
    const lines = currentValues.map((diff) => {
      if (diff.status === 'removed') {
        return getStringValue(gap, minus, diff.key, diff.oldValue, depth);
      }
      if (diff.status === 'added') {
        return getStringValue(gap, plus, diff.key, diff.newValue, depth);
      }
      if (diff.status === 'changed') {
        return `${getStringValue(gap, minus, diff.key, diff.oldValue, depth)}\n${getStringValue(gap, plus, diff.key, diff.newValue, depth)}`;
      }
      if (diff.status === 'unchanged') {
        return getStringValue(gap, space, diff.key, diff.oldValue, depth);
      }
      return `${gap}    ${diff.key}: ${iter(diff.children, depth + 1)}`;
    });
    return ['{', ...lines, `${gap}}`].join('\n');
  };
  return iter(diffValues, 0);
};

export default stylish;
