
                    /* firstButton */

let btn = document.getElementById("firstOne");
let classy1 = document.getElementById('pic');

let myVal=0;
function background(){
    if(myVal==0) {
        /* classy1.classList.add("firstOne"); */
        classy1.src="asset/taj-mahal";
        myVal++;
        classy1.style.width="95vw";
        classy1.style.height="90vh";
        classy1.style.zIndex="3";

            /* onclick(function background() {
            classy1.classList.remove('firstOne'); 
            }  */
        }
    
else if (myVal==1){
        /* classy1.classList.add("firstOne"); */
        classy1.src="asset/sun.jpg";
        myVal++;
}
else if (myVal==2) {
        /* classy1.classList.add("firstOne"); */
        classy1.src="asset/clouds.jpg";
        myVal++;
}
else if (myVal==3){
       /*  classy1.classList.add("firstOne"); */
        classy1.src="asset/farm.jpg";
        myVal++
}
else if (myVal==4){
    /* classy1.classList.add("firstOne"); */
    classy1.src="asset/abay.jpg";
    classy1.style.width="100%";
    classy1.style.height="320px";
    classy1.style.zIndex="3";
    myVal=0;
}
}


/* let btn = document.getElementById("firstOne");
let myVal = 0;
function background(){
    if(myVal==0) {
        btn.innerHTML =  "Wel come to this page!";
        btn.style.backgroundColor = "blue";
        myVal++;
    }

    else if (myVal==1){
        btn.style.backgroundColor= "green";
        btn.innerHTML = "The background color has changed.";
        myVal++;
        
    }
    else if (myVal==2){
        btn.style.backgroundColor = "white";
        btn.innerHTML = "Thank you and Good Bye!";
        myVal=0;
}
} */

                        /* secondButton */

let btn1 = document.getElementById("secondOne");
let classy2 = document.getElementById("pic1");

let i=0;
function background1(){
if(i==0) {
    /* btn1.classList.add("secondOne"); */ 
    classy2.src="asset/forest.jpg";
    i++;
    classy2.style.width="95vw";
    classy2.style.height="90vh";
    classy2.style.marginLeft="-130%";
    classy2.style.zIndex="3";
}
else if(i==1){
        /* btn1.classList.add("secondOne");  */
        classy2.src="asset/sun.jpg";
        i++;
}
else if(i==2){
        /* btn1.classList.add("secondOne"); */
        classy2.src="asset/clouds.jpg";
        i++;
}
else if(i==3){
        /* btn1.classList.add("secondOne"); */
        classy2.src="asset/earth.jpg";
        i++;
}
else if(i==4){
       /*  btn1.classList.add("secondOne"); */
        classy2.src="asset/abay.jpg";
        classy2.style.marginLeft="0%";
        classy2.style.width="100%";
        classy2.style.height="320px";
        /* if(style.pic.zIndex==3) {
            btn.style.pic1.zIndex==1;}
            else{ 
                btn.style.pic1.zIndex==3;
            } */
        classy2.style.zIndex="3"; 
        i=0;
}
}

/* let btn1 = document.getElementById("secondOne");
let myVall= 0;
function background1(){
    if(myVall==0) {
        btn1.innerHTML = "Wel come to this page!";
        btn1.style.backgroundColor = "blue";
        myVall++;
    }

    else if (myVall==1){
        btn1.style.backgroundColor= "silver";
        btn1.innerHTML = "The background color has changed.";
        myVall++;
        
    }
    else if (myVall==2){
        btn1.style.backgroundColor = "white";
        btn1.innerHTML = "Thank you and Good Bye!";
        myVall=0;
}
} */
