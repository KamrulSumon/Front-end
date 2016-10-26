(function () {
    'use strict';

    angular
        .module('plunkar')
        .controller('MainController', MainController);

    MainController.$inject = ['dataService'];
    function MainController(dataService) {
        var vm = this;

        vm.addUser =  addUser;
        vm.deleteUser = deleteUser;
        vm.changeSort = changeSort;
        init();


        function init() {

            vm.sorter = {
                by: 'firstName',
                reverse: false
            };

            dataService.getUsers()
                .then(function (users) {
                vm.users = users;
            }, function (error) {
                console.log(error);
            })
        }

        vm.title = 'This is a controller';
        vm.display = function () {
            console.log(this.title);
        };

        vm.func = function () {
            console.log('Cliked');
        };



        function changeSort(prop) {
            vm.sorter.by = prop;
            vm.sorter.reverse = !vm.sorter.reverse;
        }

       function addUser() {
            vm.newUsers.id = fakeUUID();
            vm.users.push(vm.newUsers);
            vm.newUsers = null;
        }


        function deleteUser(position) {
            vm.users.splice(position, 1);
            console.log(vm.users);
        }

        function fakeUUID() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    }

})();


/*var main = new MainController();
 console.dir(main);

 main.display();*/

