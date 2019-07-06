
//to insert the dropdown li's inside the sub-ul 
/* myUl= document.createElement("UL");
myLi1 = document.createElement("LI");
myLi2 = document.createElement("LI");
myLi3 = document.createElement("LI");

myLi1.textContent ="Fikir-eskemekabir";
myLi2.textContent="Keadmas-bashager";
myLi3.textContent="Kebuska-bestejerba";

myUl.appendChild(myLi1);
myUl.appendChild(myLi2);
myUl.appendChild(myLi3);
 
myDropDown = document.querySelector("#drop"); */
 


//eventListener
myId = document.querySelector("#drop");
myEffect = document.querySelector("#dropped");

function dropDown (event){
        if(event.type === "mouseover"){
            myEffect.style.display="block";
            myEffect.style.display="flex";
            myEffect.style.flexDirection="column";

            /* myDropDown.appendChild(myUl);
            document.body.appendChild(myDropDown); */
        } else if(event.type === "mouseleave"){
            myEffect.style.display="none";
        }
}
myId.addEventListener("mouseover", dropDown);
myId.addEventListener("mouseleave", dropDown);











   