$(function(){
    $("#add").click(function(ev){
        var val = $('#items').val();
        $("ul").append('<li>'+ val +'</li>')
    ev.preventDefault();
    });   
    $("#delete").click(function(){
        $("li").detach
    });
    $("#items").css({"background-color": "yellow"});
});