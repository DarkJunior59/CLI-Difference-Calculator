import yaml from 'js-yaml';

export default (formatName, data) => {
  switch (formatName) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown file format: ${formatName}`);
  }
};
