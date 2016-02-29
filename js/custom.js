$(document).ready(function(){
  $('#faq a').click(function() {
    $(this).toggleClass('opened').next('p').slideToggle('fast');
    $(this); return false;
  });
});
