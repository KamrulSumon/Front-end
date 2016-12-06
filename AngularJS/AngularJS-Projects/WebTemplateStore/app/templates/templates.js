(function () {
    'use strict';

    angular
        .module('templateStore.templates', ['ngRoute'])
        .config(moduleConfig);


    function moduleConfig($routeProvider) {

        $routeProvider
            .when('/templates', {
                templateUrl: 'templates/templates.tmpl.html',
                controller: 'TemplatesController',
                controllerAs: 'tmplVm'
            })
            .when('/templates/:id', {
                templateUrl: 'templates/template-details.tmpl.html',
                controller: 'TemplateDetailsController',
                controllerAs: 'tmpdtlVm'
            })
            .otherwise({
                redirectTo: '/templates'
            })
    }

})();