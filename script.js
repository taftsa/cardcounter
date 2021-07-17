$(document).on('click', '.card', function(){
	$(this).toggleClass('counted');
});

$(document).on('click', '#reset', function(){
	$('.counted').removeClass('counted');
});