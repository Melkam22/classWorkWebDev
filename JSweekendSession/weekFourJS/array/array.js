
                        /* array methods */

let numbers = [2,4,6,12,34,17,48,3,59,99];
numbers.push(120);//to add this at the end
numbers.unshift(-2);//to add this in the beginning
numbers.splice(3,0, "abc", 'cde');//to merge these items in the middle
numbers.reverse();
numbers.shift();//to eliminate it from the beginning 
numbers.pop();//to eliminate it from the end
let joined = numbers.join('-');
console.log(joined);//it ll join them using hyphen 
let sorted = numbers.sort();
console.log(sorted);//it ll put it in chronology
console.log(numbers); 
console.log(numbers[numbers.length -1]);//to see the last index 



        /* predicate; to verify if the given function exist in the list */

/* let myNumber = [2,7,9,3,2,17,75,99,153,288];
let found = myNumber.find(function(element){
return element < 10;});

console.log(found);//it ll pick the first true value and stop going further */

let myNumber= [2,7,9,3,2,17,75,99,153,288];
let myFiltered = myNumber.filter(function(give){
    return give<=10;
})
console.log(myFiltered);//it ll give [ 2, 7, 9, 3, 2 ]
 

            /* finding elements in a funcion /reference type/ */

let courses = [
    {id: 1, name: 'Biology'},
    {id: 2, name: 'Philosophy'},
    {id: 3, name: 'Maths'},
]
let course = courses.find(function(course){
    return course.id ===1;
});

console.log(course);


                      /* to delete values in an array */
let values = ['me', 'myself', 'I'];
 
let emptyVal = values=[ ];
console.log(emptyVal); 

while(values.length > 0);
values.pop();

/* values.splice(0,numbers.length); */
/*values.length = 0; */
/* console.log(values.toString()); */
 

                        /* to concatenate /merge/ arrays */

let first = ['me', 'you', 'I'];
let second = ['they', 'she','he'];
let combined = first.concat(second);
console.log(combined);

                    /* to do the opposite of merge is slice */

let slice = combined.slice(3,5);
console.log(slice);
 
        /* other style to concatenate variables and add additional elements */

let cars = ['toyota', 'mercedes', 'audi', 'citroen'];
let planes = ['bombardier', 'boeing', 'airbus'];
let merge = ['among the famous once', ...cars, 'the three famous', ...planes];

console.log(merge);//we can put all elements b/n one brace
 

                            /* iterating an array */

let numeros = [1,2,3,4,5];
for(let numero of numeros)
console.log(numero);//we will have its content one by one

                                /* or */
kuters = [1,2,3,4,5];
kuters.forEach(function (kuter) {
    console.log(kuter);
});//second way of doing the same function  


                    /* using sort in an object /function/ */

let subjects = [
    {id: 1, name: 'History', creditHrs: 3},
    {id: 2, name: 'Geography', creditHrs: 2},
    {id: 3, name: 'Maths', creditHrs: 4},
    {id: 4, name: 'English', creditHrs: 5},
];
subjects.sort(function(a,b){

    if(a.id < b.id) return -1;
    if(a.id > b.id) return 1;
    return 0; 
}); 

console.log(subjects);//to put the names chronologically

                            //every

let integ = [1,2,6,3,5,8,9,4];
let everyInteg = integ.every(function(value) {
    return value >=3;
})
console.log(everyInteg);//it ll check only the first and say true or false


                                    //some

let integ1 = [1,2,6,3,5,8,9,4];
let everyInteg1 = integ1.some(function(value) {
    return value >=9;
});

console.log(everyInteg1);//not only the first one but check all values & say T or F


                            //filter an array

let screenNumbers = [2,4,1,-7,5,-1,0,12,58,-22,99];
 
let filtered = screenNumbers.filter(function(value) {
    return value <= 0;
});

console.log(filtered);//we ll get the filtered value


                        /* descending order for numbers */

let subjects1 = [
    {id: 25, name: 'History', creditHrs: 3},
    {id: 0, name: 'Geography', creditHrs: 2},
    {id: 32, name: 'Maths', creditHrs: 4.5},
    {id: 1001, name: 'English', creditHrs: 5},
    {id: 10.25, name: 'Chemistry', creditHrs: 5.5},
    {id: 22.58, name: 'Physics', creditHrs: 5},
];
subjects1.sort(function(a, b){

    if(a.creditHrs < b.creditHrs) return -1;
    if(a.creditHrs > b.creditHrs) return 1;
    return 0; 
}); 

console.log(subjects1);//to put the names chronologically



