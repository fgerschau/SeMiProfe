const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');
const path = require('path');
const log4js = require('log4js');
const helmet = require('helmet');
const flash = require('connect-flash');
const toastr = require('express-toastr');

const logger = log4js.getLogger('Access');


module.exports = (() => {
  const app = express();

  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, '../app/views'));
  app.set('view engine', 'pug');
  app.use(favicon('public/images/favicon.png'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(helmet());
  app.use(log4js.connectLogger(logger, { level: 'auto', format: ':method :url :status - :response-time ms' }));
  app.use(flash());
  app.use(toastr());
  app.use(function (req, res, next) {
    req.toastr.error('Error');
    next();
  });
  app.use(function (err, req, res, next) {
    if (err) {
      req.logout();
    } else {
      next();
    }
  });

  app.use(errorHandler());

  return app;
})();
