function Car() {

}


var Car = function (make, model) {
    this.make = make;
    this.model = model;

    Car.prototype.display = function () {
        console.log(this.make + ' ' + this.model);
    }
};


var suv = new Car('Mazda', 'cx5');
var sedan = new Car('Mazda', '6');

suv.display();
sedan.display();



//static like only accessible through class
Car.getName = function () {
    console.log('Honda');
}

///can be accessible through object
Car.prototype.getName = function () {
    console.log('Honda');
}

var sedan =new  Car();

sedan.getName = function () {
    console.log("Honda Toyota");
}

console.log(sedan.getName());

console.dir(sedan);



///can be accessible through object
Car.prototype.getYear = function () {
    console.log('2016');
}

var suv =new  Car();