/*
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});
*/
$(document).ready(function() {
  $('nav-item').removeClass('active');
  $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
});
$('ul li a').click(function(){ $('li a').removeClass("active"); $(this).addClass("active"); });
