$(function() {

	// Get the form.
	var form = $('.contact__form--wrap');

	// Get the messages div.
	var formMessages = $('.contact__message');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			if ($(window).width() <= 960) {
			// Make sure that the formMessages div has the 'success' class.
			$('.contact__form--submit').hide();
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response).css("display", "block");
			$(formMessages).text(response).fadeOut(3250);
			setTimeout(function(){
			$('.contact__form--submit').show();
		}, 3250);
			// $(formMessages).css('display', 'block');
		}
		else
		{
			// $('.contact__form--submit').hide();
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response).css("display", "block");
			$(formMessages).text(response).fadeOut(3250);

		}
			// Clear the form.
			$('.contact__form--name').val('');
			$('.contact__form--mail').val('');
			$('.contact__form--text').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Ups! Coś poszło nie tak. Spróbuj raz jeszcze.');
			}
		});

	});

});
