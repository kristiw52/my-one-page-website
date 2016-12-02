// JavaScript Document
// Set up the nav scrolling effect
$("nav").onePageNav();

var menu = $("nav ul");

// Toggle the menu when clicked
$("#menu-icon").click(function() {
	menu.slideToggle();
});

// Fix bug where menu disappears if you open and close it on a small screen
// When I resize the window
$(window).resize(function() {
	var width = $(window).width();

	// if window width is > 768 and the menu is hidden
	if(width > 768 && menu.is(":hidden")) {
		menu.removeAttr("style");
	}

});

// Add parallax (stellar.js)
// $.stellar(); 

// Add wow.js animations
//new WOW().init();



/*  This is the fixed navigation bar scrolling */
$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 900 &&  
      $(".nav-wrapper").css("position") != "fixed"){
      $(".nav-wrapper").hide(function(){
        $(".nav-wrapper").css("position", "fixed")
        $(".nav-wrapper").slideDown('1000')
      })
    }else if($(window).scrollTop() <= 900 ){
      $(".nav-wrapper").css("position", "initial")
    }
  })
})

/*  Displays the menu when the menu icon is clicked  - jQuery (jquery.nav.js) should be included */
$(document).ready(function(){
  $(".menu-icon").click(function(){
    $("nav ul").slideToggle();
  })
})

