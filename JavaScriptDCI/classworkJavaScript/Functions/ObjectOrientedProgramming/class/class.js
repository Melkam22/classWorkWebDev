
console.clear();

class Vehicle {
    constructor(type, speed) {
        this.type = type;
        this.speed = speed;
    }
    move() {
        console.log(`I am a ${this.type}, moving at a speed of ${this.speed}`);
    }
    stop() {
        console.log(`I am a ${this.type}, i have stopped.`);
    }
    static info() {//it ll not project what is before this static info
        console.log(`I am a base vehicle class`);
    }
}

let rustyCar = new Vehicle("Rusty Car", 40)

rustyCar.move(); //I am a Rusty Car, moving at a speed of 40
console.log("---------------------");
rustyCar.stop(); //I am a Rusty Car, i have stopped.
console.log("---------------------");
Vehicle.info(); //I am a base vehicle class

// sub class
class Car extends Vehicle {
    constructor(speed) {
        super("car", speed)//car is hardcode opposite of static but this super is for subclass
        this.abs = false; 
    }
    //extends the stop method
    emergencyStop() {
        console.log(`Car-emergencyStop: ${this.type}, ${this.speed}`);
        this.abs = true;
        this.stop();
    }
}
let subCar = new Car(10);
console.log(subCar); //Car { type: 'car', speed: 10, abs: false }
console.log(">>-------");
subCar.stop(); //I am a car, i have stopped.
console.log(">>------------------");
subCar.emergencyStop();
// Car-emergencyStop: car, 10
// I am a car, i have stopped.

class SuperCar extends Car {
    constructor() {
        super(400);
        this.jet = false;
    }
    move() {
        console.log(`superCar.move: ${this.type}, ${this.speed}`);
        this.jet = true;
        super.move();//to access parent we can not use this method since
                    //we ve method with the same name
    }
}
let coolCar = new SuperCar();

console.log("========");
console.log(coolCar); //SuperCar { type: 'car', speed: 400, abs: false, jet: false }
console.log("========");
coolCar.stop(); //I am a car, i have stopped.
console.log("========");
coolCar.emergencyStop();
//Car-emergencyStop: car, 400
//I am a car, i have stopped.
console.log("========")

