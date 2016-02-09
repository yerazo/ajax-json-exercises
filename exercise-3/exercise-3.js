$(document).ready(function(){
  var insert = $.get('http://portal.batchacademy.com/api/wdfne/test-data/hello-world');

  $('.dynamic').text(insert);
});
