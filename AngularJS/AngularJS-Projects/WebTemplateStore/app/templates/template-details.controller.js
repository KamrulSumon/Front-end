(function () {
    'use strict';

    angular
        .module('templateStore.templates')
        .controller('TemplateDetailsController', TemplateDetailsController);

    TemplateDetailsController.$inject = ['$scope', '$http', '$routeParams', '$filter'];
    function TemplateDetailsController($scope, $http, $routeParams, $filter) {
        var tmpldtlVm = this;

        var templateId = $routeParams.id;

        $http.get('json/templates.json').success(function (data) {
            $scope.template = $filter('filter')(data, function (d) {
                return d.id == id;
            })[0];

            $scope.mainImage = $scope.template.images[0].name;
        });

        $scope.setImage = function (image) {
            $scope.mainImage = image.name;
        }

        console.log('From template details controller');

    }

})();