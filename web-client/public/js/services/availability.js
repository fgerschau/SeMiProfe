seMiProfeApp.service('availabilityService', function ($http) {
  function responseData(response) {
    return response.data;
  }
  this.save = function (events,id) {
      return $http.post(apiUrl + '/save-availability?id=' + id, events).then(responseData);
  };
  this.getId = function (){
    return $http.get('/get-user-id').then(responseData);
  };
  this.getSelectedId = function (){
        return $http.get('/get-selectedUser-id').then(responseData);
    };
});
