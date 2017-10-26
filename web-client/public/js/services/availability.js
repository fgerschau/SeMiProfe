seMiProfeApp.service('availabilityService', function ($http) {
  console.log('availabilityService');
  function responseData(response) {
    return response.data;
  }

  this.save = function (events) {
    return $http.post(apiUrl + '/save-availability', events).then(responseData);
  };
});
