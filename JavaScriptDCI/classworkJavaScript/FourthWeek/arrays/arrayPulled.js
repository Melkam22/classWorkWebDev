
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let replaced = euroCities[0]="Berlin";//quiz 1

console.log(euroCities);//replace the 1st value to Berlin
console.log(euroCities.length);//5,No of indexes
euroCities.pop();//we delete the last value
 
 euroCities.unshift("Budapest");//this is added
 
euroCities.splice(0,2);//1st 2 values are deleted 
console.log(euroCities);
 
                    /* asianCities */

let asianCities = ['Bejing','Tokyo','Kalkata','Islamabad','Bombay','Bankok'];
let slicedCities = asianCities.slice(2,4);
console.log(asianCities);//quiz8 sliced values
console.log(slicedCities);//quiz8

let euroAsianCities = euroCities.concat(asianCities);
console.log(euroAsianCities);//quiz 9, concate values

let reversedCities = euroAsianCities.reverse();
console.log(reversedCities);//reversed values

let replacedCity = euroAsianCities[3]="Toronto";
console.log(euroAsianCities);//quiz 11 replaced val

let insertedCity = euroAsianCities.splice(2,0,'Washington');
console.log(euroAsianCities);//qz 12, inserted new city

let stringedCities = euroAsianCities.toString();
/* console.log(stringedCities[2]);//we ll get only n since it is a string now */
let slicedCities1 = euroAsianCities.slice("  ");
console.log(stringedCities);//13, changed to string
console.log(slicedCities1);//13, put b/n quotations

let splicedValue = euroAsianCities.splice(0,10);
console.log(euroAsianCities);//the new extracted value, but splicedValue is intact

                            /* bonus */

let greetings = "Hello-World";
let finalRes = greetings.split('');//to split and reverse values
let reversedGreetings = finalRes.reverse();
/* let finalToString = reversedCities.toString();  */
let joined = reversedGreetings.join('');//put strings without cotation mark 

console.log(reversedGreetings);
console.log(joined);
/* console.log(joined); */

                    /* extraPractice */

let movies = ['The boss','The italian-job','Titanic','Terminator'];
let cars = ['Audi','Mercedes','Toyota','Mazda'];

let combinedVal = movies.concat(cars);
console.log(combinedVal);//qz 3, concatenate 2 values in one
combinedVal.unshift('Champ');//qz 4, add new val at the beginning
combinedVal.reverse();//qz 5, reversed values
console.log(combinedVal[5]);//qz 6, 
combinedVal[6]="Scary-movies";//qz 7,replace titianic with scarymovies
/* let replacedValue = combinedVal.splice(6,1,"film"); other way to replace val.*/
console.log(combinedVal);


                    /* exercise with Bruno */

/* let x = 7;
let y = 9;
if(x>y) {
    console.log(`the value ${x} is greater`);
} else {
    console.log(`the value ${y} is greater`);
}


let language1 = 'english';
let language2 = 'german';
let language3 = 'french';

if (language1 ==french){
    console.log(`I say Good Morning in ${language1}`);
} else if(language2 ==german) {
    console.log(`I say Guten Tag in ${language2}`);
} else if (language3==german){
    console.log(`I say Bonjour in ${language3}`);
} */