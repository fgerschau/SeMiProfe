const app = require('./config/express');
const config = require('./config/config');

const log4js = require('log4js');
const logger = log4js.getLogger();

const passport = require('passport');
require('./config/passport')(passport);
const session = require('express-session');

app.use(session({ secret: 'semiprofeftw' }));
app.use(passport.initialize());
app.use(passport.session());

require('./config/log')();
require('./config/routes')(app, passport);

const PORT = config.port;

app.listen(PORT, () => {
  logger.info('#################################');
  logger.info(`# Server started at port ${PORT}  #`);
  logger.info('#################################');
});
