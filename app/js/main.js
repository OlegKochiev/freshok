$(function () {
	$('.main-slider__list').slick({
		prevArrow: `<button class="main-slider__arrow main-slider__arrow--prev" type="button" aria-label="Стрелка вперед"></button>`,
		nextArrow: `<button class="main-slider__arrow main-slider__arrow--next" type="button" aria-label="Стрелка назад"></button>`,
		fade: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
				dots: true
			}
		}]
	})
	$('.brands__list').slick({
		infinite: true,
		slidesToShow: 6,
		variableWidth: true
	})



	$('.header-catalog').on('click', function () {
		$('.header-catalog').toggleClass('header-catalog--active');
	})

	$('.header__icon--cart').on('click', function () {
		$('.bag').toggleClass('bag--active');
	})

	$('.bag__close').on('click', () => {
		$('.bag').removeClass('bag--active');
	})

	$('.product-card__favourite').on('click', function () {
		$(this).toggleClass('product-card__favourite--active');
	})

	var containerEl1 = document.querySelector('[data-ref="top-products__container"]');
	var containerEl2 = document.querySelector('[data-ref="promotions__container"]');

	var config = {
		controls: {
			scope: 'local'
		}
	};

	var mixer1 = mixitup(containerEl1, config);
	var mixer2 = mixitup(containerEl2, config);


	$(document).on("click", function (event) {
		if (!$(event.target).closest('.header-catalog').length) {
			$('.header-catalog').removeClass('header-catalog--active');
		}
	});

});