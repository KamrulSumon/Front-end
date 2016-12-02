(function () {
    'use strict';

    angular.module('computer')
        .service('contactService', contactService);

    contactService.$inject = ['$http', '$q'];
    function contactService($http, $q) {
        var self = this;

        self.getLocations = getLocations;

        //get list of locations
        function getLocations() {
            return $http.get('location.json')
                .then(successFn, errorFn);
        }


        function successFn(response){
            console.log(response.data);
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }

    }
})();