jQuery(function($) {
    // var scrollto = window.location.hash;
    // if (window.location.hash != null && window.location.hash != '') {
    //     $('html, body').animate({
    //         scrollTop: $(scrollto).offset().top-100
    //     }, 500);
    // }

    // $('.secondary').on('click', 'li a', function() {
    //     $('.secondary li a.active').removeClass('active');
    //     $(this).addClass('active');
    // });
    // var doAnimations = function() {

    // var offset = $(window).scrollTop() + $(window).height(),
    //     $animatables = $('.animatable');

    // if ($animatables.size() == 0) {
    //   $(window).off('scroll', doAnimations);
    // }

    //     $animatables.each(function(i) {
    //    var $animatable = $(this);
    //         if (($animatable.offset().top + $animatable.height() - 20) < offset) {
    //     $animatable.removeClass('animatable').addClass('animated');
    //         }
    // });

    // };
    // $(window).on('scroll', doAnimations);
    // $(window).trigger('scroll');
    // $('.hamburger-slim').on('click', function(){
    //     $(this).toggleClass('active');
    // });

      var slideWidth = $('#pageslide').outerWidth(); //grab width of the sliding menu so that this can be controlled in the css only

      $('.slideIt, #pageslide a.close').on("click", function(){  //click function
        $('.slideIt').toggleClass('active'); //toggle the active close vs open icon
        
        if($('#pageslide').is(':visible')) {  //if visible then hide it 
          $('#pageslide').animate({
            left: '-'+slideWidth
          }, 400, function(){
            $('#pageslide').hide();
          } );
          $('.wrapper').animate({
            marginLeft: '0'
          }, 400 );
          $('.slideIt span').text('☰');
        } 
        else{                                //else show it
          $('#pageslide').show().animate({
            left: '0'
          }, 400 );
          $('.wrapper').animate({
            marginLeft: slideWidth
          }, 400 );
        }
      });

        $('.toggle').click(function(e) {
            e.preventDefault();
          
            var $this = $(this);
            var $toggle = $this.find('span');

            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $toggle.removeClass('expanded');
                $this.next().slideUp(350);
            } else {
                $this.parent().parent().find('li .inner').removeClass('show');
                $this.parent().parent().find('li .inner').slideUp(350);
                $this.next().toggleClass('show');
                $toggle.toggleClass('expanded');
                $this.next().slideToggle(350);
            }
        });

});