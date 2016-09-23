$(function () {
    $("#addzip").click(function () {
        var zipcode = $("#zip").val();


        var location = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBR_rxAnCdGK8bRZlRhG69ZO1xb9omyflE";
        $.ajax(location, { dataType: "json" }).done(function (data) {
            console.log(data)
            var city = data.results[0].address_components[1].long_name;
            var state = data.results[0].address_components[3].short_name;
            var latitude = data.results[0].geometry.location.lat;
            var longitude = data.results[0].geometry.location.lng;
            // $(".city").append(city + ' ' + state);

            var darkskycondition = "https://api.darksky.net/forecast/25c7e5437826048f2515b96faa565698/" + latitude + "," + longitude;
            $.ajax(darkskycondition, { dataType: "jsonp" }).done(function (data) {
                console.log(data);
                var div = $("<div></div>");
                div.append(city + ' ' + state)
                   .append(data.currently.summary)
                   .append(data.currently.temperature)
                   .append("Current Chance of Rain is at " + data.currently.precipProbability)
                   .append("The high for today is " + data.daily.data[0].temperatureMax)
                   .append("The low for today is " + data.daily.data[0].temperatureMin);
                   $("#card").append(div);


            });

        });


    });

});





//  $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {
//        console.log(data);
//    });