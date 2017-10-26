var seMiProfeApp = angular.module('seMiProfeApp', ['ui.bootstrap']);
var apiUrl = window.location.href.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/g);
apiUrl = apiUrl + ":3000";

var LANGUAGETRANSLATION = {
  'es-ES': 'Español',
  'de-DE': 'Alemán',
  'en-GB': 'Inglés británico',
  'en-US': 'Inglés EEUU',
};
