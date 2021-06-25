import * as fs from 'fs';
import path from 'path';
import genDiff from './fileComparison.js';
import makeDiff from './formatters/index.js';
import parse from './parse.js';

const getFileExt = (fileName) => path.extname(fileName).slice(1);
const getDataForParse = (fileName) => fs.readFileSync(path.resolve(`${process.cwd()}`, `${fileName}`), 'utf-8');

export default (filePath1, filePath2, formatterName = 'stylish') => {
  const extFile1 = getFileExt(filePath1);
  const extFile2 = getFileExt(filePath2);
  const dataFile1 = getDataForParse(filePath1);
  const dataFile2 = getDataForParse(filePath2);
  const file1 = parse(extFile1, dataFile1);
  const file2 = parse(extFile2, dataFile2);
  const diff = genDiff(file1, file2);
  return makeDiff(diff, formatterName);
};
