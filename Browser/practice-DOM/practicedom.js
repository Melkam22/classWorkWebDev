

let myContainer = document.getElementById("container");
let myContainer1 = document.querySelector("#container");
myContainer1.innerHTML +="Hello!";//+= not to delete the rest & print only this
myContainer1.style.color="green";


let secondClass = document.querySelectorAll(".second");//1st & 2nd second classes
secondClass[0].style.color="orange";
secondClass[1].style.color="orange";

let thirdClass = document.querySelectorAll(".third");
thirdClass[1].style.color="red";

let addedClass = document.createElement("div");
addedClass.textContent=" ";
let footer= document.querySelector(".footer");
footer.appendChild(addedClass);
addedClass.setAttribute("class","this is added to the footer");//added to footer

//to remove the attribute
addedClass.removeAttribute("class");

//to add new li
let newLi = document.createElement("li");
newLi.textContent="four, this was lastly added";
let myUl = document.querySelector("ul");
myUl.appendChild(newLi);

//newLi.setAttribute("li", "four");

//loop through th li's in the ol

let lisInOl = document.getElementsByTagName("li");
for(let a=0; a<lisInOl.length; a++){
    lisInOl[a].style.color="green";
}//it targets li's both in ul & ol

//remove the footer
myContainer.removeAttributeNS ("footer");//the footer is not deleted
body.removeAttributeNS ("footer");//
