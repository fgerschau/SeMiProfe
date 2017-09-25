const app = require('./config/express');
const config = require('./config/config');

const log4js = require('log4js');

const logger = log4js.getLogger();

require('./config/log')();
require('./config/routes')(app);

const PORT = config.port;

app.listen(PORT, () => {
  logger.info('#################################');
  logger.info(`# Server started at port ${PORT}  #`);
  logger.info('#################################');
});
