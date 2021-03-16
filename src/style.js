'use strict';
$(function(){
  $('.slicks').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
    });
    var pagetop = $('.pagetop');
    pagetop.hide();

    $(window).scroll(function () {
        if($(this).scrollTop() > 80) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0}, 500);
        return false;
    });
  });
