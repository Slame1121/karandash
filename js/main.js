var Main = {


	initCatalogDropDown: function () {

		var fixed_navbar = $('.fixed_navbar');
		//fixed_navbar.find('.categories_block_container-item:not(.active)').hide();
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

		$('.categories_block_container-item__wrapper-content-seemore').on('click', function(){
			$(this).closest('.categories_block_container-item__wrapper').addClass('opened');
		})
		$('.categories_block_container').on('mouseleave', '.categories_block_container-item__wrapper.opened', function(e){
			//
			var all = $('.categories_block_container-item__wrapper.opened');
			all.css('position','absolute');
			all.removeClass('opened');

				//$('.categories_block_container').find('.opened').find('.categories_block_container-item__wrapper-content ul').css('height','150px');
				setTimeout(function(){
					all.css('position','');
				},800);
			//
		})
	},
	initReviews: function () {
		var swiper = new Swiper('.swiper-container', {
			spaceBetween: 120,
			slidesPerView: 2,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
			},
			history: {
				key: 'slide',
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
		});
	},
	initBlog: function () {
		var sliders_sizes = {
			maxWidth: 665,
			maxHeight: 460
		},distance = 100;

		if($(window).width() <= 768){
			sliders_sizes = {
				maxWidth: 300,
				maxHeight: 270
			};
			distance = 5;
		}else{
			if($(window).width() <= 998){
				sliders_sizes = {
					maxWidth: 480,
					maxHeight: 410
				};
				distance = 15;
			}
		}

		$('#blog_slider').carousel({
			num: 3,
			maxWidth: sliders_sizes['maxWidth'],
			maxHeight: sliders_sizes['maxHeight'],
			distance: distance,
			scale: 0.6,
			autoPlay: true,
			animationTime: 500,
			showTime: 4000
		});
	},
	init: function(){
		this.initProductsList();

		this.initCatalogDropDown();

		this.initReviews();

		this.initBlog();
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