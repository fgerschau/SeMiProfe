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

  app.get('/signup', controller.getSignUp);

  app.get('/login', controller.getLogin);

  app.get('/search', controller.getSearch);

  app.get('/profile', Auth.isLoggedIn, controller.getProfile);

  app.get('/logout', controller.logout);

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/search',
    failureRedirect: '/login',
  }));

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/search',
    failureRedirect: '/signup',
  }));
};
