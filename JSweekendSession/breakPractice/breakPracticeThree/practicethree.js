
let innerone = document.getElementById("innerone");

let my=0;
function btn2() {
if(my==0) {
    innerone.style.backgroundColor="silver";
    innerone.style.borderRadius="15%";
    my++;
}
else if(my==1) {
    innerone.style.backgroundColor="gold";
    innerone.style.borderRadius="25%";
    my++;
}
else if(my==2){
    innerone.style.backgroundColor="skyblue";
    innerone.style.borderRadius="35%";
    my++;
}
else if(my==3) {
    innerone.style.backgroundColor="red";
    innerone.style.borderRadius="50%";
    innerone.style.overflow="hidden";
    my++;
}
else if (my==4){
    innerone.style.backgroundColor="rgba(31,22,34,.4);"
    innerone.style.borderRadius="0%";
    my=0;
}
}

                                /* the second one */

let innerfourth = document.getElementById("innerfourth");

let i=0;
function btn3() {
if(i==0) {
    innerfourth.style.backgroundColor="rgba(59,94,193,.5)";
    innerfourth.style.width="50%";
    innerfourth.style.marginLeft="25%";
    innerfourth.innerText="This is the second box with light background color."
    innerfourth.style.paddingTop="5%";
    innerfourth.style.textAlign="center";
    innerfourth.style.fontWeight="bold";
    innerfourth.style.fontSize="22px";
    innerfourth.style.color="green";
    innerfourth.style.borderStyle="dashed";
    i++;
}
else if(i==1) {
    innerfourth.style.backgroundColor="rgba(9,4,3,.7)";
    innerfourth.style.width="70%";
    innerfourth.style.marginLeft="16%";
    innerfourth.innerText="This is the third box with light-dark background color."
    innerfourth.style.color="orange";
    i++;
}
else if (i==2) {
    innerfourth.style.backgroundColor="rgba(219,124,23,.7)";
    innerfourth.style.width="80%";
    innerfourth.style.marginLeft="8%";
    innerfourth.style.height="30vh";
    innerfourth.innerText="This is the fourth box with light orange background color."
    innerfourth.style.color="white";
    i++;
}
else if (i==3) {
    innerfourth.style.backgroundColor="rgba(119,114,113,.7)";
    innerfourth.style.width="90%";
    innerfourth.style.marginLeft="4%";
    innerfourth.style.height="30vh";
    innerfourth.innerText="This is the fifth box with light background color and with huge width and height size."
    i++;
}
else if (i==4) {
    innerfourth.style.backgroundColor="rgba(98,54,219,.7)";
    innerfourth.style.width="50%";
    innerfourth.style.height="25vh";
    innerfourth.style.marginLeft="30%";
    innerfourth.innerText="Wel come back to the first box."
    i=0;
}
}
 