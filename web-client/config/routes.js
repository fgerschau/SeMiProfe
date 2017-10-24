'use strict';

const Auth = require('./middleware');

const controller = require('../app/controllers');

module.exports = function (app, passport) {
  app.get('*', function (req, res, next) {
    res.locals.loggedIn = !!req.user;
    res.locals.user = req.user;
    next();
  });

  app.get('/', Auth.isLoggedIn, controller.getIndex); // TODO: Homepage

  app.get('/login', controller.getLogin);

  app.get('/search', Auth.isLoggedIn, controller.getSearch);

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/search',
    failureRedirect: '/login',
  }));

  app.route('/profile').get(controller.getProfile);
  app.get('/logout', controller.logout);
};
