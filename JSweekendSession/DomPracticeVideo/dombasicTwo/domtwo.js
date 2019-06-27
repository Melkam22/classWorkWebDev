
//to add & remove attributes

let p1 = document.createElement("p");
let p2 = document.createElement("p");

p1.textContent = "first paragraph";
p2.textContent = "second paragraph";

let practice = document.querySelector(".practice");

practice.appendChild(p1);
practice.appendChild(p2);

practice.style.color="blue";//to create a new paragraph

//to set attribute

p1.setAttribute("class", "para");//to create new class for the first attribute
p2.setAttribute("class", "para");//create new class for the second attribute

//p1.removeAttribute("class");


