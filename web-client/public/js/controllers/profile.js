seMiProfeApp.controller('profileController', function ($scope, userService, reviewService) {
  $scope.init = function (user) {
    userService.getByEmail(user.email).then(function (user) {
      $scope.selectedUser = user;
      userService.getLoggedUser().then(function (data) {
        $scope.user = data;
      }).catch(console.log);
    }).catch(console.log);
  };

  $scope.saveReview = function () {
    var review = {
      comment: $scope.comment,
      stars: $scope.stars,
      authorId: $scope.user.id,
      userId: $scope.selectedUser.id,
    };

    reviewService.save(review).then($scope.init)
  };
});
