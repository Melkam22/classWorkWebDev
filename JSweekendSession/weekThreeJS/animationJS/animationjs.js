
let para = document.getElementById('para');
let para1 = document.getElementById('pic');

let i = 0;
function btn(){
    if (i==0) {
    para.style.backgroundColor="blue";
    para.style.width="1250px";
    para.style.padding="5px 5px";
    /* para1.style.backgroundImage="asset/addis.jpg"; */ 
    i++;
    /* para.style.animationPlayState="running"; */
    para.classList.add("boxanimation");
    para1.src="asset/road.jpg";

    setTimeout(function a() {
    para.classList.remove("boxanimation"); 
    },6000);
}

else if(i==1){
            para.style.backgroundColor="silver";
            para.style.width="1000px";
            para.style.padding="15px";
            i++;
            para.classList.add("boxanimation");
            para1.src="asset/city.jpg";

            setTimeout(function a() {
            para.classList.remove("boxanimation");  
            },8000);

    }


else if(i==2){
            para.style.backgroundColor="orange";
            para.style.width="800px";
            para.style.padding="15px";
            i++;
            para1.src="asset/farm.jpg";
            /* para.style.animationPlayState="running"; */
            para.classList.add("boxanimation");

            setTimeout(function a() {
            para.classList.remove("boxanimation");
            },10000);

}
else if(i==3) {
           /*  para.style.animationPlayState="paused"; */
            para.style.backgroundColor="green";
            para.style.width="500px";
            para.style.padding="15px";
            i=0;
            para1.src="asset/landscape.jpg";
            para.classList.add("boxanimation");

            setTimeout(function a() {
            para.classList.remove("boxanimation");
            },12000);
}
}


/* 
function a() {
    para.classList.remove("boxanimation");
    
} */


 
