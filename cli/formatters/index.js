import stylish from './stylish.js';
import plain from './plain.js';

export default (diff, formatter) => {
  if (formatter === 'stylish') {
    return stylish(diff);
  }
  if (formatter === 'plain') {
    return plain(diff);
  }
  throw new Error(`Unknown formatter: '${formatter}'!`);
};
