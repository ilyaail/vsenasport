$(function() {
	$('.event__slider').slick({
		dots: false,
	  	focusOnSelect: true,
	  	prevArrow:"<i class='slick-prev prev' aria-hidden='true'></i>",
        nextArrow:"<i class='slick-next next' aria-hidden='true'></i>"
	});



var countHamb = 1;
	$('#hamburger-menu').click(function() {
		if(countHamb == 1) {
			countHamb = 0;
			$('.hamburger').addClass('is-active');
			$('.header__nav').addClass('active');
			$('.head-menu').animate({width:'toggle'},350);
			
			$("body").css("overflow","hidden"); 
			
			console.log('2')

		} else if (countHamb == 0){
			countHamb = 1;
			$('.hamburger').removeClass('is-active');
			$('.head-menu').animate({width:'toggle'},350);
			$('.header__nav').removeClass('active');
			$("body").css("overflow","auto");
			console.log('1')
		}
		
	})


});
