$(document).ready(function(){
  $('#markdown').keyup(function(){
    text = markdown.toHTML( $('#markdown').val());
    $('#html').html(text);
  });
});

$(document).ready(function(){
  var selection;
  $('textarea').keyup(function(){
    console.log(selection)
    selection=window.getSelection().toString()
  });

  $('textarea').mouseup(function(){
    console.log(selection)
    selection=window.getSelection().toString()
  });

  $('#button2').click(function(){
    text = $('#markdown').val().replace(selection,'*'+selection+'*');
    console.log(text);
    $('#markdown').val(text);
    console.log(text);
    text = markdown.toHTML( text );
    $('#html').html(text);
  });

  $('#button1').click(function(){
     text=$("#markdown").val().replace(selection,'**'+selection+'**');
     console.log(text);
     $('#markdown').val(text);
     console.log(text);
     text = markdown.toHTML( text );
     $('#html').html(text);
    });

  $('#button5').click(function(){
     text=$("#markdown").val().replace(selection,'> '+selection);
     console.log(text);
     $('#markdown').val(text);
     console.log(text);
     text = markdown.toHTML( text );
     $('#html').html(text);
    });
  });
