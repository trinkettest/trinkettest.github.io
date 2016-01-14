$(document).ready(function(){

//ul id name is navigation 


$('div#call-to-action-tab ').click(function(){
	var number = $(this).index(); 
	$('.column .three').hide().eq(number).show(); 
	$(this).toggleClass('active inactive'); 
	$('#call-to-action-tab ').not(this).removeClass('active').addClass('inactive');
});

$('.column .three').not(':first').hide(); //selects all the section class and adds hides them 
});