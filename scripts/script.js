// -----------------------------------------------------------Preloader--------------------------------------------

window.onload = function () {
	document.body.classList.add('loaded_hiding');
		window.setTimeout(function () {
			document.body.classList.add('loaded');
			document.body.classList.remove('loaded_hiding');}, 500);
	}	
// -----------------------------------------------------------Header/Burger--------------------------------------------

	$(window).on('scroll', function(){
		if ($(window).scrollTop()>800){
			$('header').addClass('dark');
		}
		else
		{
			$('header').removeClass('dark');
		}
	})
	$(document).ready(function(){
		$('header .burger').click(function (event) {
			$('header .burger, header nav').toggleClass('active');
			$('body').toggleClass('lock');
		})
	})

// -----------------------------------------------------------Upbutton--------------------------------------------
			$(function() {
	  // при нажатии на кнопку upbutton
	  $('#upbutton').click(function() {
		 // переместиться в верхнюю часть страницы
		 $("html, body").animate({
			scrollTop:0
		 },1000);
	  })
	})
	// при прокрутке окна (window)
	$(window).scroll(function() {
	  // если пользователь прокрутил страницу более чем на 200px
	  if ($(this).scrollTop()>700) {
		 // то сделать кнопку upbutton видимой
		 $('#upbutton').fadeIn();
	  }
	  // иначе скрыть кнопку upbutton
	  else {
		 $('#upbutton').fadeOut();
	  }
	});

