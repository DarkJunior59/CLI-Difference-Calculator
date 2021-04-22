import _ from 'lodash';
import parseFile from './parsers.js';

const genDiff = (file1, file2) => {
  const data1 = parseFile(file1);
  const data2 = parseFile(file2);
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.uniq(_.concat(keys1, keys2)));
  const comparison = (string, key) => {
    let str = string;
    if (!_.has(data1, key)) {
      str = `${str}\n  + ${key}: ${data2[key]}`;
    } else if (!_.has(data2, key)) {
      str = `${str}\n  - ${key}: ${data1[key]}`;
    } else if (data1[key] !== data2[key]) {
      str = `${str}\n  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    } else {
      str = `${str}\n    ${key}: ${data1[key]}`;
    }
    return str;
  };
  const result = `${keys.reduce(comparison, '{')}\n}`;
  return result;
};

export default genDiff;
