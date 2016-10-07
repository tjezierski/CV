$(function(){
	// Insert loader before Ajax call
	$(".portfolio__link--show").on('click', function(e){
		event.preventDefault();
		// $(".portfolio__link--content").html("<img class='portfolio__link--loader' alt='loading...' src='/assets/img/loader.gif' width='50' height='50' align='center' />");
		$.get("assets/json/photos.json", addContent);
	});

	var addContent = function (data){
		for (i=0; i < data.length; i++){
			var imageInfo = data[i];
			var img = $('<img/>').attr("src", "assets/img/"+imageInfo.image);
			// var div = $('<div></div>').append(img);
			$('.grid').append(img);

		};



	};

});
