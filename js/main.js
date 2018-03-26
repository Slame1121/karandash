var Main = {


	init: function(){
		this.initProductsList();
	},
	initProductsList: function(){
		var owl = $('#product_banner');
		owl.owlCarousel({
			margin: 0,
			nav: true,
			dots:false,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 4
				}
			}
		});

		$('#product_banner .raty').raty({
			starType: 'i',
			readOnly: true,
			score: 3.5,/*function() {
			 return $(this).attr('data-score');
			 }*/
		});
	}


};

$(document).ready(function(){


	Main.init();
});