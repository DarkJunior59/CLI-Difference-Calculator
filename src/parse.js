import * as fs from 'fs';

import path from 'path';

import yaml from 'js-yaml';

export default (fileName) => {
  const extName = path.extname(fileName);
  const filePathForParse = fs.readFileSync(path.resolve(`${process.cwd()}`, `${fileName}`), 'utf-8');
  switch (extName) {
    case '.json':
      return JSON.parse(filePathForParse);
    case '.yaml':
    case '.yml':
      return yaml.load(filePathForParse);
    default:
      throw new Error(`Unknown file format: ${extName}`);
  }
};
