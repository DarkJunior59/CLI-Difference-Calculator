import stylish from './stylish.js';

export default (diff, formatter) => {
  if (formatter === 'stylish') {
    return stylish(diff);
  }
  throw new Error(`Unknown formatter: '${formatter}'!`);
};
