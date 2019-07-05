
let p1 = document.createElement("p");
let p2 = document.createElement("p");

p1.textContent="The Design of EveryDay Things";
p2.textContent="The Most Human Human";

let myHeading = document.querySelector("h1"); 
 
myHeading.appendChild(p1); 
myHeading.appendChild(p2);

document.body.appendChild(p1);
document.body.appendChild(p2);

//or, using ul, li

let myUl = document.createElement("ul");
let myLi = document.createElement("li");
let myLi1 = document.createElement("li");

myUl.textContent="my Book-list";
myLi.textContent="The Design of EveryDay Things";
myLi1.textContent="The Most Human Human";
 
myUl.appendChild(myLi);
myUl.appendChild(myLi1);

document.body.appendChild(myUl);

//link an image with the books
let myA = document.createElement("a");
let myA1 = document.createElement("a");

myA.textContent="city.jpg" /* width="150" height="113" */;
myA1.textContent="countryside.jpg" /* alt="nature" width="150" height="113" */;

let imageHolder = document.querySelector("h1");

imageHolder.appendChild(myA);
imageHolder.appendChild(myA1);

document.body.appendChild(myA);
document.body.appendChild(myA1);



//the last question

const books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
    }
  ];

 for(let a=0; a<books.length; a++){
    let myStatus= books[a].alreadyRead;

    if(myStatus === true){
    myLi.style.color="red";
    myLi1.style.color="blue";
    } else {
    myLi.style.color="blue";
    myLi1.style.color="red";
}
 }//if it's already read blue, else red

 
