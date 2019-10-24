$(document).ready(function(){
	var typed = new Typed(".typed", {
			strings: ["Recent Graduate from King's College London.", "UX/UI Enthusiast."],
			typeSpeed: 90,
			loop: true,
			startDelay: 200,
			showCursor: false

		});
});

$("#contact").submit(function(e)) {
	e.preventDefault();

	var $form = $(this);
		$.post($form.attr("action"), $form.serialize()).then(function()
		{
			alert("Thank you!");
		});
};	