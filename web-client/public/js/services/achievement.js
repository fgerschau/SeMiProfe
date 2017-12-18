seMiProfeApp.service('achievementService', function ($http) {
  function responseData(response) {
    return response.data;
  }

  this.get = function () {
    return $http.get(apiUrl + '/achievements').then(responseData);
  };
});
