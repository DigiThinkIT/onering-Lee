$(document).ready(function () {
	$('.item li').hover(
		function () {
			$(this).find('.favorite img').attr("src", "images/star-light.png");
			$(this).find('.option img:eq(0)').attr("src", "images/share-light.png");
			$(this).find('.option img:eq(1)').attr("src", "images/password-light.png");
			
		},
		function () {
			$(this).find('.favorite img').attr("src", "images/star-dark.png");
			$(this).find('.option img:eq(0)').attr("src", "images/share-dark.png");
			$(this).find('.option img:eq(1)').attr("src", "images/password-dark.png");
			
		});
});