$(function(){
    var darkskycondition = "https://api.darksky.net/forecast/25c7e5437826048f2515b96faa565698/37.8267,-122.4233";
    $.ajax(darkskycondition,{dataType:"jsonp"}).done(function(data){
        console.log(data);
        $("#condition").append( data.currently.summary);
        
    });
    var darkskytemp = "https://api.darksky.net/forecast/25c7e5437826048f2515b96faa565698/37.8267,-122.4233";
    $.ajax(darkskytemp,{dataType:"jsonp"}).done(function(data){
        console.log(data);
        $("#temp").append( data.currently.temperature);
    });  
    var darkskyrainchance = "https://api.darksky.net/forecast/25c7e5437826048f2515b96faa565698/37.8267,-122.4233";
    $.ajax(darkskyrainchance,{dataType:"jsonp"}).done(function(data){
        console.log(data);
        $("#chanceofrain").append( "Current Chance of Rain is at "+data.currently.precipProbability); 
    });     
    var darkskymaxtemp = "https://api.darksky.net/forecast/25c7e5437826048f2515b96faa565698/37.8267,-122.4233";
    $.ajax(darkskymaxtemp,{dataType:"jsonp"}).done(function(data){
        console.log(data);
        $("#maxtemp").append( "The high for today is "+data.daily.temperatureMax); 
    });  

    var location ="https://maps.googleapis.com/maps/api/geocode/json?address=41240&key=AIzaSyBR_rxAnCdGK8bRZlRhG69ZO1xb9omyflE";
    $.ajax(location,{dataType:"json"}).done(function(data){
        console.log(data)
        $("#location").append(data.results.formatted_address)
    });


});


//  $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {
//        console.log(data);
//    });