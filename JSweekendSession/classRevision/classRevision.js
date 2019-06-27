console.log(">>>>>>>>>>>>>>>>>>>>>>>> class revision <<<<<<<<<<<<<<<<<<<<<<<<<<");

class SecondGeneration{
    constructor(name2, profession2, address2){
        this.name2=name2;
        this.profession2=profession2;
        this.address2=address2;
}
finder(){
    console.log(`name of the person is ${this.name2}`);
}
}
class FirstGeneration extends SecondGeneration{
    constructor(name2, profession2, address2, name1, profession1){
    super(name2, profession2, address2);
    this.name1=name1;
    this.profession1=profession1;
}
finder1(){
    console.log(`name of the person is ${this.name1}`);
}
}
class CurrentGeneration extends FirstGeneration{
    constructor(name2, profession2, address2, name1, profession1, name, profession){
    super(name2, profession2, address2, name1, profession1);
    this.name=name;
    this.profession=profession;
    }
generationProfile(){
    console.log(`2nd generation father's profession was ${this.profession2} & they used to live in 
    the ${this.address2}, but our 1st generation father's profession was ${this.profession1} & 
    our profession is ${this.profession}`);
}
}

let allFeeder= new CurrentGeneration("G-Father", "Farmer", "Country-side", "Father","Merchant","Us","Programmers");

console.table(allFeeder);
allFeeder.finder();
allFeeder.finder1();
allFeeder.generationProfile();
 