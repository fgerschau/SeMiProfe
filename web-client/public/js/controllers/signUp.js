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

  function getTeachers(updatePagination) {
    $scope.filter = {
      page: $scope.page - 1,
      size: SIZE,
      search: $scope.searchQuery,
      language: $scope.languageCode,
    };

    userService.get($scope.filter).then(function (data) {
      $scope.totalPages = data.totalPages;
      $scope.totalElements = data.totalElements;
      if (updatePagination) {
        getPaginationArray(1, $scope.MAXPAGES);
      }

      for (var i = 0; i < data.content.length; i++) {
        data.content[i].languageTranslation = LANGUAGETRANSLATION[data.content[i].language] || '';
      }

      $scope.tableData = data.content;
    });
  }

  $scope.search = function () {
    $scope.page = 1;
    getTeachers(true);
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
