$(window).on("scroll", function () {
  // Aquí deberás escribir la lógica que modificará la barra
var scroll_pos = 0;
  $(document).scroll(function() {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 20) {
        $("nav").css('background-color', 'black');
        $("nav").css('opacity', '0.7');

      } else {

        $("nav").css('background-color', 'black');
        $("nav").css('opacity', '1');
    }
  });
});
