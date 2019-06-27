/* instead of hardcodeing everything by setting all the parameters & feed 
them with values in another, it is better to use prototype and
we use another function with a default values to overwrite certain
values from our main class*/
//ex: car.move function to overwrite Vehicle.prototype.move=  function()


//prototype
function Vehicle(type, speed){//the class name has to start with capital
    this.type=type;
    this.speed=speed;
}
//default values for the instance 
Vehicle.prototype.speed=80;
Vehicle.prototype.type="Vehicle";
Vehicle.prototype.wheels=4;
Vehicle.prototype.move=  function(){
    return `I am a ${this.type}, moving at a speed of ${this.speed}`;
}
Vehicle.prototype.stop=  function(){
    return `I am a ${this.type}, I have stopped moving.`;
}
let car = new Vehicle("car", 100);
console.log(car);//Vehicle {type: "car", speed: 100}
//console.log(Vehicle);//[Function: Vehicle]
//vehicle.stop();//prototypes only create default for the instances

console.log(car.wheels);//4
console.log(car.move());//I am a car, moving at a speed of 100

car.move = function(){
    return "Hello to you";
}
console.log(car.move());//Hello!

console.log(car.stop());//I am a car I have stopped moving

car.autoPilot = function() {
    return `this ${this.type} is on autopilot mode`;
}
console.log(car.autoPilot());//this car is on autopilot mode

//overwritten the default method: move

car.move = function() {
    return "hello!";
}
console.log(car.move());//I ll get hello!








