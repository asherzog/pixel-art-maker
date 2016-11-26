$(document).ready(function() {
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



    $('button').click(function() {
      $('.grid div').css('background-color', 'white');
    });

  });
});
