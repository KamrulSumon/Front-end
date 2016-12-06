(function () {
    'use strict';

    angular
        .module('templateStore.templates')
        .controller('TemplatesController', TemplatesController);

    TemplatesController.$inject = ['$scope', '$http'];
    function TemplatesController($scope, $http) {
        var tmplVm = this;

        $http.get('json/templates.json').success(function (data) {
            $scope.templates = data;
        });
    }

})();