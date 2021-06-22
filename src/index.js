import * as fs from 'fs';
import path from 'path';
import genDiff from './fileComparison.js';
import makeDiff from './formatters/index.js';
import parse from './parse.js';

const extName = (fileName) => path.extname(fileName);
const filePathForParse = (fileName) => fs.readFileSync(path.resolve(`${process.cwd()}`, `${fileName}`), 'utf-8');

export default (filePath1, filePath2, formatterName = 'stylish') => {
  const extNameBefore = extName(filePath1);
  const extNameAfter = extName(filePath2);
  const dataBefore = filePathForParse(filePath1);
  const dataAfter = filePathForParse(filePath2);
  const before = parse(extNameBefore, dataBefore);
  const after = parse(extNameAfter, dataAfter);
  const diff = genDiff(before, after);
  return makeDiff(diff, formatterName);
};
