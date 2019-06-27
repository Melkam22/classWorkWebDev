
let innerFourth = document.getElementById("innerFourth");
let img1 = document.getElementById("img1");

let i=0;
function btn2() {
    if(i==0) {
        innerFourth.style.borderStyle="dotted";
        innerFourth.style.borderRadius="15%";
        innerFourth.style.boxSizing="border-box";
        innerFourth.style.overflow="hidden";
        img1.src="asset/sun.jpg";
        i++;
    }
    else if(i==1){
        innerFourth.style.borderRadius="25%";
        img1.src="asset/abay.jpg";
        i++;
    }
    else if(i==2) {
        innerFourth.style.borderRadius="35%";
        innerFourth.style.borderStyle="dashed";
        img1.src="asset/countryside.jpg";
        i++;
    }
    else if (i==3) {
        innerFourth.style.borderRadius="50%";
        innerFourth.style.borderStyle="dotted";
        innerFourth.style.borderColor="green";
        img1.src="asset/forest.jpg";
        i++;
    }
    else if(i==4) {
        innerFourth.style.borderRadius="0%";
        img1.src="asset/sun.jpg";
        i=0; 
    }
}

                            /* to full circle */

let box1 = document.getElementById("box1");

let ie=0;
function btn() {
if(ie==0){
box1.style.backgroundColor = "blue";
box1.style.marginLeft= "5%";
box1.style.textAlign= "center";
ie++;
}
else if(ie==1) {
box1.style.backgroundColor= "orange";
box1.style.marginLeft= "20%";
box1.style.borderBottomLeftRadius="50%";
box1.innerHTML="first side";
/*  box1.style.margin.innerHTML="0 auto"; */
ie++;
}
else if(ie==2) {
box1.style.backgroundColor= "red";
box1.style.marginLeft= "40%";
box1.style.borderBottomRightRadius="50%";
box1.innerHTML="second side";
ie++;
}
else if (ie==3) {
box1.style.backgroundColor="green";
box1.style.marginLeft= "60%";
box1.style.borderTopLeftRadius="50%";
box1.innerHTML="third side";
ie++;
}
else if (ie==4) {
box1.style.backgroundColor="pink";
box1.style.marginLeft= "85%";
box1.style.borderTopRightRadius="50%";
box1.innerHTML="fourth side";
ie++;
}
else {
box1.style.backgroundColor = "white";
box1.style.marginLeft= "0%";
box1.innerHTML="full-circle";
ie=0;
}  
}

                    /* the last one with different border radius */

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
    ex=0;
}
}