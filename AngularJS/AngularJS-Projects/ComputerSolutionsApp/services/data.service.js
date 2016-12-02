(function () {
    'use strict';

    angular.module('computer')
        .service('dataService', dataService);

    dataService.$inject = ['$http', '$q'];
    function dataService($http, $q) {
        var self = this;

        self.getdata = getdata;

        //get list of users
        function getdata() {
            return $http.get('service.json')
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