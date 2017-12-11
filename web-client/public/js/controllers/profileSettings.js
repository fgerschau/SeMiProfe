seMiProfeApp.controller('profileSettingsController', function ($scope, $window, userService) {
  $scope.error = {};
  $scope.languages = LANGUAGETRANSLATION;
  $scope.user = {};
  $scope.selectedUserEmail;

  $scope.init = function () {
    userService.getLoggedUser().then(function (user) {
      user.type = user.isTeacher ? 'teacher' : 'student';
      $scope.user = user;
    }).catch(console.log);
  };

  function testEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  function checkErrorsExist() {
    for (var error in $scope.error) {
      if ($scope.error[error]) {
        return true;
      }
    }

    return false;
  }

  function resetErrors() {
    for (var error in $scope.error) {
      $scope.error[error] = false;
    }
  }

  function checkErrors() {
    return new Promise(function (resolve, reject) {
      resetErrors();
      $scope.error.lastName = !$scope.user.lastName;
      $scope.error.firstName = !$scope.user.firstName;
      $scope.error.state = !$scope.user.state;
      $scope.error.userType = !$scope.user.isTeacher;
      $scope.error.emailInvalid = !!$scope.user.email && !testEmail($scope.user.email);
      $scope.error.language = $scope.user.isTeacher === 'teacher' && !$scope.user.language;

      var errors = checkErrorsExist();
      resolve(errors);
    });
  }

  $scope.update = function () {
    checkErrors().then(function (errors) {
      const user = $scope.user;
      user.isTeacher = user.type === 'teacher';
      if (!errors) {
        userService.update(user).then(function () {
          $window.location.href = '/profile';
        });
      }
    });
  };
});
