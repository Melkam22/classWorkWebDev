
//prototype

function Vehicle(type, speed){//the class name has to start with capital
    this.type=type;
    this.speed=speed;
}
//default values for the instance 
Vehicle.prototype.type="Vehicle";
Vehicle.prototype.wheels=4;
Vehicle.prototype.move= function(){
    console.log(`I am a ${this.type}, moving at a speed of ${this.speed}`);
}
Vehicle.prototype.stop = function(){
    console.log(`I am a ${this.type}, I ve stopped moving.`);
}
//add new functions

let newCar = new Vehicle("new car", 20);
console.log(newCar.wheels);//we ll get 4, other way of doing, line 37

//the car sub-class ll inherit (default prototypes) of class Vehicle 
function Car(speed) {//sub class of car, line 23-26 are very important
Vehicle.call(this, "car", speed);
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.emergencyStop = function(){
    this.abs = true;//is an anti-break system
    this.stop();//inherited from Vehicle class
}
let myCar = new Car(10);
console.log(myCar);//Vehicle { type: 'car', speed: 10 }

myCar.move();//I am a car, moving at a speed of 10
myCar.emergencyStop();//I am a car, I ve stopped moving.

console.log(myCar.wheels);//we ll get 4 too