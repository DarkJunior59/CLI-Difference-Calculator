import yaml from 'js-yaml';

export default (extName, data) => {
  switch (extName) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
    case '.yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown file format: ${extName}`);
  }
};
