$(document).ready(function () {
	$('.slider__list').slick({
		fade: true
	})

	$('.header__menu')
		.hover(function () {
			$(this).addClass('header__menu--active');
		}, function () {
			$(this).removeClass('header__menu--active');
		})

	$('.header__icon--cart').on('click', function () {
		$('.bag').toggleClass('bag--active');
	})

	$('.bag__close').on('click', () => {
		$('.bag').removeClass('bag--active');
	})

	$('.card__favourite').on('click', function () {
		$(this).toggleClass('card__favourite--active');
	})


});