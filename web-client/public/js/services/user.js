seMiProfeApp.service('userService', function ($http) {
  function responseData(response) {
    return response.data;
  }

  this.get = function (options) {
    return $http.get(apiUrl + '/user', { params: options }).then(responseData);
  };

  this.getByEmail = function (email) {
    var url = apiUrl + '/user/email?email=' + email;
    return $http.get(url).then(responseData);
  }

  this.getLanguages = function () {
    return $http.get(apiUrl + '/languages').then(responseData);
  };

  this.create = function (user) {
    return $http.post('/signup', user).then(responseData); // Post to the node application
  };
});
