
class Cars {
    constructor(model, yearOfProduction, color, price, gearType) {
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.color = color;
        this.price = price;
        this.gearType = gearType;
    }
   /*  static */ carInfo() {
        console.log(`This car model is ${this.model} & it's produced in ${this.yearOfProduction} 
    in Japan and it costs ${this.price}`);
    }
}

class Avanza extends Cars {
    constructor(yearOfProduction, color, price, gearType, speed, loadCapacity) {
        super("Avanza", yearOfProduction, color, price, gearType);
        this.speed = speed;
        this.loadCapacity = loadCapacity;
    }

    specialFeatures() {
        console.log(`this modified model ${this.model} has a special feature of maximum
    speed of ${this.speed}.`);
    }
}
let myCar = new Cars("Avanza", 2012, "red", "30,000$", "automatic");
let myAvanza = new Avanza(2014, "blue", "35,000$", "automatic", 180, "5 people");
myCar.carInfo();//This car model is Avanza & it's produced in 2012 
//console.log(myAvanza);
myAvanza.specialFeatures();
myAvanza.carInfo();
//myCar.specialFeatures(); 
 
