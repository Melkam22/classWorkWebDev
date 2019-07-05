
 
//empty boxes in a row
let i=0;
function btn(){
    if(i==0){
        let myOne = document.querySelector(".one");
        myOne.style.border="1px solid blue";
        myOne.style.backgroundColor="rgba(142,102,71,.5)";
        myOne.style.width="150px";
        myOne.style.height="150px";
        myOne.innerHTML="the first one";
        i++;
    }
    else if(i==1){
        let myTwo = document.querySelector(".two");
        myTwo.style.border="1px solid blue";
        myTwo.style.backgroundColor="rgba(142,10,1,.5)";
        myTwo.style.width="200px";
        myTwo.style.height="200px";
        myTwo.style.marginLeft="154px";
        myTwo.style.marginTop="-151px";
        myTwo.innerHTML="the second one";
        i++;
    }
    else if(i==2){
        let myThree = document.querySelector(".three");
        myThree.style.border="1px solid blue";
        myThree.style.backgroundColor="rgba(102,110,41,.5)";
        myThree.style.width="250px";
        myThree.style.height="250px";
        myThree.style.marginLeft="357px";
        myThree.style.marginTop="-202px";
        myThree.innerHTML="the third one";
        i++;
    }
    else if(i==3){
        let myFour = document.querySelector(".four");
        myFour.style.border="1px solid blue";
        myFour.style.backgroundColor="rgba(12,10,141,.5)";
        myFour.style.width="300px";
        myFour.style.height="300px";
        myFour.style.marginLeft="611px";
        myFour.style.marginTop="-251px";
        myFour.innerHTML="the fourth one";
        i++;
    }
    else if(i==4){
        let myFive =document.querySelector(".five");
        myFive.style.border="1px solid blue";
        myFive.style.backgroundColor="rgba(212,109,91,.5)";
        myFive.style.width="350px";
        myFive.style.height="350px";
        myFive.style.marginLeft="916px";
        myFive.style.marginTop="-301px";
        myFive.innerHTML="the fifth one";
        i++
    }
    else if(i==5){
        /* let myOne = document.querySelector(".one");
        myOne.style.border="1px solid blue";
        myOne.style.backgroundColor="rgba(142,102,71,.5)";
        myOne.style.width="150px";
        myOne.style.height="150px"; */
        location.reload();
    }
}

//to add new paragraph only using js
let paragraph = document.createElement("p");

paragraph.textContent="This is para from the js";
document.body.appendChild(paragraph);//paragraph is created to the body

let unorderedList = document.createElement("UL");
let list = document.createElement("LI");
let list1 = document.createElement("LI");
let list2 = document.createElement("LI");

unorderedList.textContent="my unordered list";
list.textContent="first";
list1.textContent="second";
list2.textContent="third";

let underWhich = document.querySelector("p");//to put all under the tag of paragraph
underWhich.appendChild(unorderedList);
underWhich.appendChild(list);
underWhich.appendChild(list1);
underWhich.appendChild(list2);

document.body.appendChild(underWhich);



 
