seMiProfeApp.service('reviewService', function ($http) {
  function responseData(response) {
    return response.data;
  }

  this.save = function (review) {
    return $http.post(apiUrl + '/review?userId=' + review.userId + '&authorId=' + review.authorId + '&stars=' + review.stars + '&comment=' + review.comment).then(responseData);
  };

  this.getId = function () {
    return $http.get('/get-user-id').then(responseData);
  };

  this.getSelectedId = function () {
    return $http.get('/get-selectedUser-id').then(responseData);
  };
});
