$(document).ready(function() {
	$('#fullpage').fullpage({
		loopHorizontal:true
	});

	$('.info').on('click', function(){
		$('.modal').addClass('active');
	});

	$('.close').on('click', function(){
		$('.modal').removeClass('active');
	});
});