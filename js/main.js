
$(function(){

	// Cache selectors
	var contactForm = $('#contactForm'),
			anchorScrollEle = $('a.page-scroll');

	// Initialize form validation
	$(contactForm).parsley();

	// jQuery for page scrolling feature - requires jQuery Easing plugin
  $(anchorScrollEle).bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

});
