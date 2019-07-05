
$("h1").html("from the jquery");

$(document).ready(function(){
    $('#clc').click(function(){  
        $('.para').html('This is my paragraph, fired from jquery.');
        $(".para").css("color", "red");
    })
})

//to style all together
$("#clc").click(function(){
    $(".para").css({
        "background-color" : "red",
        "border" : "1px solid black",
        "width" : "40%",
        "height" : "40vh",
        "background-color" : "rgba(12,143,198,.5)",
        "margin-left" : "25%",
    })
})       

//click again to make the content disappear
/* $(document).ready(function() {
    $('#clc').click(function() {
        $('.para').css("display", function(){
            if($(".para").css ("display")=== "block"){
                return "none";
            }
            else {
                return "block"
            }
        });
    })
}) */
 
//toggle, show if it is not there, or disappear if it is there
/* $("body").click(function(){
    $("h1").toggle("display");
}) */

//toggle, show if it is not there, or disappear if it is there
$("body").click(function(){
    $(".para").toggle("display");
})//it was originally made for paragraph, but since it uses the same function click()
//it is applied to the click effect too

//to hide & show the text on click
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });
  
   