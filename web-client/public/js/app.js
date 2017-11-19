var seMiProfeApp = angular.module('seMiProfeApp', ['ui.bootstrap']);
var apiUrl = window.location.href.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/g);
apiUrl = apiUrl + ":3000";

var LANGUAGETRANSLATION = {
  'es-ES': 'Español',
  'de-DE': 'Alemán',
  'en-GB': 'Inglés británico',
  'en-US': 'Inglés EEUU',
};

var CEFR_LEVELS = {
  1: 'A1',
  2: 'A2',
  3: 'B1',
  4: 'B2',
  5: 'C1',
  6: 'C2',
};
