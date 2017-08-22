$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('.menu ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.menu ul').removeAttr('style');
		 }
	});//end resize
});//end ready