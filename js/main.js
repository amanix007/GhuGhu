$(function() {
  "use strict";

  $('.pageloader').remove();

// $('a.goto, .navbar .nav a').smoothScroll({speed: 1200});

// Main Menu scroll down effect
$(window).scroll(function () {
  if ($(window).scrollTop() > $("nav").height()) {
    $("nav.navbar-down").addClass("down");
  } else {
    $("nav.navbar-down").removeClass("down");
    $(".navbar-down .navMenuCollapse").collapse({toggle: false});
    $(".navbar-down .navMenuCollapse").collapse("hide");
    $(".navbar-down .navbar-toggle").addClass("collapsed");
  }
});

$('.main-menu .nav a').on('click', function(){ 
  if($('.navbar-toggle').css('display') !='none'){
    $(".navbar-toggle").click();
  }
});

// Main Menu Social blinking effect

var SocBlink = $('.main-menu .social_blinker'),
MenuSoc = $('.main-menu .social');
SocBlink.on('click', function() {
  $(this).toggleClass('hidden');
  MenuSoc.toggleClass('appear');
});


MenuSoc.mouseleave(function() {
  $(this).removeClass('appear');
  SocBlink.removeClass('hidden');
});





/* =================================
===  Sliders Configuration
=================================== */

$('.slider-fade-bg').slick({
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  infinite: true,
  arrows: false,
  dots: false,
  fade:true,
  speed:3700,
  autoplaySpeed: 7000
});



$("#contact-form").submit(function (e) {
  e.preventDefault();
  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  var subject = $("#contact-subject").val();
  var message = $("#contact-message").val();
  var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;
  $.ajax({
    type: "POST",
    url: "sendmail/mail.php",
    data: dataString,
    success: function () {
      $('.form-success').css({"opacity" : "1"});
      $('.form-error').css({"opacity": "0"});
    },
    error:function(){
      $('.form-error').css({"opacity" : "1"});
      $('.form-success').css({"opacity": "0"});
    }
  });


});




/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(
    document.createTextNode('@-ms-viewport{width:auto!important}'));
  document.querySelector('head').appendChild(msViewportStyle);
}




});

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?LR-verbose&snipver=1&LiveTest=1"></' + 'script>');
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35730/livereload.js?LR-verbose&snipver=1&LiveTest=1"></' + 'script>');