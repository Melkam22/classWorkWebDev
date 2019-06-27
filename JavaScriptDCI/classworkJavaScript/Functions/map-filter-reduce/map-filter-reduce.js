
console.log("______________ quiz one ___________________________________");

let arrayOfNumbers = [3, 45, 6, 56, 7, 9];
let eachElement = arrayOfNumbers.map(value => value + 1);

console.log(eachElement);//it ll add 1 to each element 

console.log("______________ quiz two ___________________________________");

let sum=[1,2,3,4,5];
let mySum =(accumul, currValue)=>
    accumul + currValue;
let result = sum.reduce(mySum);
console.log(result);//we ll get 15

                                    /* or */

let sum1=[6,7,7];
let mySum1 = (accumul1, currValue1)=> accumul1 + currValue1;
let myResult = sum1.reduce(mySum1);
console.log(myResult);//we ll get 20

console.log("______________ quiz three, instance of, reduce method ______________");


console.log("______________ quiz four, inventors, map & reduce ______________");

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

   
  let firstLast= inventors.map(val=> {
    let newJacket = {};
      newJacket=[val.first] + " " + val.last;
      return newJacket;
  });
  console.log(firstLast);//we ll get only the first and second name
  //console.log(inventors);

  console.log("_________ names and ages together _________________");
   
let inventorsAge = inventors.map(age=>{
  let myJacket1 ={};
  myJacket1=[age.first+ " " + age.last, age.passed-age.year]
  console.log(myJacket1);
})
 
 
let theirAge = inventors.reduce((accum, person)=>{
    return accum +(person.passed - person.year);   
},0);
console.log("Their ages are: ", theirAge);//we ll get 861 but i has to be for each

console.log("______________ quiz 5 map. sqr root  _____________________");

let numbers = [4,5,8];
let calculate= numbers.map((num)=>num**2)//num*num same value
console.log(calculate);//multiply the values 

let numbers1 = [4,9,12];
let calculate1= numbers1.map((Math.sqrt));
console.log(calculate1);//took the square root of the given values 

console.log("______________ quiz 6 map. sqr root  _____________________");

console.log("______________ quiz 7, favorite movies  _____________________");

let friends = [{
  name: 'Maria',
  films: ['Avengers: Infinity War', 'Avatar' ],
  age: 22
}, {
  name: 'John',
  films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
  age: 29
}, {
  name: 'Jean',
  films: ['Deadpool', 'Incredibles 2'],
  age: 20
}];
function favoriteMovies (){
  let moviesJacket =[];
  for(let a=0; a<friends.length; a++){
  moviesJacket.push(friends[a].films);
}
console.log("friends favorite movies are :", ...moviesJacket);
}
favoriteMovies();//pushed all movies in one square brace

console.log("______________ quiz 8, filter events  _____________________");

function filterEvent(events){
  let filtered = events.filter(variable=>variable.length <=5);
  console.log(filtered);
}//we ll get words which are smaller or equal to 5 letters long
filterEvent(["Communicate","tribe","Schon","memory","incredible"]);

console.log("______________ quiz 9, filter, includes  _____________________");

let myIncludes = (givenWords)=>{
  let sortOut = givenWords.filter(givenW=>givenW.includes("ly"));
  console.log(sortOut);
}//sort out all words which has ly in them
myIncludes(["slowly","fast","partially","rapid","cool", "olygochique", "hardly"]);

console.log("______________ quiz 10 & 11, filter, sort ...  __________________");

let originalArray = [{key: 1, name: "John"},
	     {key: 2, name: "Maria"},
	     {key: 3, name: "Oliver"},
	     {key: 4, name: "Jane"},
	     {key: 5, name: "Jack"},
	     {key: 6, name: "Albert"},
	     {key: 7, name: "Harry"},
	     {key: 8, name: "Ron"},
	     {key: 9, name: "Kenneth"},
       {key: 10, name: "Kyle"}];
     
let replacedJacket={};
let replaceKey = originalArray.map(toReplace=>{
  replacedJacket=[toReplace.key + " " + toReplace.name];
console.log(replacedJacket);
});
/* replacedJacket.sort(function(a, b){
  return a.toReplace.key - b.toReplace.key;
});
console.log(replacedJacket);//11 not working ??
 */

                                /* sort */


console.log("______________ quiz 12, filter, sort ...  __________________");
 
let shapes = [
  [5, "Pentagon"],
  [3, "Triangle"],
  [8, "Octagon"],
  [4, "Rectangle"],
  [6, "Hexagon"],
  [10, "Decagon"]
  ];

  /* let filtered1 = shapes.filter(myRes =>{
    output = myRes.key;
  }) */
   
  /* let shapesValue = shapes.map(pick=>{
    let myResult = (pick.key + pick.value);
    console.log(myResult);
  })
   *///not working
   
   