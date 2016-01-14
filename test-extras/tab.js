$(document).ready(function(){

//ul id name is navigation 
$('ul#navigation li').click(function(){
	var number = $(this).index(); 
	$('.sec').hide().eq(number).show(); 
	$(this).toggleClass('active inactive'); 
	$('ul#navigation li').not(this).removeClass('active').addClass('inactive');
});

$('.sec').not(':first').hide(); //selects all the section class and adds hides them 
});
