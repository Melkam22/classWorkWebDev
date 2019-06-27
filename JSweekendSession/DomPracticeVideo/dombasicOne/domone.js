
/* //it ll target the first para class, since we use query selector
let para = document.querySelector(".para");
para.innerHTML += "  -this is to be added from js";
para.style.color="blue";
para.style.fontSize="22px";//we can style it directly

//it ll target the 3rd id class of para
let para1 = document.querySelector("#para1");
para1.innerHTML += "  -to be added from js";
para1.style.color="green";
para1.style.fontWeight="bold"; */


/*or we can use querySelectorAll and use square braces to target each element*/

let para = document.querySelectorAll(".para");
para[0].innerHTML += "  -to be added from JS";
para[0].style.color="blue";
para[0].style.fontWeight="bold";//styling it
para[0].style.backgroundColor="pink";
para[0].style.textAlign="center";


para[1].innerHTML += "  -added from JS";
para[1].style.fontSize="22px";
para[1].style.color="orange";
para[1].style.backgroundColor="crimson";
para[1].style.textAlign="center";
 
//to select an id
let para1 = document.querySelector("#para");
para1.innerHTML += "  -added on the id from JS";

para1.style.backgroundColor="silver";
para1.style.textAlign="center";

//to call and style it direct from css

let subm = document.querySelector("input[type=submit]");
subm.classList.add("submit");