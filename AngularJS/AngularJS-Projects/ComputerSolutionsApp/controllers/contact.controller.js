(function () {
    'use strict';

    angular
        .module('computer')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope', 'contactService'];
    function ContactController($scope, contactService) {
        var contactVm = this;

        contactService.getLocations()
            .then(function (data) {
                $scope.locations = data;
            }, function (error) {
                console.log(error);
            })
    }

})();