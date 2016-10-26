(function () {
    'use strict';

    angular
        .module('plunkar')
        .controller('MainController', MainController);
    MainController.$inject = ['$rootScope', '$http'];
    
    function MainController($http) {
        var vm = this;
        vm.title = 'This is a controller';
        vm.display = function () {
            console.log(this.title);
        };

        $http({
            method: 'GET',
            url: 'http://mocker.egen.io/users'
        }).then(function (response) {
          console.log(response);
        }, function (response) {
            console.log(response);
        })

    }

})();



