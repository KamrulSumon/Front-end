var obj = {
    name: 'JavaScript',
    city: 'Chicago',
    state: 'IL',
    age: 20
};

Object.prototype.display = function () {

};


for (var prop in obj) {
    console.log(prop + ' = ' + obj[prop]);
}


for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(prop + ' = ' + obj[prop]);
    }
}