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
			var box = $('<a href='+item.link+' target="_blank" style="background-image: url(http://tjezierski.pl/cv/assets/img/'+item.source+')" class="thumb-link grid-item">');
			var pola = $('<div class="thumb-meta"></div>');
			var view = $('<div class="thumb-title">'+item.name+'</div>');
			var subtitle = $('<aside>'+item.description+'</aside>');

			$('.grid').append(box);
			box.append(pola);
			pola.append(view);
			view.append(subtitle);
			// view.append(link);
			// view.prepend('<img src="'+item.source+'">');

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
				$('.portfolio__link--show').hide();

				// $('.portfolio__link--show').attr("disabled", false);
			}
		});
		$('.behance__message').fadeIn(1500);
	});


})(jQuery);
