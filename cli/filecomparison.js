import _ from 'lodash';

import * as fs from 'fs';

import path from 'path';


const parseJSON = (filepath) => JSON.parse(fs.readFileSync(path.resolve(`${process.cwd()}`, `${filepath}`), 'utf-8'));


const genDiff = (file1, file2) => {
    const data1 = parseJSON(file1);
    const data2 = parseJSON(file2);
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.sortBy(_.uniq(_.concat(keys1, keys2)));
    const comparison = (str, key) => {
      if (!_.has(data1, key)) {
        str = `${str}\n+ ${key} : ${data2[key]}`;
      } else if (!_.has(data2, key)) {
        str = `${str}\n- ${key} : ${data1[key]}`;
      } else if (data1[key] !== data2[key]) {
        str = `${str}\n- ${key} : ${data1[key]}\n+ ${key} : ${data2[key]}`;
      } else {
        str = `${str}\n  ${key} : ${data1[key]}`;
      }
      return str;
    }
    return `${keys.reduce(comparison, '{')}\n}`;
};

export default genDiff;