let user = {
    name: "John",
    age: 30,
    toString() {
        return `{name: ${this.name}, age: ${this.age}}`
    }
};//we ll get the above infos in a string
 
console.log(user);

// JSON Stringify
let givenExample = "givenExample";
let student = {
    name: "John",
    age: 30,
    2: givenExample,//all ll be in a quotation
}

let json = JSON.stringify(student);
console.log(json);
console.log(typeof json);

console.log(JSON.stringify(1));
console.log(JSON.stringify("string"));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3]));

let meetup = {
    title: "Conf",
    room: {
        number: 23,
        participants: ["John", "Doe"]
    }
}//nested obj.

console.log(JSON.stringify(meetup));  // {"title":"Conf","room":{"number":23,"participants":["John","Doe"]}}

let room = {
    number: 23
}
let meetup2 = {
    title: "Conf",
    participants: ["A", "B"],
}

meetup2.place = room;

room.occupieBy = meetup2;//circular assignment of values doesn't work

// console.log(JSON.stringify(meetup2));

// ------------------------------------


// JSON parse

let numbers = [1,2,3];
numbers = JSON.stringify(numbers);
console.log("numbers" ,numbers);   // [1,2,3]

console.log("numbers", typeof numbers);

console.log("//--------------------//");


let num = JSON.parse(numbers);
console.log(num);

console.log(typeof num);
console.log();//typeOf ll change from string to object

let myString = "ABC";
console.log(myString);

let str = '{"title": "Conf", "date": "Thu Jul 11 2019 10:00:22 GMT+0200"}';
let meetup3 = JSON.parse(str);

//meetup3.date.getDate();       // {title: "Conf", date: "Thu Jul 11 2019 10:00:22 GMT+0200"}

let badJson = "{ bad json }";
try {
    let user = JSON.parse(badJson);
    alert( user.name )
} catch (e) {
    console.log(e);

    alert("Sorry.....");
    alert(e.name);
    alert(e.message)};//try...catch, for debugging