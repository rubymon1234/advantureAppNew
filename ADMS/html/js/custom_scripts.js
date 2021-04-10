	
$(document).ready(function(){
	if($(window).width()>=800){
		var headerHeight = $('.home-slider figure').height()-$('.main-header').height();
		$(window).on('scroll',function(){
			if($(this).scrollTop() > headerHeight){
				$('.main-header').addClass('sticky');
			}else{
				$('.main-header').removeClass('sticky');
			}
		});
	}

	$('.home-slider').slick({
		fade: true,
		autoplay: true,
		arrows: false,
		dots: false,
		infinite: true,
		focusOnSelect: false,
		easing:'easeOutExpo',
		speed: 800,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		swipe: false
	  });

	  $('.package-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		focusOnSelect: false,
		autoplay: true,
		speed: 500,
		dots: true,
		responsive: [
			{
			  breakpoint: 640,
			  settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 1
			  }
			}
		  ]
	  });

	  $('.testimonial-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		easing:'easeOutExpo',
		adaptiveHeight: true,
		focusOnSelect: false,
		speed: 800
	  });


	$('.home-slider').on('beforeChange', function(){
		$('h1').css({'bottom':'-50px','opacity':'0'});
	});
	$('.home-slider').on('afterChange', function(){
		$('h1').css({'bottom':'0px','opacity':'1'});
	});

	var scrollPose;
	$('body').on('click','.video-handle span',function(){
		var topOffset = $('.video-modal-wapper').offset().top;
		$('body').css('overflow','hidden');
		$('.overlay').fadeIn(150,function(){
			$('.video-modal-wapper').fadeIn(150,function(){
				$('body,html').animate({scrollTop:topOffset},800,function(){
					$('video').css('top',topOffset);
					$('video').get(0).play();					
				});
			});
		});
		scrollPose = $(window).scrollTop();
	});

	$('body').on('click','.btn-close',function(){		
		$('body').css('overflow','visible');
		$('.video-modal-wapper').fadeOut(150,function(){
			$('.overlay').fadeOut(150);	
			$('video').get(0).pause();			
		});
		$('html,body').stop().animate({scrollTop: scrollPose},800);
	})

	$(".mob-nav").click(function() {
		$('.main-header').toggleClass('bgWhite')
		$(".stick").toggleClass(function () {
		return $(this).is('.open, .close') ? 'open close' : 'open';
		});

		$('.main-nav').fadeToggle(100);
	});


});


