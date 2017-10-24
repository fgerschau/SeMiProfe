seMiProfeApp.controller('signUpController', function ($scope, userService) {
  var SIZE = 10;
  $scope.MAXPAGES = 5;
  $scope.page = 1;
  $scope.tableData = [];
  $scope.languages = [{
    translation: 'Selecciona un idioma',
    code: '',
  }];

  function getPaginationArray(from, to) {
    if (((from - 1) % $scope.MAXPAGES !== 0 || to % $scope.MAXPAGES !== 0)) {
      return $scope.pageArray;
    }

    from = from > 0 ? from : 1;
    to = to < $scope.totalPages ? to : $scope.totalPages;
    from = to - from <= $scope.MAXPAGES ? from : to - $scope.MAXPAGES;

    var pages = [];
    for (var i = from; i <= to; i++) {
      pages.push(i);
    }

    $scope.pageArray = pages;
    return pages;
  }

  $scope.getPaginationArray = getPaginationArray;

  function saveUser(updatePagination) {
    $scope.user = {
      name: $scope.name,
      lastname: $scope.lastname,
      email: $scope.tlf,
      provincia: $scope.provincia,
      localidad: $scope.localidad,
      userType: $scope.userType,
      password: $scope.password,
      confirmPassword: $scope.confirmPassword;
    };

    userService.post($scope.user).then(function (data) {});
  }

  $scope.signUp = function () {
    //$scope.page = 1;
    saveUser(true);
  };

  function goToPage(page) {
    $scope.page = page;
    getTeachers(false);
  }

  $scope.goToPage = goToPage;

  function getLanguages() {
    userService.getLanguages().then(function (languages) {
      for (var i = 0; i < languages.length; i++) {
        var language = languages[i];
        $scope.languages.push({
          translation: LANGUAGETRANSLATION[language],
          code: language,
        });
      }
    });
  }

  function init() {
    getTeachers(true);
    getLanguages();
  }

  init();
});
