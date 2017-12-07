const LocalStrategy = require('passport-local').Strategy;
const userController = require('../app/user');



module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.email);
  });

  passport.deserializeUser(function (email, done) {
    userController.getByEmail(email).then(function (user) {
      if (!user) {
        done(null, null);
      }

      done(null, user);
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

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, function (req, email, password, done) {
    userController.getByEmail(email).then(function (user) {
      if (user) {
        return done(null, false); // user is taken
      }

      const newUser = {};
      newUser.email = email;
      newUser.password = userController.generateHash(password);
      newUser.firstName = req.body.firstName;
      newUser.lastName = req.body.lastName;
      newUser.phone = req.body.phone;
      newUser.state = req.body.state
      newUser.town = req.body.town;
      newUser.isTeacher = req.body.isTeacher;
      newUser.language = req.body.language;

      userController.create(newUser).then(function (createdUser) {
        return done(null, createdUser);
      }).catch(function (error) {
        return done(null, false);
      });
    });
  }));
};
