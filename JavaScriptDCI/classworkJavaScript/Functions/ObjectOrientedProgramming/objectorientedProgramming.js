
//new keyword

function vehicle(type, speed){
    this.type=type;
    this.speed=speed;
//we put other function inside this function/properties: move & stop
this.move=function(){
console.log(`I am a ${this.type}, moving at a speed of ${this.speed}`);
}
this.stop=function(){
    console.log(`I am a ${this.type}, & I am stopped`);
}
//till here, extra function

console.log(`I am a ${this.type} & I move at a speed of ${this.speed}`);
}

//vehicle("car", 80);//I am a car moving at a speed of 80
//vehicle("truck", 150);//I am a truck moving at a speed of 150

let car = new vehicle("car", 100);//I am a car move at a speed ..
console.log(car);//we ll get empty {}

car.move();//we ll get, I am a car move at a speed of 100
console.log(vehicle);//we ll get function vehicle

let bus = new vehicle("bus", 150);
console.log(bus);// we ll get vehicle {type: bus, speed: 150}
bus.stop();//I am a bus moving at a speed of 150


vehicle.viper=function(){
    console.log(`The vehicle has a viper`);
}
vehicle.viper();//The vehicle has a viper

let truck = new vehicle("Truck", 120);
console.log(truck);//vehicle {type: truck, speed: 120, move: [function], stop: [function]}

car.move = function(){
    return "Hello!";
}
console.log(car.move());

car.autoPilot = function() {
    return `this ${this.type} is on autopilot mode`;
}
console.log(car.autoPilot());
