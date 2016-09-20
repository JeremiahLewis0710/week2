$(fucntion(){
    //append function will add items to the list at the bottom
    //preppend function will add items to the list at the bottom

    $("#add").click(function(ev){
        $('ul').append('<li> Item 2</li>');


    });

    $("#name").blur(function(){
        var name = $("#name").value;
        alert("Hello, " + name);
    })

});