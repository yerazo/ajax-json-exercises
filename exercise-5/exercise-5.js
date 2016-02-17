$(document).ready(function(){
    $('.get-weather').on('submit', function(event){
  	event.preventDefault();
  });

    var value = $('input').val();
    var isValid = true;
    $('input[required]').each(function(){
    	if($(this).val().length === 5){
    		console.log(value + "is a number");
    	}
    })
    var latitude = '';
    var longitude = '';

    $.get('http://maps.googleapis.com/maps/api/geocode/json', {
    	address: '78154'
    }, function(responseData){
    	console.log(responseData.results[0].geometry.location);
    	latitude = responseData.results[0].geometry.location.lat;
    	longitude = responseData.results[0].geometry.location.lng;
    });

    $.get('https://api.forecast.io/forecast/975752a53943e64486a7af61e9c38ada/' + latitude + ',' + longitude, {
    }, function(responseData){
    	console.log(responseData);
    });
});