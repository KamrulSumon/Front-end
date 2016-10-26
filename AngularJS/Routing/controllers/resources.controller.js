(function () {
    'use strict';

    angular
        .module('plunkar')
        .controller('ResourcesController', ResourcesController);

    ResourcesController.$inject = [];
    function ResourcesController() {
        var resourcesVm = this;
        init();
        function init() {
            console.log("Resources ");
        }
    }

})();
