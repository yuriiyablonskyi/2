$(window).scroll(function() {
	if($(this).scrollTop() > 40){
	$('.up').fadeIn(500);
} else {
	$('.up').fadeOut(100);
}
});
$('.up').click(function() {
	$('html, body').animate({scrollTop : 0}, 400)
})
$('.category__item').click(function() {
	$(this).addClass("active").siblings().removeClass("active")
	let name = $(this).attr('id');

	if(name == 'all'){
		$('.portfolio__item').show();
	} else {
		$('.portfolio__item').not('.'+name).hide();
		$('.portfolio__item').filter('.'+name).show();
	}
});

$( ".header__btn" ).click(function() {
	$('.nav').toggle();
	$(this).toggleClass('active-btn');
});


if(window.matchMedia('(max-width: 768px)').matches){
     $('.nav').hide();
  } else {
  	$('.nav').show();
  }

$(window).resize(function(){
	let width = $(this).width();
	let height = $(this).height();
	if(width < 767) {
     $('.nav').hide();
     	$('.header__btn').removeClass('active-btn');
  } else {
  	$('.nav').show();
  		$('.header__btn').removeClass('active-btn');
  }
});


