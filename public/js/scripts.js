(function ($) {
    "use strict";
 
    /*-------------------------------------
        Animation on scroll: Number rotator
    -------------------------------------*/
   $("[data-appear-animation]").each(function() {
        var self      = $(this);
        var animation = self.data("appear-animation");
        var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);        

         
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
         
    });

    /*-------------------------------------
    Swiper Slider
    -------------------------------------*/
    var swiperslider = $(".swiper-slider");
    var x = 1;
    swiperslider.each(function () {  
               var carouselElement	= $(this);
                var columns = $(this).data('columns');
                var loop = $(this).data('loop');
                var autoplay2 = $(this).data('autoplay');
                var autoplayspeed1 = $(this).data('autoplayspeed');
                var val_nav = $(this).data('arrows');
                var nav_arrow = $(this).data('arrows-class');                
                var val_dots = $(this).data('dots');
                var val_center = $(this).data('center');
                var style = $(this).data('effect');
                var loopSlide = null;
                var sl_speed = 1800; 

                carouselElement.addClass( 'pbmit-element-viewtype-carousel-' + x );


                if( columns === 1 ||  columns == 1.6 ){ 
                  var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '1', /* 767 : */ '1', /* 575 : */ '1', /* 0 : */ '1' ];
                } else if( columns === 2 ||  columns == 2.1  ||  columns == 2.5){ 
                  var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                } else if( columns === 3 ||  columns == 3.5 ){
                  var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                } else if( columns === 4||  columns == 4.5 ){
                  var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '4', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                } else if( columns === 5 ){
                  var responsive_items = [ /* 1199 : */ '5', /* 991 : */ '4', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                } else if( columns === 6 ){
                  var responsive_items = [ /* 1199 : */ '6', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
                } else {
                  var responsive_items = [ /* 1199 : */ '3', /* 991 : */ '3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
                }

                if (val_dots === true) {
                  carouselElement.append('<div class="swiper-pagination swiper-pagination"></div>');
                }

                if(val_nav === true){
                   
                  if(!nav_arrow){
                    carouselElement.append( '<div class="swiper-buttons"></div>' );
                    carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
                    carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
                  } else{             
                    $('.' + nav_arrow).append( '<div class="swiper-buttons"></div>' );
                    $('.' + nav_arrow).append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
                    $('.' + nav_arrow).append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
                  }
                }

                var pagination_val = false;
                if (val_dots === true) {
                    pagination_val = {
                        el: '.swiper-pagination',
                        clickable: true,
                    };
                }
                var navigation_val = false;
                if(val_nav === true){
                  navigation_val =  {
                    nextEl: '.swiper-button-next-' + x,
                    prevEl: '.swiper-button-prev-' + x,
                  };
                }

                if(!style){
                  style = "slide";
                }    
                
                var margin_val = 30;
                if( $(carouselElement).data('margin') !== '' || $(carouselElement).data('margin') === '0'){
                  margin_val = $(carouselElement).data('margin');  
                } 
              
                if(carouselElement.hasClass('marquee')){ 
                  var reverse_direction = $(this).data('reverse');
                  if (!reverse_direction) reverse_direction = false;
                   var swiper2 = new Swiper( '.pbmit-element-viewtype-carousel-' + x, { 
                     spaceBetween: 0,
                     centeredSlides: true,
                     speed: 5000,
                     autoplay: {
                         delay: 1,
                         disableOnInteraction: true,
                         reverseDirection: reverse_direction,
                     },
                     loop: true,
                     slidesPerView: 'auto',
                     allowTouchMove: false,
                     disableOnInteraction: true
                 });
               } else{                   
              var swiper = new Swiper( '.pbmit-element-viewtype-carousel-' + x, { 
                  loop: loop, 
                  navigation: navigation_val,
                  pagination: pagination_val,
                  slidesPerView: columns,
                  spaceBetween: margin_val,
                  loopedSlides: loopSlide, 
				  autoplay : autoplay2,
                  effect: style,
                  speed: sl_speed, 
                  grabCursor: false,
                  centeredSlides: val_center,
                  breakpoints		  : {
                    1199 : {
                      slidesPerView	: responsive_items[0],
                    },
                    991	 : {					
                      slidesPerView	: responsive_items[1],
                    },
                    767	 : {
                      slidesPerView	: responsive_items[2],
                    },
                    575	 : {
                      slidesPerView	: responsive_items[3],
                    },
                    0	 : {
                      slidesPerView	: responsive_items[4],
                    }
                  }
              });
            }
              x = x + 1;             
          });

     /*-------------------------------------
    Scroll To Top
    -------------------------------------*/
    $('body').append('<a href="#" class="scroll-to-top"><i class="pbmit-base-icon-angle-up"></i></a>');    
    var btn = $('.scroll-to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /*-------------------------------------
    Header Search Form
    -------------------------------------*/
    $( ".pbmit-header-search-btn a" ).on('click', function() {     
      $(".pbmit-search-overlay").addClass('st-show');
      $("body").addClass('st-prevent-scroll');            
      return false;
    });   
    $( ".pbmit-icon-close" ).on('click', function() {
          $(".pbmit-search-overlay").removeClass('st-show');
        $("body").removeClass('st-prevent-scroll');            
        return false;
    }); 
    $('.pbmit-site-searchform').on('click', function(event){
      event.stopPropagation();
    }); 

    /*-------------------------------------
      Mobile Menu
    -------------------------------------*/     
     $('.navbar-toggler,.closepanel').on('click', function () { 
      $("header").toggleClass("active");
    }); 

    /*-------------------------------------
    Magnific Popup
    -------------------------------------*/
    var i_type = 'image';
    $('.pbmin-lightbox-video, .pbmin-lightbox-video a, a.pbmit-lightbox ,a.dsvy-lightbox-video').each(function(){
        if( $(this).hasClass('pbmin-lightbox-video')){ 
          i_type = 'iframe';
        } else {
          i_type = 'image';
        }  
        $(this).magnificPopup({type:i_type});
    });   

    /*-------------------------------------
     Accordion
    -------------------------------------*/

    $('.accordion .accordion-item').on('click', function () { 
      var e = $(this);  
      $(this).parent().find('.accordion-item').removeClass('active');        
      if(!$(this).find('.accordion-button').hasClass('collapsed')){
        $(this).addClass('active');
      }  
    }); 
  
    /*-------------------------------------
      Add plus icon in menu
      -------------------------------------*/
    $( ".main-menu ul.navigation li.dropdown").append( "<span class='righticon'><i class='pbmit-base-icon-angle-down'></i></span>" );
    
    /*-------------------------------------
    Responsive Menu
    -------------------------------------*/ 
    $('.main-menu ul.navigation li.dropdown .righticon').on('click', function() {
           $(this).siblings().toggleClass('open');
           $(this).find('i').toggleClass('pbmit-base-icon-angle-down pbmit-base-icon-angle-up');
           return false;
    });  

    /*-------------------------------------
    Sticky Header
    -------------------------------------*/ 
    $(window).scroll(function(){
        var sticky = $('.site-header-menu'),
        scroll = $(window).scrollTop();
        if (scroll >= 90) sticky.addClass('sticky-header');
        else sticky.removeClass('sticky-header');
    });

    /*-------------------------------------
    Sortable Div
    -------------------------------------*/

    jQuery('.pbmit-sortable-yes').each(function(){ 
      var boxes = jQuery('.pbmit-element-posts-wrapper', this ); 
      var links = jQuery('.pbmit-sortable-list a', this ); 
      boxes.isotope({ animationEngine : 'best-available'}); 
      links.on('click', function(e){  
        var selector = jQuery(this).data('sortby'); 
        if( selector != '*' ){ 
          var selector = '.' + selector; 
        } 
        boxes.isotope({ filter : selector, itemSelector : '.pbmit-ele', layoutMode : 'fitRows' }); 
        links.removeClass('pbmit-selected');
        jQuery(this).addClass('pbmit-selected');
        e.preventDefault(); 
      });
    }); 
	
	 /*-------------------------------------
    Stretched Div
    -------------------------------------*/ 	
	var document_width = $(document).width();
	function pbmit_col_stretched(){
		$('.pbmit-col-stretched-yes').each(function() {
			var this_ele = $(this);
			var window_width = jQuery(window).width();
			var main_width = $('.container').width();
			var extra_width = ((window_width - main_width) / 2);  
			if (window_width < 1200){
				extra_width = 0;
			}
			if (this_ele.hasClass('pbmit-col-right')) { 
				$('.pbmit-col-stretched-right', this_ele).css('margin-right', '-' + extra_width + 'px'); 
			} else { 
				$('.pbmit-col-stretched-left', this_ele).css('margin-left', '-' + extra_width + 'px'); 
			}
		});
	}
	$(window).resize(function(){
		pbmit_col_stretched();
	});
	pbmit_col_stretched();

    /*-------------------------------------
    Circle Progressbar
    -------------------------------------*/
    $('.pbmit-circle-outer').each(function() {
      var this_circle = $(this);


      // Circle settings
      var emptyFill_val = "rgba(0, 0, 0, 0)";
      var thickness_val = 10;
      var fill_val = this_circle.data('fill');
      var size_val = 115;

      if (typeof this_circle.data('emptyfill') !== 'undefined' && this_circle.data('emptyfill') !== '') {
          emptyFill_val = this_circle.data('emptyfill');
      }
      if (typeof this_circle.data('thickness') !== 'undefined' && this_circle.data('thickness') !== '') {
          thickness_val = this_circle.data('thickness');
      }
      if (typeof this_circle.data('size') !== 'undefined' && this_circle.data('size') !== '') {
          size_val = this_circle.data('size');
      }
      if (typeof this_circle.data('filltype') !== 'undefined' && this_circle.data('filltype') === 'gradient') {
          fill_val = { gradient: [this_circle.data('gradient1'), this_circle.data('gradient2')], gradientAngle: Math.PI / 4 };
      }

      if (typeof $.fn.circleProgress === "function") {
          var digit = this_circle.data('digit');
          var before = this_circle.data('before');
          var after = this_circle.data('after');
          var digit = Number(digit);
          var short_digit = (digit / 100);

          $('.pbmit-circle', this_circle).circleProgress({
              value: 0,
              size: size_val,
              startAngle: -Math.PI / 4 * 2,
              thickness: thickness_val,
              emptyFill: emptyFill_val,
              fill: fill_val
          }).on('circle-animation-progress', function(event, progress, stepValue) { // Rotate number when animating
              this_circle.find('.pbmit-circle-number').html(before + Math.round(stepValue * 100) + after);
          });
      }
      
      this_circle.waypoint(function(direction) {
          if (!this_circle.hasClass('completed')) {
              // Redraw when view
              if (typeof $.fn.circleProgress === "function") {
                  $('.pbmit-circle', this_circle).circleProgress({ value: short_digit });
              };
              this_circle.addClass('completed');
          }
      }, { offset: '115%' });

  });

})($);

   /*-------------------------------------
    Contact form validator
    -------------------------------------*/
	if ( $.isFunction($.fn.validate) ) {
		$("#contact-form").validate();
	}
  
	/*-------------------------------------
	 Send email via Ajax
	 Make sure you configure send.php file 
	 -------------------------------------*/
	$("#contact-form").submit(function(){
 
	if( $("#contact-form .doing-via-ajax").length == 0 ){
		$("#contact-form").prepend('<input class="doing-via-ajax" type="hidden" name="doing-via-ajax" value="yes" />');;
	}

	if( $("#contact-form").valid() ){  // check if form is valid

		$(".contact-form .message-status").html('');
		$('.form-btn-loader').removeClass('d-none');
		$('.contact-form button.pbmit-btn span').hide();
		$('.contact-form button.pbmit-btn').attr("disabled", "disabled");

		$.ajax( {
			type: "POST",
			url: "send.php",
			data:$('#contact-form').serialize(),
			success: function(cevap) {
				$('.form-btn-loader').addClass('d-none');
				$('.contact-form button.pbmit-btn span').show();
				$(".contact-form button.pbmit-btn").removeAttr("disabled");
				$(".contact-form .message-status").html(cevap);
			}
		});
		
	}
 
	return false;
 
    });

    /*-------------------------------------
	 Aos
    -------------------------------------*/
    AOS.init();

    /*-------------------------------------
	 Slider
    -------------------------------------*/
	var swiper = new Swiper(".Swiperslider_two", {
		spaceBetween: 0,
		direction: 'vertical',
		slidesPerView: 3,
		freeMode: true 
	});
	var swiper2 = new Swiper(".Swiperslidertwo", {
		effect: "fade",
		spaceBetween: 10,
		thumbs: {
		swiper: swiper,
		},
	});

