
function fn(){

    let user = document.getElementById("user").value;
    
    let client_ID = "ce3bee068a9d05329bd5";
    let clientSecret = "a0ae9e511bcb87132eb3c18892221207598e1fe3";
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("get", `https://api.github.com/users/${user}?client_id=${client_ID}&client_secret=${clientSecret}`,true);
    httpRequest.onload=function() {
        if(this.status===200) {
            let user = JSON.parse(this.responseText);
            console.log(user);
            document.getElementById("profile").style.display="flex";
            document.getElementById("imagebox").style.display="block";
            document.getElementById("image").src=user.avatar_url;
            document.getElementById("image").style.backgroundPosition="cover";
            document.getElementById("box1").innerHTML=user.login;
            document.getElementById("box2").innerHTML=user.public_repos;
            document.getElementById("box3").innerHTML=user.followers;
            document.getElementById("box4").innerHTML=user.url;
             
        }
    }
    httpRequest.send();
}

 
