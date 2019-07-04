
//mouseenter, mouseleave event on a button
$(document).ready(function() {
    $('#btn').on('mouseenter mouseleave', function(event) {
        if(event.type === 'mouseenter') {
        $('#btn').css('color', 'red');
        $('#btn').css('background-color', 'black');
        $("#btn").html("This is my first text");
        $("#btn").css("border-radius", "10px");
        } else{
            $('#btn').css('color', 'tomato');
            $('#btn').css('background-color', 'silver');
            $("#btn").html("This is my second text");
            $("#btn").css("border-radius", "0px");
        }
    })
})

