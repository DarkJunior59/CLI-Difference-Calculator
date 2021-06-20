import genDiff from './fileComparison.js';
import makeDiff from './formatters/index.js';
import parse from './parsers.js';

export default (filePath1, filePath2, formatterName = 'stylish') => {
  const before = parse(filePath1);
  const after = parse(filePath2);
  const diff = genDiff(before, after);
  return makeDiff(diff, formatterName);
};
