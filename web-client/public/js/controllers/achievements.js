var achievementsController = seMiProfeApp.controller('achievementsController', function ($scope,$timeout) {
    //No hace nada este controller, pero me imagino que en un futuro servira para ciertas cosas.
    $timeout(function(){
        console.log($scope.userExperience);
    },1000);


});