jQuery(function($) {
    var scrollto = window.location.hash;
    if (window.location.hash != null && window.location.hash != '') {
        $('html, body').animate({
            scrollTop: $(scrollto).offset().top-100
        }, 500);
    }

    $('.secondary').on('click', 'li a', function() {
        $('.secondary li a.active').removeClass('active');
        $(this).addClass('active');
    });
    var doAnimations = function() {

    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    if ($animatables.size() == 0) {
      $(window).off('scroll', doAnimations);
    }

        $animatables.each(function(i) {
       var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
            }
    });

    };
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});