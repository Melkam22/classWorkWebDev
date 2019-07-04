
$(document).ready( function(){
    $("ul").on("mouseenter mouseleave", function(event){
        if(event.type === "mouseenter"){
            $("#liDrop").css("display", "flex");
        }else if(event.type === "mouseleave"){
            $("#liDrop").css("display", "none");
        }
    })
} )