'use strict';

const controller = require('../app/controllers');

module.exports = function (app) {
  app.route('/search').get(controller.getSearch);
  app.route('/signUp').get(controller.getSignUp);
  app.route('/').get(controller.getSearch); // TODO: Homepage
};
