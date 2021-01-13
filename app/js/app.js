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

	$(window).on("scroll", function () {
		var scrolled = $(this).scrollTop();
		if( scrolled > 1000 ) {
			$('.header').addClass('scroll');
		}   
		if( scrolled <= 1000 ) {     
			$('.header').removeClass('scroll');
		}
	});


	/*Burger*/
	$(".nav_btn").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("nav_btn__active");
		$(".nav").toggleClass("active");
	});

	$(".nav, .nav__link").click(function(e) {
		e.preventDefault();
		$('.nav').removeClass("active");
		$(".nav_btn").removeClass("nav_btn__active");
	});
	$(window).on("scroll", function () {
		$('.nav').removeClass("active");
		$(".nav_btn").removeClass("nav_btn__active");
	});

	// End_____________________________________

	
});

var CharTimeout = 100; // скорость печатания
var StoryTimeout = 1500; // время ожидания перед переключением

var Summaries = new Array();

Summaries[0] = 'Авторский курс Артема Ивина';
Summaries[1] = 'Авторский курс Артема Ивина';
Summaries[2] = 'Авторский курс Артема Ивина';
Summaries[3] = 'Авторский курс Артема Ивина';

function startTicker(){
	massiveItemCount =  Number(Summaries.length); //количество элементов массива
	// Определяем значения запуска
	CurrentStory     = -1;
	CurrentLength    = 0;
	// Расположение объекта
	AnchorObject     = document.getElementById("Ticker");
	runTheTicker();     
}
// Основной цикл тиккера
function runTheTicker(){
	var myTimeout;  
	// Переход к следующему элементу
	if(CurrentLength == 0){
		CurrentStory++;
		CurrentStory      = CurrentStory % massiveItemCount;
		StorySummary      = Summaries[CurrentStory].replace(/"/g,'-');
	}
	// Располагаем текущий текст в анкор с печатанием
	AnchorObject.innerHTML = StorySummary.substring(0,CurrentLength) + znak();
	// Преобразуем длину для подстроки и определяем таймер
	if(CurrentLength != StorySummary.length){
		CurrentLength++;
		myTimeout = CharTimeout;
	} else {
		CurrentLength = 0;
		myTimeout = StoryTimeout;
	}
	// Повторяем цикл с учетом задержки
	setTimeout("runTheTicker()", myTimeout);
}
// Генератор подстановки знака
function znak(){
	if(CurrentLength == StorySummary.length) return "";
	else return "|";
}

startTicker();

/*----------------------------------*/
