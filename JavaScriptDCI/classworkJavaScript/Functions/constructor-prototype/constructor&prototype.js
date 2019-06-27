
console.log(">>>>>>>>>>>>>>>>>>>>>>>> quiz 1, constructor <<<<<<<<<<<<<<<<<<<<<<");
class Hero {
    constructor(name){
        this.name=name;
    }

second (){
    console.log(`the name given is : ${this.name}`)
}
}
let myHero = new Hero("Link");
myHero.second();

console.log(">>>>>>>>>>>>>>>>>>>>>>>> quiz 2, constructor <<<<<<<<<<<<<<<<<<<<<<");

class Song{
    constructor(title, artist){
        this.title=title;
        this.artist=artist;
        //this.emptyBrace={};
    }
play(title){
    console.log(`now is playing: ${title}`);
}
}
let result = new Song("through the rain", "Maria Cherry");
//console.log(result);//Song { title: 'through the rain', artist: 'Maria Cherry'}
result.play("thug life");//now is playing: thug life

console.log(">>>>>>>>>>>>>>>>>>>>>>>> quiz 3, constructor <<<<<<<<<<<<<<<<<<<<<<");

class Person {
    constructor(name, occupation){
        this.name=name;
        this.occupation=occupation;
    }
whoAreYou(){
    console.log(`hi, my name is ${this.name} & I am a ${this.occupation}`);
}
}
let Micky = new Person("Micky Mouse", "freelance comedian");
let David = new Person("David", "Talk-show host");
Micky.whoAreYou();
David.whoAreYou();

console.log(">>>>>>>>>>>>>>>>>>>>>>>> quiz 4, constructor <<<<<<<<<<<<<<<<<<<<<<");

class ArrayString{
    constructor(word){
        this.word=word; 
    }
value(){
    console.log(`${this.word}`);
}
}
let joinedString = new ArrayString(['c','a','t'].join(""));//join the given array
joinedString.value();

console.log(">>>>>>>>>>>>>>>>>>>>>>>> quiz 5, Calendar App <<<<<<<<<<<<<<<<<<<<<<");

class Day{
    constructor(year, month, day) {
        this.year=year;
        this.month=month;
        this.day=day;
    }
}
function getDaysInMonth(year, month){
    let emptyArray=[];
let maxDays= new Date(year, month, 0).getDate();
for (let index = 1; index <=maxDays; index++) {
    emptyArray.push(new Day(year, month, index))
}
console.log(emptyArray);
}
getDaysInMonth(2017,2);



 