seMiProfeApp.controller('profileController', function ($scope, userService, reviewService) {
  var NREVIEWS = 5;

  $scope.init = function (selectedUser) {
    $scope.showMore = true;
    $scope.NREVIEWS = NREVIEWS;
    $scope.selectedUser = selectedUser;
    userService.getByEmail(selectedUser.email).then(function (user) {
      $scope.selectedUser = user;
      $scope.reviews = $scope.selectedUser.receivedReviews.slice(0, NREVIEWS);
      userService.getLoggedUser().then(function (data) {
        $scope.user = data;
      }).catch(console.log);
    }).catch(console.log);
  };

  function reload() {
    userService.getByEmail($scope.selectedUser.email).then(function (user) {
      $scope.selectedUser = user;
      $scope.reviews = $scope.selectedUser.receivedReviews.slice(0, NREVIEWS);
    }).catch(console.log);
  }

  $scope.saveReview = function () {
    var review = {
      comment: $scope.comment,
      stars: $scope.stars,
      authorId: $scope.user.id,
      userId: $scope.selectedUser.id,
    };

    reviewService.save(review).then(reload);
  };

  function changeReviewsShowed(nReviews) {
    nReviews = nReviews === -1 ? undefined : NREVIEWS;
    $scope.reviews = $scope.selectedUser.receivedReviews.slice(0, nReviews);
  }

  $scope.toggleShowMore = function () {
    if ($scope.showMore) {
      changeReviewsShowed(-1);
    } else {
      changeReviewsShowed();
    }

    $scope.showMore = !$scope.showMore;
  };

  $scope.getNumber = function (number) {
    return new Array(number);
  };
});
