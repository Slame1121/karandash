var Media = {
	initHeaderNav: function () {
		$('.header_container').on('click','.header_container-item-mobile-nav__button button', function(){
			var container = $('.header_container-item-mobile-nav__container');
			container.show();
			setTimeout(function(){
				container.addClass('open');
			}, 50)
		}).on('click','.header_container-item-mobile-nav__container-close', function(){
			var self = $(this);
			$(this).parent().removeClass('open');
			setTimeout(function(){
				self.parent().hide();
			}, 400)
		});
	},
	init: function(){
		this.initHeaderNav();
	}
};

$(document).ready(function(){
	Media.init();
});