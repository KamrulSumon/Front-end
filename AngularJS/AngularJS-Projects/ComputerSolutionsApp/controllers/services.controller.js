(function () {
    'use strict';

    angular
        .module('computer')
        .controller('ServicesController', ServicesController);

    ServicesController.$inject = ['$scope', 'dataService'];
    function ServicesController($scope, dataService) {
        var servicesVm = this;

        dataService.getdata()
            .then(function (data) {
                $scope.servicedata = data;
            }, function (error) {
                console.log(error);
            })
    }

})();