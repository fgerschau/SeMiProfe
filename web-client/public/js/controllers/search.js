seMiProfeApp.controller('searchController', function ($scope, userService) {
  $scope.filter = {};

  userService.get($scope.filter).then(function (data) {
    $scope.tableData = data;
  });
});
