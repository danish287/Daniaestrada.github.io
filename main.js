//
//
///*DOES WORK*/
//$(document).ready(function(){
//    $(window).scroll(function(){
//
//        $('#container').each( function(i){
//           /* $(this).css("opacity", 1 - $(window).scrollTop() / 300)*/
//            $( this ).fadeTo( "slow", 0.1, "swing" );
//            /*$(selector).fadeTo(speed,opacity,easing,callback)*/
//
//
//
//            /*        if($(this).scrollTop() > 0){
//           $(this).css({"opacity" : "0"})
//        }
//            else{
//                $(this).css({"opacity" : "1"})
//            }*/
//        }                           )
//    })});


$(function() {
    /*the document and all elementts that we want to fadeout*/
    var documentEl = $(document),
        fadeElem = $('.fade-out');
    var temp = $('.temp').offset().top;

    /*once we scroll webpage lets make changes on elements in webpage*/
    documentEl.on('scroll', function() {
        /*get position of how far we have scrolled from the top in pixels*/
        var currScrollPos = documentEl.scrollTop() + temp;
        /*iterate thorugh each  fade-in scroll element  on page*/
        fadeElem.each(function() {
            /* $this is the element we sare currenttly iterating through*/
            /*retireve and save every position on a variable so that 
             elements start to fadeout when  they reach the top of the page*/
            
            var $this = $(this),
                elemOffsetTop = $this.offset().top;
            /*we ahve to check if fadescroll element has reached top of page*/
            if ((currScrollPos+temp)  > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);
/*          also works but doesnt put elements back
            if (currScrollPos  > elemOffsetTop) $this.css('opacity', 1 - $(window).scrollTop() / 300);*/
        }); 
    });
    
});



/*$(document).ready(function(){
  $(".intro-p").scroll(function(){
    $("span").text( x+= 1);
  });
});*/