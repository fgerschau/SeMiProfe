seMiProfeApp.controller('calendarController', function ($scope, availabilityService) {
    function getAvailability() {
        availabilityService.get().then(function(data){
            console.log("eeee");
            console.log(data);
        })
    };
    getAvailability();
});