import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));
  const difference = keys.map((key) => {
    if (!_.has(data2, key)) {
      return { key, status: 'removed', oldValue: data1[key] };
    }
    if (!_.has(data1, key)) {
      return { key, status: 'added', newValue: data2[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, status: 'objects', children: genDiff(data1[key], data2[key]) };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key, status: 'changed', oldValue: data1[key], newValue: data2[key],
      };
    }
    return { key, status: 'unchanged', oldValue: data1[key] };
  });
  return difference;
};

export default genDiff;
