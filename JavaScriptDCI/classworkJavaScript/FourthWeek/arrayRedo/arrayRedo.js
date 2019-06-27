
                        /* descending order for numbers */

let subjects1 = [
    {id: 25, name: 'History', creditHrs: 3},
    {id: 0, name: 'Geography', creditHrs: 2},
    {id: 32, name: 'Maths', creditHrs: 4},
    {id: 1001, name: 'English', creditHrs: 5},
    {id: 10.25, name: 'Chemistry', creditHrs: 5},
    {id: 22.58, name: 'Physics', creditHrs: 5},
];
subjects1.sort(function(a, b){

    if(a.id < b.id) return -1;
    if(a.id > b.id) return 1;
    return 0; 
}); 

console.log(subjects1);//to put the names chronologically


    /* shift; same function as pop but shift delete from the beginning and 
                    pot deletes from the last*/

let fruits = ['Orange', 'Banana','Pineapple','Avocado','Mango'];
let shiftedItem = fruits.shift();//return the first name of the value
let newFruits = (fruits.unshift('Cherry','Lemon'));//gives the list along with the No of indexes
let spliced = fruits.splice(2,0,'spliced1','spliced2');
/* let spliced1 =fruits.splice(0,2);//it ll delete the first 2 items */
/* to replace fruits.splice(2,1,'Peach');//we replace spliced1 with Peach */
let sliced = fruits.slice(1,5);//we ll get values b/n the given Nos.
 
console.log(shiftedItem);
console.log(fruits);
console.log(newFruits);
console.log(spliced);//add values after our 2nd index-value
console.log(sliced);

let splitedString = 'Digital Career Institute';
let splitedString1 = splitedString.split(' ');//put each string apart
console.log(splitedString1);//split with space in the cotation & without space??



