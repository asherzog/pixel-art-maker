$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    let $input = $('input').val();
    for (var i = 0; i < $input; i++) {
      var row = '<div>';
      for (var j = 0; j < $input; j++) {
        row += '<div></div>';
      }
      row += '</div>';
      $('.grid').append(row);
    }
    let color = '';
    let isDown = false;
    $('.pallete div').click(function() {
      color = $(this).css('background-color');

      $('.grid div').click(function() {
        $(this).css('background-color', color);
      });

      $('.grid div').mousedown(function() {
        isDown = true;
        if (isDown) {
          $(this).css ('background-color', color);
        }
        $('.grid div').mouseenter(function() {
          if (isDown) {
            $(this).css ('background-color', color);
          }
        });
        $('.grid div').mouseup(function() {
          isDown = false;
        });
      });
    });
    $('button').click(function() {
      $('.grid').html('');
    });

  });
});
