$(document).ready(function(){
  $('#markdown').change(function(){
    text = markdown.toHTML( $('#markdown').val());
    $('#html').html(text);
  });
});
