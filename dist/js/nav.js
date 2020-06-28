$(document).ready(function(){
	$('.burger').click(function(){
		$('.burger').toggleClass('burger-toggled')
		$('nav').toggleClass('nav-toggled')
		$('ul').toggleClass('ul-toggled')
	})
})