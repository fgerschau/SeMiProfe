seMiProfeApp.service('availabilityService', function ($http) {
    function responseData(response) {
        return response.data;
    }

    this.get = function () {
        console.log("helko")
        return $http.get(apiUrl + '/availability').then(responseData);
    };
});
