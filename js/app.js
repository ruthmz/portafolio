// La funcionalidad de tu proyecto
$("#wrapper").click( function() {
	$(".menu").toggleClass("close");
});
$(document).on('click', 'a[href^="#"]', function(event){
  event.preventDefault();
  $('html,body').animate({
  scrollTop: $($.attr(this, 'href')).offset().top
  }, 1850);
});