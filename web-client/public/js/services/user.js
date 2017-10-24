seMiProfeApp.service('userService', function ($http) {
  function responseData(response) {
    return response.data;
  }

  this.get = function (options) {
    return $http.get(apiUrl + '/user', { params: options }).then(responseData);
  };

  this.post = function (options){
    return $http.post(apiUrl + '/user/signup', { params: options }).then(responseData);
  };

  this.getLanguages = function () {
    return $http.get(apiUrl + '/languages').then(responseData);
  };
});
