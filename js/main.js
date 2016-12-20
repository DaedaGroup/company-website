
$(function() {

	// Cache selectors
	var contactForm = $('#contactForm'),
			sectionForm = $('.section-form'),
			sectionFormConfirm = $('.section-confirm'),
			anchorScrollEle = $('a.page-scroll'),
			firstName = $('#FirstName'),
			lastName = $('#LastName'),
			emailAddr = $('#EmailAddress'),
			inquiry = $('#Inquiry'),
			message = $('#Message');

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

	$(contactForm).submit(function (e) {
		e.preventDefault();

		var formData = {
				'First Name': 	$(firstName).val(),
				'Last Name': 	$(lastName).val(),
				'Email Address': 	$(emailAddr).val(),
				'Inquiry': $(inquiry).val(),
				'Message': $(message).val()
		};

		$.ajax({
		    url: 'https://formspree.io/info@daeda.io',
		    method: 'POST',
		    data: formData,
		    dataType: 'json'
		})
		.done(function(data) {

			$(sectionForm).hide('400', function(){
				$(sectionFormConfirm).show();
			});
			$(contactForm)[0].reset();

		});

	});

});
