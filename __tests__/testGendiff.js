import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import result from '../__fixtures__/result.js';
import genDiff from '../cli/filecomparison.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPathFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('diffirence with two flat files', () => {
  expect(genDiff(getPathFile('file1.json'), getPathFile('file2.json')))
    .toEqual(result);
});
