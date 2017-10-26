'use strict';

const Auth = require('./middleware');

const controller = require('../app/controllers');

module.exports = function (app, passport) {
  app.get('*', function (req, res, next) {
    res.locals.loggedIn = !!req.user;
    res.locals.user = req.user;
    res.locals.selectedUser = req.user; //TODO
    next();
  });

  app.get('/', Auth.isLoggedIn, controller.getIndex); // TODO: Homepage

  app.get('/signup', controller.getSignUp);

  app.get('/login', controller.getLogin);

  app.get('/search', controller.getSearch);

  app.get('/profile', Auth.isLoggedIn, controller.getProfile);
  app.get('/profile/:email', Auth.isLoggedIn, controller.getProfile);

  app.get('/profile', Auth.isLoggedIn, controller.getMyProfile);

  app.get('/logout', controller.logout);

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/search',
  }));

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/search',
  }));
};
