$('.section ul').on('scroll', function() {
	var scrollTop = $(this).scrollTop();
	if (scrollTop + $(this).innerHeight() <= this.scrollHeight) {
		console.log('Top reached');
	}
});