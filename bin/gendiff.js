#!/usr/bin/env node

import commander from 'commander';

const program = commander
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --HELP', 'output usage information')
  .parse(process.argv);

export default program;
