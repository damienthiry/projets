$(function(){
	setInterval(function(){
	   $(".slideshow ul").animate({marginLeft:-350},800,function(){
		  $("slideshow ul").css({marginLeft:0}).find("li:last").after($("slideshow ul").find("li:first"));
	   })
	}, 2000);
 });