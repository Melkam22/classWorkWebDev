
let studentList = {
    FirstName: "Dave",
    LastName: "Petro",
    age: 25,
    address: "Prince-ro",
}
let insideList = Object.keys(studentList);
let insValues = Object.values(studentList);
console.log(insideList);//quiz 1, it list only the keys not the values
console.log(insValues);//we ll get only the values not keys

let person1 = {
    FirstName: "Jean-pierre",
    LastName: "Ruffo",
    age: 50,
    Profession: "Programmer",
    Address: "Rue Victor-Hugo, Paris",
}//quiz 2, concatenating all the values 

console.log(person1.FirstName + " " + person1.LastName + " is " + person1.age + " years old " + " he is " + person1.Profession + " & his address is " + person1.Address);


delete person1.LastName;
console.log(person1);//quiz 3, delete the LastName of the function person1

let lengthedObject = {
    mark: "Fiat",
    color: "red",
    status: "excellent-condition",
    price: "$5000",
}

let showLength = Object.keys(lengthedObject).length;

console.log(showLength);//quiz 4, to show the lenght of the index of the object


let bookList =[ 
{ author: 'J.K. Rowling', title: 'Harry Potter and the Chamber of Secrets', readingStatus: true }, 
{ author: 'Homer', title: 'The Odyssey', readingStatus: true },
{ author: 'Harper Lee', title: 'To Kill a Mockingbird', readingStatus: false }
];
let word1 = "I already read";
let word2 = " by ";

for(let i=0; i<bookList.length; i++) {

if(bookList[i].readingStatus==true) {
    console.log(word1 + " " + bookList[i].title + " " +word2 + bookList[i].author);
} else {
    console.log("but, still need to read To Kill a Mockingbird by Harper Lee");
}
}//quiz 5, we ll get result like, I read book title by author name ...



console.log("................................Exercise Two.............................................");

let number = 11;
let range= {min: 4, max: 7,};
 

if(number >range.min && number < range.max) {
    console.log("True");
} else {
    console.log("False");
};//quiz 1, see if given number is b/n the giver range or not
 

let listedValues = {
    id: 102, subject: "maths", credithrs: 7,
};
let separatedKeys = Object.keys(listedValues);
let separatedValues = Object.values(listedValues);
console.log(separatedKeys);//quiz 2, to print out each object keys
console.log(separatedValues);//quiz 2, to print out each object values



let givenScore = [
{ tile: "N", score: 1 }, 
{ tile: "K", score: 5 }, 
{ tile: "Z", score: 10 }, 
{ tile: "X", score: 8 }, 
{ tile: "D", score: 2 }, 
{ tile: "A", score: 1 }, 
{ tile: "E", score: 1 } 
];

let result=0;
for(let a=0; a<givenScore.length; a++) {
    
result += givenScore[a].score;
 
};
 
console.log(result);//quiz 3, it ll add up all the scores together


let emptyObject = {};
if(Object.keys(emptyObject).length == 0) {
    console.log("True, it is an empty value")
} else {
    console.log("False, it is not empty value");
};//quiz 4, used to verify weather the object is empty or not

