console.log(process.env.NODE_ENV, 'envenvenvenvenvenvenvprocess.env.NODE_ENV');

let config;
const configFile = `${process.env.NODE_ENV || 'development'}.js`;
try {
  config = require('./base/' + (configFile));
} catch (err) {
  if (err.code && err.code === 'MODULE_NOT_FOUND') {
    console.error('No config file matching ENV=' + env.NODE_ENV
      + '. Requires "' + env.NODE_ENV + '.json"');
    // process.exit(1);
  } else {
    throw err;
  }
}
module.exports = config;
