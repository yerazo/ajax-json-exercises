$(document).ready(function(){
  $('.send-message').on('submit', function(event){
  	event.preventDefault();
  });

  $.post('http://portal.batchacademy.com/api/wdfne/test-data/send-fake-message', {
	  	name: '',
	  	email: '',
	  	message: ''
  }, function(responseData){
  	console.log(responseData.status);
  });

	  var nameInput = $('input.name', this);
	  var emailInput = $('input.email', this);
	  var messageInput = $('textarea.message', this);

	  nameInput.val('');
	  emailInput.val('');
	  messageInput.val('');
 });

