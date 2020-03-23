console.log(process.env.config, 'envenvenvenvenvenvenvprocess.env.config');

let config;
const configFile = `${process.env.config || 'development'}.js`;
try {
  // eslint-disable-next-line global-require
  config = require(`./base/${configFile}`);
} catch (err) {
  if (err.code && err.code === 'MODULE_NOT_FOUND') {
    console.error(
      `No config file matching config=${process.env.config}. Requires "${process.env.config}.json"`,
    );
    // process.exit(1);
  } else {
    throw err;
  }
}
module.exports = config;
