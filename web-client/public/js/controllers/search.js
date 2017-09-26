seMiProfeApp.controller('searchController', function ($scope, userService) {
  var SIZE = 10;
  $scope.page = 1;

  function getTeachers() {
    $scope.filter = {
      page: $scope.page,
      size: SIZE,
    };

    userService.get($scope.filter).then(function (data) {
      $scope.tableData = data.content;
      $scope.total = data.totalElements;
    });
  }

  getTeachers();
});
