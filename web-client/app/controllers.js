exports.getIndex = function (req, res) {
  res.redirect('/search');
};

exports.getSearch = function (req, res) {
  res.render('search');
};

exports.getProfile = function(req,res) {
  res.render('profile');
}

exports.getLogin = function (req, res) {
  res.render('login');
};

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};
