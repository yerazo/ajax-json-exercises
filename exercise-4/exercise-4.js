$(document).ready(function(){
  $('.send-message').on('submit', function(event){
  	event.preventDefault();

    $.post('http://portal.batchacademy.com/api/wdfne/test-data/send-fake-message', {
	  	name: $('input.name').val(),
	  	email: $('input.email').val(),
	  	message: $('textarea.message').val()
    }, function(response){
  		console.log(response);
	  var nameInput = $('input.name', this);
	  var emailInput = $('input.email', this);
	  var messageInput = $('textarea.message', this);

	  nameInput.val('');
	  emailInput.val('');
	  messageInput.val('');
    });
  });
});

