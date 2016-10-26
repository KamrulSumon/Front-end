(function () {
    'use strict';

    angular.module('plunkar')
        .service('userService', userService);

    userService.$inject = ['$http', '$q'];
    function userService($http, $q) {
        var self = this;

        self.getUsers = getUsers;
        self.getUserById = getUserById;

        //get list of users
        function getUsers() {
            return $http.get('http://mocker.egen.io/users')
                .then(successFn, errorFn);
        }

        //get user by id
        function  getUserById(id) {
            return $http.get('http://mocker.egen.io/users/' + id)
                .then(successFn, errorFn);
        }


        function successFn(response){
            return response.data;
        }

        function errorFn(response) {
            return $q.reject('ERROR: ' + response.statusText);
        }

    }
})();
