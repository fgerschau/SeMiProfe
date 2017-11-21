var reviewController = seMiProfeApp.controller('reviewController', function ($scope, reviewService) {
    var reviewedId;
    var reviewerID;
    var userId;
    var selectedUserId;
    
     $scope.saveReview = function (userId, selectedUserId) {
         var review = {comment: $scope.comment , valoration: $scope.valoration, userId: userId, reviewerId: selectedUserId}
         reviewService.save(review);
    
  };


});
