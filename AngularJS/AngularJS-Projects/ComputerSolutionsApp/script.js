(function () {
    'use strict';

    angular
        .module('computer', ['ngRoute'])
        .config(moduleConfig);


    function moduleConfig($routeProvider) {

        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.tmpl.html',
                controller: 'MainController',
                controllerAs: 'mainVm'
            })
            .when('/about', {
                templateUrl: 'views/about.tmpl.html',
                controller: 'AboutController',
                controllerAs: 'aboutVm'
            })
            .when('/contact', {
                templateUrl: 'views/contact.tmpl.html',
                controller: 'ContactController',
                controllerAs: 'contactVm'
            })
            .when('/services', {
                templateUrl: 'views/services.tmpl.html',
                controller: 'ServicesController',
                controllerAs: 'servicesVm'
            })
            .otherwise({
                redirectTo: '/main'
            })
    }

})();