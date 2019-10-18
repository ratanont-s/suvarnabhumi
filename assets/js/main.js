$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section#sec-1').offset().top }, 'slow');
    return false;
  });
});