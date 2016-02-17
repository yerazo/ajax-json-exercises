$(document).ready(function(){
    $('form').on('submit', function(event){
  	event.preventDefault();
    var zipCode = $('form input').val();
		if(zipCode.length === 5 && Number(zipCode)){

		    $.get('http://maps.googleapis.com/maps/api/geocode/json', {
		    	address: zipCode
		    }, function(responseData){
		    	var lat = responseData.results[0].geometry.location.lat;
		    	var lng = responseData.results[0].geometry.location.lng;
		    	console.log(lat, lng);
			    $.get('https://api.forecast.io/forecast/975752a53943e64486a7af61e9c38ada/' + lat + ',' + lng, {
			    }, function(responseData){
			    	console.log(responseData);
			    });
		    });  
		} else {
			alert('This is not a zip code.');
		}
    });
});


