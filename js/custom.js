$(document).ready(function(){
  $('#faq a').click(function() {
    $(this).toggleClass('opened').next('p').slideToggle('fast');
    $(this); return false;
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 106
        }, 1000);
        return false;
      }
    }
  });
});
