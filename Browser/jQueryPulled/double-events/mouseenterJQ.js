
//mouseenter, mouseleave event on a button
$(document).ready(function() {
    $('#btn').on('mouseenter mouseleave', function(event) {
        if(event.type === 'mouseenter') {
        $('#btn').css('color', 'red');
        $('#btn').css('background-color', 'black');
        $("#btn").html("Don't leave me this way!");
        $("#btn").css("border-radius", "10px");
        } else if (event.type === 'mouseenter') {
            $('#btn').css('color', 'tomato');
            $('#btn').css('background-color', 'silver');
            $("#btn").html("This is my second text");
        } else {
            $("#btn").css("color", "orange");
            $("#btn").css("background-color", "rgba(11,20,25,.5");
            $("#btn").html("Just put the cursor back on me!");
            $("#btn").css("border-radius", "0px");
        }
    })
})

