
//heading & paragraph created from js

myH1 = document.createElement("h1");
myP = document.createElement("p");

myH1.textContent="This is my heading."
myP.textContent="This is my paragraph created remotely.";

let myClass = document.querySelector(".content");
myClass.appendChild(myH1);
myClass.appendChild(myP);

document.body.appendChild(myH1);
document.body.appendChild(myP);

//ul & li created from js
myUl = document.createElement("UL");
myLi1 = document.createElement("LI");
myLi2 = document.createElement("LI");
myLi3 = document.createElement("LI");
myLi4 = document.createElement("LI");

myUl.textContent="These are my Unordered lists.";
myLi1.textContent="content one";
myLi2.textContent="content two";
myLi3.textContent="content three";
myLi4.textContent="content four";

myUl.appendChild(myLi1);
myUl.appendChild(myLi2);
myUl.appendChild(myLi3);
myUl.appendChild(myLi4);

document.body.appendChild(myUl);

//creating sub class
mySub1 = document.createElement("LI");
mySub2 = document.createElement("LI");
mySub3 = document.createElement("LI");

mySub1.textContent="sub-list one";
mySub2.textContent="sub-list two";
mySub3.textContent="sub-list three";

myLi4.appendChild(mySub1);
myLi4.appendChild(mySub2);
myLi4.appendChild(mySub3);

document.body.appendChild(myLi4);

//creating li's is ok, but, how to add sub-lists to our UL 
