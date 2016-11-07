$(function(){

    var $button = $('.portfolio__link--show');
    var $grid = $('.grid');
    var imagesArr = null; // na początku nic tutaj nie mamy

    function addImages(image) {
        $('<a href/>').attr('style', 'background-image: url' + '(assets/img/'+image.image).appendTo($grid);
        $(this).addClass('thumb-link thumb-link-new');
    }

    $button.on('click', function(event) {
        event.preventDefault();

        // sprawdzamy czy zdjęcia były już wcześniej pobrane
        if(imagesArr !== null) {
            // wyświetliliśmy 8 zdjęć pobranych AJAXem, więc tutaj chcemy wyświetlić pozostałe
            $.each(imagesArr.slice(8), function(i, image) { // .slice(8) wytnie pierwszych 8 elementów i zwróci nową tablicę z pozostałymi
                addImages(image);
            });

            return; // zakończy i dzięki temu nie wyśle się ponownie AJAX
        }

        $.ajax({
            url: 'assets/json/photos.json',
						dataType: 'json',
            success: function(images){
                imagesArr = JSON.parse(images); // przypisujemy pobrane zdjęcia

                $.each(images, function(i, image){
                    // chcemy wyświetlić powiedzmy 8, pod zmienną i mamy indeks liczony od zera

                    if(i < 8) {
                        addImages(image);
                    } else {
                        return false; // zakończy działanie metody .each, bo działa jak break przy zwykłej pętli
                    }

                });
            },

            error: function() {
                alert('Something went wrong...');
            }
        });
    });
});
