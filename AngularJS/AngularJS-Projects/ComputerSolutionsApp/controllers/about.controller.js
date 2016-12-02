(function () {
    'use strict';

    angular
        .module('computer')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];
    function AboutController($scope) {
        var aboutVm = this;
        init();
        function init() {
            console.log(' from about controller');
        }
    }

})();