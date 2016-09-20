//$(document).ready(function(){} -- This is the same as line 2
$(function(){
$("#para").click(function() {
    $(this).fadeOut('slow','linear');
});


$("h3")
   .css("text-decoration", "underline");


// $("ul li:first-child") -- This is the same as the line 13
$("#unordered").find("li:first-child")
.css("color", "green");

});

