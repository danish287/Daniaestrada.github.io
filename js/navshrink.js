/*function myFunction() {
  var x = document.getElementById("socials");
  if (x.style.display == "none") {
      setTimeout(function(){
          x.animate({display: "block";});
    },7000);
  } else {
      setTimeout(function(){
      x.style.display = "block";
    },7000);
  }
}*/
/*
function myFunction() {
    var x = document.getElementById("socials");
    $(document).ready(function(){
   $("#socials").fadeIn("slow");
});
}*/
$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a").on('click', function(event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "")
            // Prevent default anchor click behavior
                event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})