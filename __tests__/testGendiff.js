import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../cli/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getPathFile(filename), 'utf-8');

const beforeJson = getPathFile('filepath1.json');
const afterJson = getPathFile('filepath2.json');
const beforeYaml = getPathFile('filepath1.yaml');
const afterYaml = getPathFile('filepath2.yaml');
const beforeYml = getPathFile('filepath1.yml');
const afterYml = getPathFile('filepath2.yml');

const resultStylish = readFile('stylish.txt');
const resultPlain = readFile('plain.txt');

test('diffirence between two json files with stylish format', () => {
  expect(genDiff(beforeJson, afterJson))
    .toEqual(resultStylish);
});

test('diffirence between two yaml files with stylish format', () => {
  expect(genDiff(beforeYaml, afterYaml))
    .toEqual(resultStylish);
  expect(genDiff(beforeYml, afterYml))
    .toEqual(resultStylish);
});

test('diffirence between two json files with plain format', () => {
  expect(genDiff(beforeJson, afterJson, 'plain'))
    .toEqual(resultPlain);
});

test('diffirence between two yaml files with plain format', () => {
  expect(genDiff(beforeYaml, afterYaml, 'plain'))
    .toEqual(resultPlain);
  expect(genDiff(beforeYml, afterYml, 'plain'))
    .toEqual(resultPlain);
});
