
  $(document).ready(function(){
    $("#one").on("mouseenter mouseleave", function(event){
        if(event.type === "mouseenter"){
            $("#flex").css("display", "flex");
            $("#flex").css("flex-direction", "column");
             
             
        }else if(event.type === "mouseleave"){
            $("#flex").css("display", "none");
            //$("#source").css("padding-top", "0px");

             
        }
    })
} )