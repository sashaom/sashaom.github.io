$(window).scroll(function(){
	var st = $(this).scrollTop();
	$(".intro").css ({
		"transform" : "translate(0%, -" + st/11+ "%"
	})
});