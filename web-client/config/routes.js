'use strict';

const Auth = require('./middleware');

const controller = require('../app/controllers');

module.exports = function (app, passport) {
  app.get('*', function (req, res, next) {
    res.locals.loggedIn = !!req.user;
    res.locals.user = req.user;
    res.locals.selectedUser = req.user; //TODO
    res.locals.toastr = req.toastr;
    next();
  });

  app.get('/', Auth.isLoggedIn, controller.getIndex); // TODO: Homepage

  app.get('/signup', controller.getSignUp);

  app.get('/login', controller.getLogin);

  app.get('/search', controller.getSearch);

  app.get('/availability', Auth.isLoggedIn, controller.getAvailability);

  app.get('/profile/:email', Auth.isLoggedIn, controller.getProfile);

  app.get('/profile', Auth.isLoggedIn, controller.getMyProfile);

  app.get('/logout', controller.logout);

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true,
  }));

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true,
  }));

  app.get('/get-user-id', Auth.isLoggedIn, controller.getUserId);

  app.get('/logged-user', Auth.isLoggedIn, controller.getLoggedUser);
};
