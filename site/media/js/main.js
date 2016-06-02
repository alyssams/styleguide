jQuery(function($) {

    var $window = $(window);
    var $input = $('.wrapper input');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 959) {
            $('body').removeClass('overflows');
            $('.accordion #nav').on('click', 'li a', function() {
                $input.prop('checked', false);
            });
            if($input.prop('checked') == true) {
                $('body').addClass('overflows');
            }else {
                $('body').removeClass('overflows');
            }
        }else {
            $input.prop('checked', true);
            $('.accordion #nav').on('click', 'li a', function() {
                $input.prop('checked', true);
                $('body').removeClass('overflows');
            });
        }
    }
    checkWidth();
    $(window).resize(checkWidth);


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

    scrollnav()

    }); 

    function scrollnav(){
    
    $('#nav a[href^="#"]').on('click',function (e) {
        e.preventDefault();

          var target = this.hash,
          $target = $(target);
                        
          $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 10
            }, 1000, function () {
                window.location.hash = target;
            });
        });
    
    
    var aChildren = $("ul#nav li").children(); 
    var aArray = []; 
    
        for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        }

    var windowPos = $(window).scrollTop(); 
            
    for (var i=0; i < aArray.length; i++) {
        var theID = aArray[i];
        var divPos = $(theID).offset().top - 100; 
        var pos = $("a[href='" + theID + "']").parent();

        if (windowPos >= divPos ) {
            $("ul#nav li").removeClass("active");
            $(pos).addClass("active");
            
            var finder = $("ul#nav li.active").index();
            size =$('ul#nav li').width();
            
            var onclick = finder * size;
                // $('span').css('top', onclick + 'px');
            }
        }
    }
    
    
    $(window).scroll(function() { 
                        
    scrollnav()
});