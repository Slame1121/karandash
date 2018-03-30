var Main = {


	initCatalogDropDown: function () {

		var fixed_navbar = $('.fixed_navbar');
		fixed_navbar.find('.categories_block_container-item:not(.active)').hide();
		//navbar
		$('.fixed_navbar_container-item__catalog-dropdown__catalog-navbar').on('mouseover', 'ul li', function(){
			$(this).parent().find('a').css('font-weight', '');
			$(this).find('a').css('font-weight','bold');
		}).on('mouseout','ul li', function(){
			$(this).parent().find('a').css('font-weight', '');
		}).on('click','ul li a', function(e){
			e.stopPropagation();
			e.preventDefault();

			$(this).closest('ul').find('li').removeClass('active');
			$(this).closest('li').addClass('active');
			fixed_navbar.find('.categories_block_container-item').hide().removeClass('active');
			var self = $(this);
			var category_id = self.data('category-id');
			fixed_navbar.find('.categories_block_container-item[data-subcategory='+category_id+']').show().addClass('active');

		});

		$('.categories_block_container-item__content-seemore').on('click', function(){

			$(this).closest('.categories_block_container-item').before($(this).closest('.categories_block_container-item').clone().addClass('clone'))
			$(this).closest('.categories_block_container-item').addClass('opened');
		})

		$('.categories_block_container').on('mouseleave', '.categories_block_container-item.opened', function(e){
			$('.categories_block_container').find('.clone').remove();
			$('.categories_block_container').find('.opened').removeClass('opened');
		})
	},
	init: function(){
		this.initProductsList();

		this.initCatalogDropDown();
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