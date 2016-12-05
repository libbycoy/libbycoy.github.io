$(document).ready(function() {

  $('#links').hide();
  $('.skill-info').hide();
  // $('.about').hide();

  $('#draw-gun').hide();
  $('#draw-blog').hide();
  $('#draw-draw').hide();
  $('#draw-game').hide();
  $('.see-more').hide();
  $('.padding').hide();
  $('#pic').hide();

  $('.skill-sec').hover( function() {
    // $('.padding').show();
    // $('.padding').addClass('animated flipInX');
  });

  $('.see-more').fadeIn(3000);

  $('.see-more').click(function() {
    $('html, body').animate({
      scrollTop: $("#work").offset().top
   }, 800);
  });

  $(window).scroll(function() {

    if ($(this).scrollTop() > 260) {
    $('.skill-info').fadeIn();
     $('.skill-info').addClass('animated slideInUp');
    }

    if ($(this).scrollTop() > 740) {
     $('.about').addClass('animated slideInUp');
    }

    if ($(this).scrollTop() > 940) {
     $('.work-sec').addClass('animated slideInUp');
     $('#pic').show();
     $('#pic').addClass('animated slideInLeft');
    }

    if ($(this).scrollTop() > 1630) {
      $('.padding').show();
      $('.padding').addClass('animated flipInX');
    }
  });

  $("#the-work").click(function() {
    $('#the-work').css('color', '#c7bbc9');
    $('#the-about').css('color', '#eee');
    $('#the-contact').css('color', '#eee');
    $('#the-design').css('color', '#eee');
    $('html, body').animate({
      scrollTop: $("#work").offset().top
   }, 800);
  });

  $("#the-about").click(function() {
    $('#the-about').css('color', '#c7bbc9');
    $('#the-work').css('color', '#eee');
    $('#the-contact').css('color', '#eee');
    $('#the-design').css('color', '#eee');
    $('html, body').animate({
      scrollTop: $("#about").offset().top
   }, 800);
  });

  $("#the-contact").click(function() {
    $('#the-contact').css('color', '#c7bbc9');
    $('#the-work').css('color', '#eee');
    $('#the-about').css('color', '#eee');
    $('#the-design').css('color', '#eee');
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
   }, 800);
  });

  $("#the-design").click(function() {
    $('#the-design').css('color', '#c7bbc9');
    $('#the-work').css('color', '#eee');
    $('#the-about').css('color', '#eee');
    $('#the-contact').css('color', '#eee');
    $('html, body').animate({
      scrollTop: $("#design").offset().top
   }, 800);
  });

  $('.descript').hover( function() {
    $('.descript').css('background-color', '#bbd3d6');
    }, function(){
      $('.descript').css('background-color', '#c7bbc9');
  });

  $('.project-3').hover( function() {
    $('#draw-gun').show();
    $('#draw-gun').addClass('animated slideInUp');
    }, function(){
      $('#draw-gun').hide();
  });

  $('.project-2').hover( function() {
    $('#draw-game').show();
    $('#draw-game').addClass('animated slideInUp');
    }, function(){
      $('#draw-game').hide();
  });

  $('.project-1').hover( function() {
    $('#draw-draw').show();
    $('#draw-draw').addClass('animated slideInUp');
    }, function(){
      $('#draw-draw').hide();
  });

  $('.project-0').hover( function() {
    $('#draw-blog').show();
    $('#draw-blog').addClass('animated slideInUp');
    }, function(){
      $('#draw-blog').hide();
  });

  $('.circle').on('click', function() {
    if ($('.circle').hasClass('animated')) {
      $('.circle').removeClass('animated rotation');
      $('#links').removeClass('slideInUp');
      $('#links').addClass('fadeOutDown');
      $('#links').fadeOut(1000);
    } else {
      $('.circle').addClass('animated rotation')
      $('#links').show();
      $('#links').addClass('animated slideInUp');
    }
  });

});
