(function () {
    'use strict';

    angular
        .module('plunkar', ['ngRoute'])
        .config(moduleConfig);


    function moduleConfig($routeProvider) {

        $routeProvider
            .when('/users', {
                templateUrl: 'views/users.tmpl.html',
                controller: 'UsersController',
                controllerAs: 'usersVm'
            })
            .when('/users/:id', {
                templateUrl: 'views/user-detail.tmpl.html',
                controller: 'UserDetailController',
                controllerAs: 'userDetailVm'
            })
            .when('/resources', {
                templateUrl: 'views/resources.tmpl.html',
                controller: 'ResourcesController',
                controllerAs: 'resourcesVm'
            })
            .otherwise({
                redirectTo: '/users'
            })
    }

})();


/*var main = new MainController();
 console.dir(main);

 main.display();*/
