var Home = {
	init: function(){
		this.initMainBanner();
	},

	initMainBanner: function () {
		var owl = $('.main_banner_container-list');
		owl.on('changed.owl.carousel', function(e) {
			//Main.setOwlPagination(e);
		}).on('initialized.owl.carousel',function(e){
			//Main.InitOwlPagination(e);
		});
		owl.owlCarousel({
			margin: 0,
			nav: false,
			dots:false,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	}

};
$(document).ready(function(){
	Home.init();
});