
let box1 = document.getElementById("box1");

let i=0;
function btn() {
if(i==0){
    box1.style.backgroundColor = "blue";
    box1.style.marginLeft= "5%";
    box1.style.textAlign= "center";
    i++;
}
else if(i==1) {
    box1.style.backgroundColor= "orange";
    box1.style.marginLeft= "20%";
    box1.style.borderBottomLeftRadius="50%";
    box1.innerHTML="first side";
   /*  box1.style.margin.innerHTML="0 auto"; */
    i++;
}
else if(i==2) {
    box1.style.backgroundColor= "red";
    box1.style.marginLeft= "40%";
    box1.style.borderBottomRightRadius="50%";
    box1.innerHTML="second side";
    i++;
}
else if (i==3) {
    box1.style.backgroundColor="green";
    box1.style.marginLeft= "60%";
    box1.style.borderTopLeftRadius="50%";
    box1.innerHTML="third side";
    i++;
}
else if (i==4) {
    box1.style.backgroundColor="pink";
    box1.style.marginLeft= "85%";
    box1.style.borderTopRightRadius="50%";
    box1.innerHTML="fourth side";
    i++;
}
else {
    box1.style.backgroundColor = "white";
    box1.style.marginLeft= "0%";
    box1.innerHTML="full-circle";
    i=0;
}  
}


/* else if (x!=1) {
    btn.innerHTML ="Click me to change";
    btn.style.backgroundColor = "blue";
    x=0;
} 
}  */


                            /* second one */

let inner =document.getElementById ("inner");

let ex=0;
function btn1(){
    if(ex==0) {
        inner.style.backgroundColor= "gold";
        inner.style.borderRadius= "20%";
        inner.innerText="This is 20% circle on the first slide of my javascript page";
        inner.style.textAlign="center";
        inner.style.fontWeight="bold";
        inner.style.alignItems="center";
        ex++;
    }
 
else if(ex==1) {
        inner.style.backgroundColor= "blue";
        inner.style.borderRadius= "30%";
        inner.innerText="This is 30% circle on the second slide of my javascript page";
        inner.style.textAlign="center";
        inner.style.fontWeight="bold";
        ex++;
    }
else if(ex==2) {
    inner.style.backgroundColor= "green";
    inner.style.borderRadius= "50%";
    inner.innerText="This is 50% circle on the third slide of my javascript page";
    inner.style.textAlign="center";
    inner.style.fontWeight="bold";
    ex++;
}
else if(ex==3){
    inner.style.backgroundColor= "gold";
    inner.style.borderRadius= "0%";
    inner.innerText="BYE";
    inner.style.textAlign="center";
    inner.style.fontWeight="bold";
   /*  inner.innerHTML.textAlignTop="50%"; */
    ex=0;
}
}
