const LocalStrategy = require('passport-local').Strategy;
const userController = require('../app/user');



module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.email);
  });

  passport.deserializeUser(function (email, done) {
    userController.getByEmail(email).then(function (user) {
      done(null, user)
    });
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, function (req, email, password, done) {
    userController.validatePassword(email, password).then(function (user) {
      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    });
  }));
};
