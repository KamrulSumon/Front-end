(function () {
    'use strict';

    angular.module('plunkar').controller('MainController', MainController);

    function MainController() {
        var vm = this;
        vm.title = 'This is a controller';
        vm.display = function () {
            console.log(this.title);
        };

        vm.func = function () {
            console.log('Cliked');
        };

        vm.addUser = function () {
            vm.newUsers.id = fakeUUID();
            vm.users.push(vm.newUsers);
            vm.newUsers = null;
        };

        vm.users = [
            {
                "id": "e5d818e5-a805-477b-a123-e7fe46961c92",
                "firstName": "Gregoria",
                "lastName": "Douglas",
                "email": "Blaise35@hotmail.com",
                "address": {
                    "street": "64197 Theresia Corner",
                    "city": "Robelborough",
                    "zip": "26911",
                    "state": "NM",
                    "country": "USA"
                },
                "dateCreated": "2016-10-15T14:16:23.853Z",
                "company": {
                    "name": "Marvin - Cartwright",
                    "website": "https://cruz.org"
                },
                "profilePic": "http://lorempixel.com/640/480/business"
            },
            {
                "id": "8b18b46b-bb2e-4920-8e6e-62b98278e4f7",
                "firstName": "Morgan",
                "lastName": "Daugherty",
                "email": "Domenica.Jast94@yahoo.com",
                "address": {
                    "street": "40276 Constance Walks",
                    "city": "Keaganberg",
                    "zip": "03933-2823",
                    "state": "IN",
                    "country": "USA"
                },
                "dateCreated": "2016-10-15T21:25:51.841Z",
                "company": {
                    "name": "Ondricka - Lakin",
                    "website": "http://burdette.biz"
                },
                "profilePic": "http://lorempixel.com/640/480/fashion"
            },
            {
                "id": "e393cdc7-ab20-45fb-927c-1743f8cdabed",
                "firstName": "Webster",
                "lastName": "Bernier",
                "email": "Ross_Herzog99@yahoo.com",
                "address": {
                    "street": "794 Kessler Manors",
                    "city": "New Roel",
                    "zip": "15886",
                    "state": "TX",
                    "country": "USA"
                },
                "dateCreated": "2016-10-15T08:41:26.355Z",
                "company": {
                    "name": "Boyer, Lang and O'Reilly",
                    "website": "http://kimberly.org"
                },
                "profilePic": "http://lorempixel.com/640/480/animals"
            },
            {
                "id": "16f14254-0865-4419-bc13-b68d9e3836bb",
                "firstName": "Richmond",
                "lastName": "Moen",
                "email": "Vilma_Romaguera84@yahoo.com",
                "address": {
                    "street": "6487 Vladimir Roads",
                    "city": "West Sofia",
                    "zip": "07771-2638",
                    "state": "GA",
                    "country": "USA"
                },
                "dateCreated": "2016-10-14T22:46:40.264Z",
                "company": {
                    "name": "Kilback - Witting",
                    "website": "https://julia.net"
                },
                "profilePic": "http://lorempixel.com/640/480/people"
            },
            {
                "id": "a705d72f-809a-4123-a16a-e0fd0880bfff",
                "firstName": "Brett",
                "lastName": "Klein",
                "email": "Norma52@hotmail.com",
                "address": {
                    "street": "3221 Champlin Mill",
                    "city": "Huelview",
                    "zip": "33461-3677",
                    "state": "AK",
                    "country": "USA"
                },
                "dateCreated": "2016-10-14T22:49:23.085Z",
                "company": {
                    "name": "Hodkiewicz, Boehm and Jenkins",
                    "website": "https://audreanne.name"
                },
                "profilePic": "http://lorempixel.com/640/480/transport"
            },
            {
                "id": "6d82072e-1385-4aab-8316-f989aa63c191",
                "firstName": "Jade",
                "lastName": "Kub",
                "email": "Renee.Doyle5@yahoo.com",
                "address": {
                    "street": "5077 Lind Knoll",
                    "city": "Lake Olgaburgh",
                    "zip": "54871",
                    "state": "RI",
                    "country": "USA"
                },
                "dateCreated": "2016-10-15T19:35:20.284Z",
                "company": {
                    "name": "Herzog and Sons",
                    "website": "https://cheyenne.net"
                },
                "profilePic": "http://lorempixel.com/640/480/city"
            },
            {
                "id": "53c103ce-0f09-4b0b-bf8d-d9c85247a6b1",
                "firstName": "Keegan",
                "lastName": "Dietrich",
                "email": "Trisha.Walsh35@hotmail.com",
                "address": {
                    "street": "11864 Wilderman Mission",
                    "city": "Lake Jacquelynbury",
                    "zip": "03890",
                    "state": "AL",
                    "country": "USA"
                },
                "dateCreated": "2016-10-15T14:35:24.244Z",
                "company": {
                    "name": "Aufderhar LLC",
                    "website": "http://derrick.com"
                },
                "profilePic": "http://lorempixel.com/640/480/nature"
            },
            {
                "id": "702fea99-dda2-431c-b531-f94c3cbb8296",
                "firstName": "Layla",
                "lastName": "Wiza",
                "email": "Winnifred.Sawayn@gmail.com",
                "address": {
                    "street": "66265 Kiehn Circle",
                    "city": "Jonchester",
                    "zip": "99037-2496",
                    "state": "MN",
                    "country": "USA"
                },
                "dateCreated": "2016-10-15T18:31:48.390Z",
                "company": {
                    "name": "Frami - Lubowitz",
                    "website": "https://kimberly.biz"
                },
                "profilePic": "http://lorempixel.com/640/480/city"
            },
            {
                "id": "165a2e6f-915a-4c53-ba1a-84423c31b8d4",
                "firstName": "Mertie",
                "lastName": "Rolfson",
                "email": "Stewart_Kling99@hotmail.com",
                "address": {
                    "street": "437 Stark Branch",
                    "city": "West Roscoeside",
                    "zip": "83912",
                    "state": "WV",
                    "country": "USA"
                },
                "dateCreated": "2016-10-15T10:43:44.715Z",
                "company": {
                    "name": "Armstrong Group",
                    "website": "https://orland.com"
                },
                "profilePic": "http://lorempixel.com/640/480/nature"
            },
            {
                "id": "6213ba07-bc83-4401-bac2-c60be7716b76",
                "firstName": "Felipe",
                "lastName": "Bailey",
                "email": "Aimee_Runte@yahoo.com",
                "address": {
                    "street": "8619 Larson Circle",
                    "city": "Dominicbury",
                    "zip": "82523",
                    "state": "MO",
                    "country": "USA"
                },
                "dateCreated": "2016-10-15T00:21:44.874Z",
                "company": {
                    "name": "Kunde, Stoltenberg and Nicolas",
                    "website": "http://lennie.info"
                },
                "profilePic": "http://lorempixel.com/640/480/cats"
            },
            {
                "firstName": "ousepp",
                "lastName": "kutti",
                "email": "ouseph@gwu",
                "address": {
                    "city": "ouseph city"
                },
                "company": {
                    "name": "ousephs company"
                },
                "id": "6c5ffa41-4dd1-467d-9269-9bec80133d3e",
                "dateCreated": "2016-10-16T05:42:38.119Z"
            },
            {
                "firstName": "asfasf",
                "lastName": "asfasf",
                "email": "asf@asdf",
                "address": {
                    "city": "asdf"
                },
                "company": {
                    "name": "sdasdf"
                },
                "id": "92f456a2-3e8a-41d3-8d30-10afb00c551f",
                "dateCreated": "2016-10-16T05:53:26.865Z"
            },
            {
                "firstName": "jkkk",
                "lastName": "jghj",
                "email": "bv@bn",
                "address": {
                    "city": "bvmnvn"
                },
                "company": {
                    "name": "asfad"
                },
                "id": "bdad8cdc-60b7-4943-8009-721f10d98483",
                "dateCreated": "2016-10-16T06:03:54.333Z"
            },
            {
                "firstName": "dsas",
                "lastName": "adddd",
                "email": "asdf@asfa",
                "address": {
                    "city": "dsas"
                },
                "company": {
                    "name": "asdf"
                },
                "id": "d816b352-c4dc-47d0-a1b2-1aeb628a81e9",
                "dateCreated": "2016-10-16T06:17:45.047Z"
            }

        ];
        //vm.users = ['Kamrul', 'Hasan'];

        vm.deleteUser = function (position) {
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

