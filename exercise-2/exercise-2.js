$(document).ready(function(){
  var productTemplate = $('template').html();
  $.get('http://portal.batchacademy.com/api/wdfne/test-data/items', function(items){
  	for(var i = 0; i < items.length; i++){
  		console.log(items[i]);
  		var newProduct = $(productTemplate);

  		$('.title', newProduct).text(items[i].name);
  		$('.price', newProduct).text('$' + items[i].price.toFixed(2));
  		$('.items').append(newProduct);
  	}
  });
});

