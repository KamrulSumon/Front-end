(function () {
    'use strict';

    angular.module('plunkar').controller('MainController', MainController);
    MainController.$inject = ['$rootScope', '$http'];
    
    function MainController($rootScope, $http) {
        var vm = this;
        vm.title = 'This is a controller';
        vm.display = function () {
            console.log(this.title);
        };

        $rootScope.someProp = 100;

        console.log($rootScope.someProp);
        $http.get('http://mocker.egen.io/users');
    }

})();


/*var main = new MainController();
 console.dir(main);

 main.display();*/

