const Car = require("./car");

const Dealership = function(name, noOfCars, stock){

    this.name = name;
    this.noOfCars = noOfCars;
    this.stock = stock;
}

Dealership.prototype.addCar=function(car){
    this.stock.push(car)

}
module.exports = Dealership;

