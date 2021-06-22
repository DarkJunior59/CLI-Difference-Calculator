import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getPathFile(filename), 'utf-8');

const beforeJson = getPathFile('file1.json');
const afterJson = getPathFile('file2.json');
const beforeYaml = getPathFile('file1.yaml');
const afterYaml = getPathFile('file2.yaml');

const resultStylish = readFile('stylish.txt');
const resultPlain = readFile('plain.txt');
const resultJson = readFile('json.txt');

test('diffirence between two json files with stylish format', () => {
  expect(genDiff(beforeJson, afterJson))
    .toEqual(resultStylish);
});

test('diffirence between two yaml files with stylish format', () => {
  expect(genDiff(beforeYaml, afterYaml))
    .toEqual(resultStylish);
});

test('diffirence between two json files with plain format', () => {
  expect(genDiff(beforeJson, afterJson, 'plain'))
    .toEqual(resultPlain);
});

test('diffirence between two yaml files with plain format', () => {
  expect(genDiff(beforeYaml, afterYaml, 'plain'))
    .toEqual(resultPlain);
});

test('diffirence between two json files with json format', () => {
  expect(genDiff(beforeJson, afterJson, 'json'))
    .toEqual(resultJson);
});

test('diffirence between two yaml files with json format', () => {
  expect(genDiff(beforeYaml, afterYaml, 'json'))
    .toEqual(resultJson);
});
