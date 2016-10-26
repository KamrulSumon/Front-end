(function () {
    'use strict';

    angular
        .module('plunkar')
        .controller('MainController', MainController)
        .service('userService', userService);

    MainController.$inject = ['userService'];
    function MainController(userService) {
        var vm = this;
        vm.title = 'This is a controller';
        vm.display = function () {
            console.log(this.title);
        };

        var promise = userService.getUsers();
        promise.then(function (users) {
            vm.users = users;
            console.log(vm.users);
        }, function (error) {
            console.log(error);
        });
    }

    userService.$inject = ['$http', '$q'];
    function  userService($http, $q) {
        var self = this;

        self.getUsers = function () {
           return $http.get('http://mocker.egen.io/users')
               .then(function (response) {
                return response.data;
            }, function (response) {
                return $q.reject('Some error' + response.statusText);
            });
        };
    }

})();

/****************************************************** Old Fashion **********************************************************/

(function () {
    'use strict';

    angular
        .module('plunkar')
        .controller('MainController', MainController)
        .service('userService', userService);

    MainController.$inject = ['userService'];
    function MainController(userService) {
        var vm = this;
        vm.title = 'This is a controller';
        vm.display = function () {
            console.log(this.title);
        };

        userService.getUsers(function (users) {
            vm.users  = users;
            console.log(vm.users);
        });
    }

    userService.$inject = ['$http'];
    function  userService($http) {
        var self = this;
        
        self.getUsers = function (successFn) {
            $http.get('http://mocker.egen.io/users').then(function (response) {
                successFn(response.data);
            }, function (response) {
                console.log(response);
            });
        };
    }

})();




