seMiProfeApp.service('availabilityService', function ($http) {
  function responseData(response) {
    return response.data;
  }
  this.save = function (events, id) {
    return $http.post(apiUrl + '/save-availability?id=' + id, events).then(responseData);
  };
});
