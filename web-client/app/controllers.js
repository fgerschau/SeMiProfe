const userController = require('./user');
var userId;
exports.getIndex = function (req, res) {
  res.redirect('/search');
};

exports.getSearch = function (req, res) {
  res.render('search');
};

exports.getSignUp = function (req, res) {
  res.render('signUp');
};

exports.getAvailability = function (req, res) {
  res.render('availability');
};

exports.getMyProfile = function (req, res) {
  userId=req.user.id;
  res.render('myProfile');
};

exports.getProfile = function (req, res) {
  userController.getByEmail(req.params.email).then(function (user) {
    res.locals.selectedUser = user;
    userId = user.id;
    res.render('profile');
  })
};

exports.getLogin = function (req, res) {
  res.render('login');
};

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};

exports.getUserId = function(req,res){
  res.send(req.user.id.toString());
};
exports.getSelectedUserId = function(req,res){
    res.send(userId.toString());
};

exports.getReviews = function (req, res) {
  res.render('reviews');
};

