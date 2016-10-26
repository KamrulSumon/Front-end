(function () {
    'use strict';

    angular.module('plunkar')
        .filter('phone', phoneFilter);

    function phoneFilter() {
        return function (phoneStr, countryCode) {

            var rez = [];

            if(phoneStr.length == 10){
                rez.push('(');
                rez.push(phoneStr.substring(0,3));
                rez.push(') ');
                rez.push(phoneStr.substring(3,6));
                rez.push('-');
                rez.push(phoneStr.substring(6));
            } else{
                return phoneStr;
            }
            return rez.join('');
        }
    }
})();