


$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
$('.first-block .header').addClass("glide");
$('.header-buttons .signin ').addClass("remove-border ");

// $('.logo').css("logo-scroll img svg: { fill: #000;}");

$('.menu').addClass("menu-col");
}
else{
$('.first-block .header').removeClass("glide");
$('.header-buttons .signin ').removeClass("remove-border");
// $('.logo').removeClass("logo-scroll img svg");
$('.menu').removeClass("menu-col");

}
});
