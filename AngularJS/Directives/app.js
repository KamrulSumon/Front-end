(function () {
    'use strict';

    angular
        .module('plunker', [])
        .controller('MainController', MainController)
        .directive('businessCard', businessCard);

    MainController.$inject = ['$timeout'];
    function MainController($timeout) {
        var mainVm = this;
        mainVm.title = 'AngularJS';


        mainVm.user = {
            "firstName": "Rodrick",
            "lastName": "Goyette",
            "email": "Kari_Mosciski@gmail.com",
            "address": {
                "street": "481 Silas Extension",
                "city": "Ziemeview",
                "zip": "04103-3269",
                "state": "VT",
                "country": "USA"
            },
            "company": {
                "name": "Amazon",
                "website": "http://cory.name"
            },
            "profilePic": "http://lorempixel.com/640/480/technics"
        };

        mainVm.manager = {
            "firstName": "Cathy",
            "lastName": "Maggio",
            "email": "Jensen_Gerhold49@gmail.com",
            "address": {
                "street": "7369 Cristal Ports",
                "city": "New Douglasborough",
                "zip": "91125",
                "state": "LA",
                "country": "USA"
            },
            "company": {
                "name": "Google",
                "website": "http://daren.name"
            },
            "profilePic": "http://lorempixel.com/640/480/fashion"
        };

        $timeout(function () {

            mainVm.user.name = 'Kamrul';
        }, 3000);
    }


    function businessCard() {
        var directive = {
            scope: {
                person: '='
            },
            link: function (scope, elem, attrs) {
                console.dir(scope);
                console.dir(elem);
                console.dir(attrs);
            },
            templateUrl: 'business-card.tmpl.html'
        };

        return directive;
    }

})();


