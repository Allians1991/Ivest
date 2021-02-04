document.addEventListener("DOMContentLoaded", function () {

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
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		// console.log(elemenOffset);

		$("html, body").animate({
			scrollTop: elementOffset
		});
	});


	/*Ajax*/
	// $('form').submit(function (event) {
	// 	event.preventDefault();
	// 	$.ajax({
	// 		type: "POST",                     /*Метод отправки*/
	// 		url: "../send.php",          /*Путь к обработчику*/
	// 		data: $(this).serialize()
	// 	}).done(function () {
	// 		$(this).find("input").val("");    /*Очистка формы*/
	// 		// $('#form').fadeOut();      /*Закрытие формы"*/
	// 		$('.thanks__popup').fadeIn();    /*Модальное окно спасибо*/
	// 		$(".form_wrap").trigger("reset");
	// 	});
	// 	return false;
	// });


	$(".close__btn").click(function (e) {
		e.preventDefault();
		$('.thanks__popup').fadeOut();
	});

	$(".close").click(function (e) {
		e.preventDefault();
		$('.thanks').fadeOut();
	});

	$(window).on("scroll", function () {
		var scrolled = $(this).scrollTop();
		if (scrolled > 1000) {
			$('.header').addClass('scroll');
		}
		if (scrolled <= 1000) {
			$('.header').removeClass('scroll');
		}
	});


	/*Burger*/
	$(".nav_btn").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("nav_btn__active");
		$(".nav").toggleClass("active");
	});

	$(".nav, .nav__link").click(function (e) {
		e.preventDefault();
		$('.nav').removeClass("active");
		$(".nav_btn").removeClass("nav_btn__active");
	});
	$(window).on("scroll", function () {
		$('.nav').removeClass("active");
		$(".nav_btn").removeClass("nav_btn__active");
	});

	// End_____________________________________

	/*Accordion*/
	$('.panel__title').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('in').next().slideToggle(200);
		$('.panel__title').not(this).removeClass('in').next().slideUp(200);
	});
	/*END*/

	/*Politic*/
	$(".politic__link").click(function (e) {
		e.preventDefault();
		$('#politic').fadeIn();
		$('body').css({ 'overflow-y': 'hidden' });
	});
	$(".close").click(function (e) {
		e.preventDefault();
		$('#politic').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	$(".close2").click(function (e) {
		e.preventDefault();
		$('#politic').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	$(".personal__link").click(function (e) {
		e.preventDefault();
		$('#personal').fadeIn();
		$('body').css({ 'overflow-y': 'hidden' });
		$('#personal').css({ 'overflow-y': 'scroll' });
	});
	$(".close").click(function (e) {
		e.preventDefault();
		$('#personal').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	$(".close2").click(function (e) {
		e.preventDefault();
		$('#personal').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	// -----------------------------

	// More 
	$("#callMore1").click(function (e) {
		e.preventDefault();
		$('#more1').fadeIn();
		$('body').css({ 'overflow-y': 'hidden' });
	});
	$(".close").click(function (e) {
		e.preventDefault();
		$('#more1').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	$(".close2").click(function (e) {
		e.preventDefault();
		$('#more1').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	$("#callMore2").click(function (e) {
		e.preventDefault();
		$('#more2').fadeIn();
		$('body').css({ 'overflow-y': 'hidden' });
	});
	$(".close").click(function (e) {
		e.preventDefault();
		$('#more2').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	$(".close2").click(function (e) {
		e.preventDefault();
		$('#more2').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	$("#callMore3").click(function (e) {
		e.preventDefault();
		$('#more3').fadeIn();
		$('body').css({ 'overflow-y': 'hidden' });
	});
	$(".close").click(function (e) {
		e.preventDefault();
		$('#more3').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	$(".close2").click(function (e) {
		e.preventDefault();
		$('#more3').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});


	$("#callForm").click(function (e) {
		e.preventDefault();
		$('#popup_form').fadeIn();
		$('body').css({ 'overflow-y': 'hidden' });
	});
	$(".close").click(function (e) {
		e.preventDefault();
		$('#popup_form').fadeOut();
		$('body').css({ 'overflow-y': 'scroll' });
	});
	

	// Валидация формы
	const form = document.getElementById('form__send');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
		let formData = new FormData(form);
		if (error === 0) {
			// Отправляем форму
			let response = await fetch('send.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				$('.thanks__popup').fadeIn();    /*Модальное окно спасибо*/
				form.reset();
			}
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_name')) {
				if (nameTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.classList.contains('_phone')) {
				if (phoneTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	// Функция проверки Email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	// Проверка телефона
	function phoneTest(input) {
		return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(input.value);
	}

	// Проверка Имени
	function nameTest(input) {
		return !/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(input.value);
	}


	// Select 
	const selectSingle = document.querySelector('.select');
	const selectSingle_title = selectSingle.querySelector('.select__title');
	const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

	// Toggle menu
	selectSingle_title.addEventListener('click', () => {
		if ('active' === selectSingle.getAttribute('data-state')) {
			selectSingle.setAttribute('data-state', '');
		} else {
			selectSingle.setAttribute('data-state', 'active');
		}
	});

	// Close when click to option
	for (let i = 0; i < selectSingle_labels.length; i++) {
		selectSingle_labels[i].addEventListener('click', (evt) => {
			selectSingle_title.textContent = evt.target.textContent;
			selectSingle.setAttribute('data-state', '');
		});
	}
});



// AutoPrint
var CharTimeout = 100; // скорость печатания
var StoryTimeout = 1500; // время ожидания перед переключением

var Summaries = new Array();

Summaries[0] = 'Индивидуальное обучение трейдингу';
Summaries[1] = 'от Артема Ивина';
Summaries[2] = 'Индивидуальное обучение трейдингу';
Summaries[3] = 'от Артема Ивина';

function startTicker() {
	massiveItemCount = Number(Summaries.length); //количество элементов массива
	// Определяем значения запуска
	CurrentStory = -1;
	CurrentLength = 0;
	// Расположение объекта
	AnchorObject = document.getElementById("Ticker");
	runTheTicker();
}
// Основной цикл тиккера
function runTheTicker() {
	var myTimeout;
	// Переход к следующему элементу
	if (CurrentLength == 0) {
		CurrentStory++;
		CurrentStory = CurrentStory % massiveItemCount;
		StorySummary = Summaries[CurrentStory].replace(/"/g, '-');
	}
	// Располагаем текущий текст в анкор с печатанием
	AnchorObject.innerHTML = StorySummary.substring(0, CurrentLength) + znak();
	// Преобразуем длину для подстроки и определяем таймер
	if (CurrentLength != StorySummary.length) {
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
function znak() {
	if (CurrentLength == StorySummary.length) return "";
	else return "|";
}

startTicker();

/*----------------------------------*/
