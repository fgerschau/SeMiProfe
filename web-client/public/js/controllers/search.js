seMiProfeApp.controller('searchController', function ($scope, userService) {
  var SIZE = 5;
  var SELECTACITY = 'Selecciona una ciudad';
  var SELECTASTATE = 'Selecciona una comunidad';
  $scope.MAXPAGES = 5;
  $scope.page = 1;
  $scope.tableData = [];
  $scope.languages = [{
    translation: 'Selecciona un idioma',
    code: '',
  }];
  $scope.towns = [SELECTACITY];
  $scope.selectedTown = $scope.towns[0];
  $scope.states = [SELECTASTATE];
  $scope.selectedState = $scope.states[0];
  $scope.levels = [];

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

  function levelMap(level) {
    return level.code;
  }

  function levelFilter(level) {
    return level.selected === true;
  }

  function getTeachers(updatePagination) {
    $scope.filter = {
      page: $scope.page - 1,
      size: SIZE,
      search: $scope.searchQuery,
      language: $scope.languageCode,
      cefrlevels: $scope.levels.filter(levelFilter).map(levelMap),
      state: $scope.selectedState === SELECTASTATE ? '' : $scope.selectedState,
      town: $scope.selectedTown === SELECTACITY ? '' : $scope.selectedTown,
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
        if (language) {
          $scope.languages.push({
            translation: LANGUAGETRANSLATION[language],
            code: language,
          });
        }
      }
    });
  }

  function setLevelsArray() {
    for (var level in CEFR_LEVELS) {
      $scope.levels.push({
        code: level,
        name: CEFR_LEVELS[level],
      })
    }
  }

  function getStates() {
    userService.getStates().then(function (states) {
      $scope.states = $scope.states.concat(states);
    });
  }

  function getTowns() {
    userService.getTowns().then(function (towns) {
      $scope.towns = $scope.towns.concat(towns);
    });
  }

  function init() {
    getTeachers(true);
    getLanguages();
    setLevelsArray();
    getStates();
    getTowns();
  }

  init();
});
