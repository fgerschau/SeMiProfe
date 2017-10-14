var seMiProfeApp = angular.module('seMiProfeApp', ['ui.bootstrap']);
var apiUrl = window.location.href.match(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/g);
apiUrl = apiUrl + ":3000";

var LANGUAGETRANSLATION = {
  'es-ES': 'Español',
  'en-GB': 'Inglés británico',
};
