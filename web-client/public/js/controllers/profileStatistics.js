seMiProfeApp.controller('profileStatisticsController', function ($scope, userService, achievementService) {
  function addAchievements(a, b) {
    return a.points + b.points;
  }

  function calculateAverageValuation(reviews) {
    if (!reviews || !reviews.length) {
      return 0;
    }

    var average = 0;
    for (var i = 0; i < reviews.length; i++) {
      var review = reviews[i];
      average += review.stars;
    }

    average /= reviews.length;
    return average;
  }

  $scope.init = function () {
    userService.getLoggedUser().then(function (user) {
      user.averageValuation = calculateAverageValuation(user.receivedReviews);
      user.averageValuationPercentage = user.averageValuation > 0 ? user.averageValuation / 5 * 100 : 0;
      user.averageValuationGivenReviews = calculateAverageValuation(user.givenReviews);
      user.averageValuationGivenReviewsPercentage = user.averageValuationGivenReviews > 0 ? user.averageValuationGivenReviews / 5 * 100 : 0;
      user.achievementPoints = user.achievements && user.achievements.length ? user.achievements.reduce(addAchievements, { points: 0 }) : 0;
      $scope.user = user;

      achievementService.get().then(function (achievements) {
        $scope.allAchievements = achievements;
        $scope.achievementsPercentage = $scope.user.achievements && $scope.user.achievements.length > 0 ? $scope.user.achievements.length / achievements.length * 100 : 0;
      });
    }).catch(console.log);
  };
});
