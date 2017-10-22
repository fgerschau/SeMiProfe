'use strict'

const log4js = require('log4js');
const config = require('./config');

module.exports = () => {
  const log = config.log;
  log4js.configure(log);
};
