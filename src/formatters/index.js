import makeStylish from './stylish.js';
import makePlain from './plain.js';

export default (diff, formatter) => {
  switch (formatter) {
    case 'stylish':
      return makeStylish(diff);
    case 'plain':
      return makePlain(diff);
    case 'json':
      return JSON.stringify(diff);
    default:
      throw new Error(`Unknown name formatter: '${formatter}'!`);
  }
};
