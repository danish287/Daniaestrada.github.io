/*
var scrollTop = $(this).scrollTop();

$(window).on('scroll', function() {
    $(".parallax").fadeOut();
});*/


/*
$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).removeClass('showme');
            }
            if( bottom_of_window < bottom_of_object ){
                
                $(this).addClass('showme');
            }
        });
    });
});
*/


/*



$(document).ready(function() {
    $(window).scroll( function(){
        $('.hideme').each( function(i){
            
             
    if ( $window.scrollTop() >= distance ) {
$(this).removeClass('showme');
        });
    });
});
*/

$(document).ready(function(){
	$(window).scroll(function(){
        
        $('#container').each( function(i){
		$(this).css("opacity", 1 - $(window).scrollTop() / 300)
            
            
            
/*        if($(this).scrollTop() > 0){
           $(this).css({"opacity" : "0"})
        }
            else{
                $(this).css({"opacity" : "1"})
            }*/
            
            
            
            
        }
	)
})});

        
        
/*
$('.hideme').css({'opacity':( 100-$(window).scrollTop() )/100});*/

//$(document).ready(function( $ ){
//    $(window).scroll(function() {
//        var yPos = ( $(window).scrollTop() );
//
//        if(yPos > 900) { // Show element after this amount of scrolled down pixels 
//
//			$(".hideme").fadeIn();
//		} else {
//			$(".hideme").fadeOut();
//		}
//	});
//});


/*

$(document).ready(function() {
$window.scroll(function() {
    var distance = $('.hideme').offset().top,
    $window = $(window);
    if ( $window.scrollTop() >= distance ) {
$(".hideme").fadeOut();    }
})});
*/
