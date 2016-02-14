$(document).ready(function(){
  $('.send-message').on('submit', function(event){
  	event.preventDefault();


  }

  $.post('http://portal.batchacademy.com/api/wdfne/test-data/send-fake-message', {

  }, function(){
  	console.log(responseData.status);
  });
});
