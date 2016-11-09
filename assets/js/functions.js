(function($){

// 	var $grid = $('.grid').imagesLoaded(function(){
// 		$grid.masonry({
//   columnWidth: '.grid-sizer',
//   itemSelector: '.grid-item',
// 	percentPosition: true
// });
// });

	function loopGallery(test, index, item){
		if(test){
			var box = $('<a href style="background-image: url('+item.source+'") class="thumb-link grid-item">');
			var pola = $('<div class="thumb-meta"></div>');
			var view = $('<div class="thumb-title">'+item.name+'</div>');
			// var mask = $('<div class="thumb-meta"><div class="thumb-title"'+item.name+'<a href="img/ara_bleu.jpg" class="info fancybox" rel="group" title="'+item.id+'" ></a></div></div>');

			$('.grid').prepend(box);
			box.append(pola);
			pola.append(view);
			// view.prepend('<img src="'+item.source+'">');
			// view.append(mask);
		}
	}

	// $.getJSON('assets/json/photos.json', function(data){
	// 	$.each(data, function(index, item){
	// 		loopGallery(index <= 2, index, item);
	// 	});
	// });

	$('.portfolio__link--show').on('click', function(event){
		event.preventDefault();
		var galleryLength = $('.pola').length;

		$.ajax('assets/json/photos.json', {
			success: function(data){
				$.each(data, function(index, item){
					loopGallery(item.id >= galleryLength && item.id < galleryLength + 4, index, item);
				});
			},
			beforeSend: function(){
				$('.portfolio__link--show').hide();
				$('.spinner').fadeIn();
			},
			complete: function(){
				$('.spinner').hide();
				$('.portfolio__link--show').fadeIn();
			}
		});
	});


})(jQuery);
