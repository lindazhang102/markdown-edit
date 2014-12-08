$(document).ready(function(){
  $('#markdown').keyup(function(){
    text = markdown.toHTML( $('#markdown').val());
    $('#html').html(text);
  });
});
