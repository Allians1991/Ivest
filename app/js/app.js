document.addEventListener("DOMContentLoaded", function() {

	// Slider
	$('.slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		infinite: true,
		variableWidth: true,
		dots: true
	 });

	// Scroll
	$("[data-scroll]").on("click" , function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		// console.log(elemenOffset);

		$("html, body").animate({
			scrollTop: elementOffset
		});
	});

	
	/*Ajax*/
	$('form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: "POST",                     /*Метод отправки*/
			url: "../send.php",          /*Путь к обработчику*/
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");    /*Очистка формы*/
			// $('#form').fadeOut();      /*Закрытие формы"*/
			$('.thanks__popup').fadeIn();    /*Модальное окно спасибо*/
			$(".form_wrap").trigger("reset");
		});
		return false;
	});

	$(".close").click(function(e) {
		e.preventDefault();
		$('.thanks').fadeOut();
	});

});
