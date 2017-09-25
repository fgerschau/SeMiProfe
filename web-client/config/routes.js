'use strict';

const controller = require('../app/controllers');

module.exports = function (app) {
  app.route('/search').get(controller.getSearch);

  app.route('/').get(controller.getSearch);
};
