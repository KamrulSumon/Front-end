(function () {
    'use strict';

    angular
        .module('plunkar')
        .controller('MainController', MainController)
        .service('userService', userService)
        .factory('userFactory', userFactory);
    MainController.$inject = ['$rootScope', '$http'];

    //controller
    function MainController($rootScope, $http, userService, userFactory) {
        var vm = this;
        vm.title = 'This is a controller';
        vm.display = function () {
            console.log(this.title);
        };

        $rootScope.someProp = 100;

        console.log($rootScope.someProp);
        $http.get('http://mocker.egen.io/users');

        console.dir(userService);
        userService.display();
        userFactory.display();
    }

    //service
    userService.$inject = [];
    function  userService() {
        var self = this;

        var count = 0;

        self.name = 'userService';
        self.display = function () {
            console.log(count + ' : '+ self.name);
            count++;
        };
    };

    //factory
    userFactory.$inject = [];
    function  userFactory() {
        var self = {};

        var count = 0;

        self.name = 'userService';
        self.display = function () {
            console.log(count + ' : '+ self.name);
            count++;
        };
    }

})();

/*********************************************************************************************************************************/
//two way to create funtion in JavaScript

//service pattern
function  userService() {
    var self = this;

    count = 0;

    self.name = 'userService';
    self.display = function () {
        console.log(count + ' : '+ self.name);
        count++;
    };
}


var user = new userService();
console.dir(user);


//factory pattern
function  userFactory() {
    var self = {};

    count = 0;

    self.name = 'userService';
    self.display = function () {
        console.log(count + ' : '+ self.name);
        count++;
    };
}

//don't need 'new'
var user2 = userFactory();
console.dir(user2);
