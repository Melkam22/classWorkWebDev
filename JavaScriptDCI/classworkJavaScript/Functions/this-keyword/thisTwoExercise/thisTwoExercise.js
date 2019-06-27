
function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  } 
  let myFather = new person("John", "Doe", 50, "blue");
  let myMother = new person("Sally", "Rally", 48, "green");
  console.log(myFather,myMother);

  //myFather.call(person);


console.log("_________ quiz one, exercises using this ________");

function exOne (){
    console.log(this.name, this.job, this.a);
}
let func1 = {
    name: "John",
    job: "teacher",
    a: "Berlin",
    jobOne: function() {return `This person is a ${func1.job}`;}   
}
exOne.call(func1);//we ll get all the content in the func1
 
console.log("_________ quiz two, exercises using this ________");

function exTwo(name, profession, address, nationality){
    this.name=name;
    this.profession=profession;
    this.address=address;
    this.nationality=nationality;
}
let person1 = new exTwo("Abebe","programer","Addis","Ethiopian");
let person2 = new exTwo ("Dominique","secretary","Paris","French");

console.log(person1 , " " , person2);//an object for 2 person


console.log("________ quiz three, exercises using this ________");
  
function exThree(brand, name, year, price){
    this. brand=brand;
    this. name=name;
    this. year=year;
    this. price=price;
}
 
let cars = new exThree("127", "Fiat","1983","1000$");
console.log(cars);//about car's description 
//console.log(carFunc());

/* function myPush(){
    exThree.push({color:"blue", seat:"two"});
}
myPush.call(cars); */

console.log("________ quiz five, exercises using this ________");

let exFive = "Jay Global";
let people = {
    name: 'Jay Person',
    details: {
        name: 'Jay Details',
        print: function() {
            return this.name;
        }
    },
    /* print: function() {
        return this.name;
    } */
};
console.log(people.details.print());  // ?
//console.log(people.print());          // ?
//let name1 = people.print;
//let name2 = people.details;
//console.log(name1()); // ?
//console.log(name2.print()) // ?


console.log("________ quiz six, exercises using this ________");

let she = {
    name: "Sandra",
    address: "Berlin",
    country: "Germany",
}
function toMerge(){
    let disected = Object.values(this);
    console.log(`${disected[0]} says hi from ${disected[1]} ${disected[2]}`);
}
 toMerge.call(she);//we ll get sandra says hi from berlin Germany

 console.log("________ quiz seven, exercises using this ________");

 //Code Snippet 1
 let person7 = {
   firstName: "Penelope",
   lastName: "Barrymore",
   getName: function () {
     return this.firstName + " " + this.lastName;
   }
 }
 console.log(person7.getName());//we ll get Penelope Barrymore
//2
let seven = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};
console.log(seven.f());//we ll get 37 
//3
let player1 = {
  firstName: "Jack",
  lastName: "Black",
  getName: function () {
    return this.firstName + " " + this.lastName;
  }
}
console.log(player1.getName());//we ll get Jack Black

let player2 = {
  firstName: "Bunny",
  lastName: "Rabbit",
  getName: function () {
    return this.firstName + " " + this.lastName;
  }
}
console.log(player2.getName());//we ll get Bunny Rabbit

let game = {
  players: [],
  listPlayers: function () {
    this.players.forEach(function (player) {
      console.log(player.getName());
    });
  }
}
game.players.push(player1, player2);

game.listPlayers();//we ll get Jack Black & Bunny Rabbit 

console.log("_____ incrementing ________");
//4
let Counter = {
   count: 0,
   add: function(){
     this.count++;
   }
};
Counter.add()
console.log(Counter.count);//we ll get 1

console.log("________ quiz eight, Function for multiple Objects ________");

function myAge1(name, profession){
  this.name=name;
  this.profession=profession;
}
let result1 = new myAge1("Sandra","architect");
console.log(result1);

function myAge2 (age){ 
  this.age=age;
  //console.log(result2);
}
let result2 = new myAge2("Tim", "engineer", 33);
//console.log(result2);
myAge2.call(myAge1);


/* 
 
4. Examine the following code

Write down your expected answers for the console.log() output.

let name = "Jay Global";
let person = {
    name: 'Jay Person',
    details: {
        name: 'Jay Details',
        print: function() {
            return this.name;
        }
    },
    print: function() {
        return this.name;
    }
};
console.log(person.details.print());  // ?
console.log(person.print());          // ?
let name1 = person.print;
let name2 = person.details;
console.log(name1()); // ?
console.log(name2.print()) // ?


 


7. Function for multiple Objects

Create a function that sets a new age for a property in an object. Create 2 or 
three new objects for different people e.g. Sandra, Karl, Tim. Set the age of 
each object. Then, change their ages with your function!


8. GoT

Read over the following code. Then try to add Joffrey, Myrcella and Tommen 
into the House Lannister (Choose Cersei as parent).

function House(symbol) {
  this.symbol = symbol;
  this.lord = undefined;
}

function Person(name) {
  this.name = name;
  this.children = null;
  this.parent = null;
}

Lannister = new House('lion');
Tywin = new Person('Tywin');

Tyrion = new Person('Tyrion');
Cersei = new Person('Cersei');
Jamie = new Person('Jamie');

Lannister.lord = Tywin;

Tywin.children = [Jamie, Cersei, Tyrion];

Jamie.parent = Tywin;
Cersei.parent = Tywin;
Tyrion.parent = Tywin;

console.log(Lannister);
console.log(Tywin)
console.log(Cersei); */
  