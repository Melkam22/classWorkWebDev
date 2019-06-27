
let person = {
    name: "Alahmdu",
    age: 30,
}
console.log(person);

person.address = "China Town";
console.log(person);//address is added to the original list

delete person.age;
console.log(person);//age is deleted from the original list

let person2 = {
    name: "John",
    age: 34,
    "Like Birds": true,
}
console.log(person2);//we add a new key and we can access it 

person2.age = 40;
console.log(person2);//we can modify the key of the object like it, dot notation

person2["name"] = "Pierre";
console.log(person2);//we can change variables using bracket notations


//computed properties //we can't change the keys but we can changes the values whenever we want

let person3Address = "Addresses";

let person3 = {
    [person3Address] : "Fredrich-hein",
}
console.log(person3);//we can put the key somewhere and later reuse it to put values in it

//reserved values are allowed to be used as variables

let person4 = {
    ture: true,
    if: false,
    return: 5,
    "console.log": false,
    "$var": false,
}
console.log(person4 + person4.return - person4.if);//manipulating on the output, we use this for numbers