(function () {
    'use strict';

    angular
        .module('computer')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'dataService'];
    function MainController($scope, dataService) {
        var mainVm = this;
        $scope.person = 'John Doe';

        dataService.getdata()
            .then(function (data) {
                $scope.servicedata = data;
            }, function (error) {
                console.log(error);
            })
    }

})();