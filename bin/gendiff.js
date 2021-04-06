#!/usr/bin/env node

import program from 'commander';

import genDiff from '../cli/filecomparison.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)))
  .parse(process.argv);

export default program;
