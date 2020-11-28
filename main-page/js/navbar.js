
      $(document).ready(function(){
      $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll < 100) {
      $(".navbar-items-place-left").css("background" , "transparent");
      $(".navbar-items-place-left").mouseover(function(){
        $(".navbar-items-place-left").css("background-color","rgb(19, 17, 17)");
    });
    }

	  else{ 
      $(".navbar-items-place-left").css("background" , "rgb(19, 17, 17)"); 	
   
	  }
  })
})

window.onscroll = function() {sticky()};
    
var navbar = document.getElementById("sticky-nav");
var stickybar = navbar.offsetTop;

function sticky() {
  if (window.pageYOffset >= stickybar) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}