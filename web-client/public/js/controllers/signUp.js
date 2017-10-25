seMiProfeApp.controller('signUpController', function ($scope, $window, userService) {
  $scope.error = {};
  $scope.languages = LANGUAGETRANSLATION;

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
      $scope.error.province = !$scope.user.province;
      $scope.error.userType = $scope.user.isTeacher === null;
      $scope.error.password = !$scope.user.password;
      $scope.error.emailInvalid = !!$scope.user.email && !testEmail($scope.user.email);
      $scope.error.language = $scope.user.email != null && !$scope.user.language;

      userService.get({ email: $scope.email }).then(function (user) {
        if (user !== null) {
          $scope.emailExists = true;
        }

        var errors = checkErrorsExist();

        resolve(errors);
      });
    });
  }

  $scope.signUp = function () {
    checkErrors().then(function (errors) {
      if (!errors) {
        userService.create($scope.user).then(function () {
          $window.location.href = '/search';
        });
      }
    });
  };
});
