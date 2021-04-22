import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import result from '../__fixtures__/result.js';
import genDiff from '../cli/filecomparison.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('diffirence with two flat json files', () => {
  expect(genDiff(getPathFile('filepath1.json'), getPathFile('filepath2.json')))
    .toEqual(result);
});

test('diffirence with two flat yaml files', () => {
  expect(genDiff(getPathFile('filepath1.yaml'), getPathFile('filepath2.yaml')))
    .toEqual(result);
  expect(genDiff(getPathFile('filepath1.yml'), getPathFile('filepath2.yml')))
    .toEqual(result);
});
