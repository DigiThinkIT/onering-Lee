$(document).ready(function () {
	$('.item li').hover(
		function () {
			$(this).find('.favorite img').attr('src', 'images/star-light.png');
			$(this).find('.option img:eq(0)').attr('src', 'images/share-light.png');
			$(this).find('.option img:eq(1)').attr('src', 'images/password-light.png');
			
		},
		function () {
			$(this).find('.favorite img').attr('src', 'images/star-dark.png');
			$(this).find('.option img:eq(0)').attr('src', 'images/share-dark.png');
			$(this).find('.option img:eq(1)').attr('src', 'images/password-dark.png');
			
		});
	$('.folders > li > a').click(function(){
		$(this).parents('li').find('.item').slideToggle();
		$(this).parents('li').find('img.expand').toggleClass('collapse');
	});
	$('.main-menu #show-sidebar').click(function(){
		$(this).parents('.main-menu').find('.sidebar').toggle();
		$(this).parents('.main-menu').toggleClass('md-resize');
		$('.main-content').toggleClass('md-resize');
	});
});