console.log(".............................. quiz one ............................");

let multiple = (a,b)=>{
    let result = a*b;
    return result;
}
console.log(multiple(4,7));//arrow function

console.log(".............................. quiz two ............................");
 
let oddNum = (given)=> {
    let emptyBrace =[];

    for(let a=0; a<given.length; a++) {
        if(given[a]%2 !==0) {
            emptyBrace.push(given[a] * 2);   
        }  
    }
    return emptyBrace;   
};
console.log(oddNum([1,2,3,4,5,6,7,8]));//all odd values multiplied by 2 

console.log(".............................. quiz three ............................");

let loopedNumb = (given1) => {
    let emptyBrace1 =[];

    for(let b=0; b<given1.length; b++) {
        emptyBrace1.push(given1[b]-10);
    }
    return emptyBrace1;   
}
console.log(loopedNumb([1,2,3,4,5,6,7,8]));//from each given value "-10"

console.log(".............................. quiz four ..............................");

let Cars = {
    Mark: "Fiat",
    Model: "127",
    Color: "Red",
    Cars: () => {    
    }  
};
console.log(Cars.Model);//object inside an arrow function

console.log(".............................. quiz five ..............................");
  

 let filteredValue = (given2)=>given2.filter(function(value) {
        return value >70;
    });//give all values which are >70
 console.log(filteredValue([3,62,234,7,23,74,23,76,92]));//we ll get 4 big Nos.

 console.log(".............................. quiz six ..............................");

 let circumference = (radius)=> {
     calcCircum = 2*(3.14*radius);
     return calcCircum;
}
console.log(circumference(5));//value of circumference; c=2pir

let areaCircle = (radius1)=> {
    calcArea = 3.14*(radius1*radius1); 
    return calcArea;
}
console.log(areaCircle(5));//value of area; pi*(radius square)


console.log(".............................. quiz seven ..............................");

/* for(let d=0; d<inventors.length; d++) { */

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
  },
  {
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
  },
  {
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
  },
  {
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
  },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
  },
  {
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
  },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
  }
];

console.log("............. quiz seven    -1-    ......................");

let filteredBirth = inventors.filter(function(value){
    return value.year > 1500 && value.year < 1600
});
console.log(filteredBirth);//those whose date of birth is b/n 15 & 1600  /2 individuals/


console.log("............. quiz seven    -2-    ......................");

inventors.sort(function(a,b){
    if(a.year > b.year) return 1;
    if(a.year < b.year) return -1;
    return 0;
});
console.log(inventors);//sort birth dates from the oldest to the youngest

console.log("............. quiz seven    -3-    ......................");

 
function bothNames() {
let emptyBraceForTwo =[];

/* let emptyBrace0=[]; */
let namePicker = inventors.pop();
console.log(namePicker);//the last person

/* let emptyBrace11=[]; */
let shifter = inventors.shift();
console.log(shifter);//the first person

emptyBraceForTwo.push(namePicker,shifter);
  console.log(emptyBraceForTwo);
}
bothNames();//the first and last person in the object concatenated

 
console.log(".............................. quiz eight ............................");


  
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
'Blair, Tony', 'Blake, William'];

let emptyBrace2=[];
 
for(let f=0; f<people.length; f++) {
    let firstName = people[f].split(", ");
    let secondName = firstName.reverse().join(", ");

    emptyBrace2.push(secondName);//escape box from the loop
}
 let sortedValue = emptyBrace2.sort();
 //console.log(sortedValue);

 let originalBrace=[];
 for(let f=0; f<people.length; f++) {
    let firstName = sortedValue[f].split(", ");
    let secondName = firstName.reverse().join(", ");
     originalBrace.push(secondName);//reverse back to original 
}

console.log(originalBrace);//reverse secondNames and chronological & reverse to original

 


 
  