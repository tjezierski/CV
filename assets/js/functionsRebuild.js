(function($){

	var $menu = $('.hamb__icon--underlay'),
			$fill = $('.hamb__menu--overlay'),
			$hamburger = $('.hamb__icon');

	function mobileMenuClick(e){
		var $this = $(this);

		$this.toggleClass('is-open');
		$fill.toggleClass('is-open');
		$menu.toggleClass('is-open');
	}

	// function mobileMenuClose(e){
	// 	var $this = $(this);
	//
	// 	$this.removeClass('is-open');
	// 	$fill.removeClass('is-open');
	// 	$hamburger.removeClass('is-open');
	// }

	function mobileMenuClose(e){
		if (!$(event.target).closest('.hamb__icon').length) {

			$menu.removeClass('is-open');
			$fill.removeClass('is-open');
			$hamburger.removeClass('is-open');
			}


	}

	function bindings(){
		$('.hamb__icon').on('click', mobileMenuClick);
		$(document).on('click', mobileMenuClose );
		// $('.hamb__icon--underlay').on('click', mobileMenuClose );

	}

	$(document).ready(function(){
		$body = $('html, body');
		$window = $(window);
		bindings();


	});

})(jQuery);


	// function mediaQuery(){
	// 	// var $this = $(this)
	//
	// 	enquire.register("screen and (min-width: 960px)", {
	// 		match: function headerFadeIn() {
	//
	// 			$(window).scroll(function() {
	// 				if ($(this).scrollTop() > 150){
	// 						$('.desktop__menu--fadein').fadeIn(500);
	// 						$('.desktop__menu--fadein').css('display','flex');
	// 					} else {
	// 						$('.desktop__menu--fadein').fadeOut(500);
	// 					}
	// 		});
	// 	},
	// 		unmatch: function headerFadeIn() {
	// 			$('.desktop__menu--fadein').css({'display':'none'});
	// 		}
	// 	});
	// }
