//recursion,  do sth repetitively until a certain condition is met, like loop

console.log("''''''''''''''''''''''  recursion ''''''''''''''''''''''''");

let counter =10;
while(counter>0) {
    console.log(counter--);
}//from 10 to 1

console.log("''''''''''''''''''''''  recursion ''''''''''''''''''''''''");

function countdown (value) {
    if(value>0) {
        console.log(value);
        return countdown(value-1);
    }else {
        return value;
    }
};
countdown(10);//same as the previous, but this recursion meth is better

console.log("''''''''''''''''''''''  recursion ''''''''''''''''''''''''");

let factorial = function(number) {
    if(number <=0) {
        return 1;
    } else {
        return (number*factorial(number-1));
    }
};
console.log(factorial(10));//the total value =3628800, 10*9+9*8+8*7...

console.log("''''''''''''''''''''''  recursion ''''''''''''''''''''''''");

let factorial1 = function(number){
    if(number<=0){
        return 1;
    }else {
        return(number*factorial1(number-1));
    }
};
console.log(factorial(5));//we ll get 120, 5*4*3*2*1(20*3, 60*2, 120*1)


console.log("_______________________ set date __________________________");

date = new Date();
date.setDate(22);
date.setMonth(06);
let remaining = date - new Date();
let result = remaining/(1000*60*60*24);
console.log(result);
 
//factorial
function myFactorial(myVal){
    if(myVal>0){
        console.log(myVal-1);
        return myFactorial(myVal-1);
    } else {
        return myVal;
    }
}
myFactorial(25);//we ll get from 25 to 1

console.log(".......practice class ............ ");

let newCar={
    name:"Toyota",
    Model:2009,
    print:function(){
     console.log(this.name);
    }
}
console.log(newCar);

newCar.name="hhlkhkgjgjgjg";
console.log(newCar)
newCar.print(); 

function Car(name,model){
    this.name=name;
    this.model=model;
    this.print=function(){
        console.log(this.name);
        console.log(this.model);
    }
}
let info = new Car("Fiat", 2012);
console.log(info);
info.print(0);


class CarClass{
    constructor(name,model){
        this.name=name;
        this.model=model
    }
    print(){
        console.log(this.name)
    }
}
class SubCar extends CarClass{
    constructor(name,model,price){
        super(name,model);
        this.price=price;
    }
    getPrice(){
        console.log(this.price)
    }
}
let newCarRed=new SubCar("mercedes",2018,1020);
console.log(newCarRed);
newCarRed.print();


//main class Parent

class Parent{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getPname(){
        console.log(this.name);
    }
}
//subClass child

class Child extends Parent{
    constructor(name,age,cname,cage){
        super(name,age);
        this.cname=cname;
        this.cage=cage;
    }
    getCname(){
        console.log(this.cname);
    }
}

//Subclass of subclass Grandchild.....

class Grandchild extends Child{
    constructor(name,age,cname,cage,gname,gage){
        super(name,age,cname,cage);
        this.gname=gname;
        this.gage=gage;
    }
    getGname(){
        console.log(this.gname);
    }
   getFamilyTree(){
            console.log(`${this.name} is a father of ${this.cname}, and ${this.cname} is the father of ${this.gname}`);
            console.log(`${this.name} is ${this.age} years old now,and ${this.cname} is ${this.cage} years old now,and ${this.gname} is ${this.age} years old now`);
    }
}

let grandchild=new Grandchild("Sibte_Raza",80,"Raza",60,"Naqvi",35);

grandchild.getFamilyTree("name");

grandchild.getPname();

grandchild.getCname();

grandchild.getGname();


