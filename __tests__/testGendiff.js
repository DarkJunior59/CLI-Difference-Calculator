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

test.each([
  [beforeJson, afterJson, resultStylish],
  [beforeYaml, afterYaml, resultStylish],
])('diffirence between two files with stylish format', (file1, file2, result) => {
  expect(genDiff(file1, file2)).toBe(result);
});

test.each([
  [beforeJson, afterJson, resultPlain],
  [beforeYaml, afterYaml, resultPlain],
])('diffirence between two files with plain format', (file1, file2, result) => {
  expect(genDiff(file1, file2, 'plain')).toBe(result);
});

test.each([
  [beforeJson, afterJson, resultJson],
  [beforeYaml, afterYaml, resultJson],
])('diffirence between two files with json format', (file1, file2, result) => {
  expect(genDiff(file1, file2, 'json')).toBe(result);
});
