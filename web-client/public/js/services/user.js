seMiProfeApp.service('userService', function ($http) {
  function responseData(response) {
    return response.data;
  }

  this.get = function (options) {
    return $http.get(apiUrl + '/user', options).then(responseData);
  };
});
