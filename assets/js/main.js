//------------------------------------------
//loading
//-------------------------------------------
(function () {
  const loadingArea = document.querySelector('#loading');
  const sitewrap = document.querySelector('#sitewrap');

  function loadingAnime() {
    sitewrap.classList.remove('is-hidden');
    loadingArea.style.opacity = 0;
  }

  window.addEventListener('load', loadingAnime);
})();

/*==================================================

** SP menu
==================================================*/

(function() {
	const body = document.querySelector('body');
	const btn = document.querySelector('.js-button-hamburger');

	function toggleClass() {
		body.classList.toggle('is-active-gnav');
	}

	btn.addEventListener('click', toggleClass);
})();


//------------------------------------------
//humburger
//-------------------------------------------
// jQuery(function($){
// 	$(window).load(function() {
// 		var menu = $('#main-nav'), // Fetch menu to fade in
// 			menuBtn = $('.js-button-hamburger'), // Fetch open button
// 			body = $(document.body);

//     menuBtn.on('click', function(){
//       menu.fadeToggle();
//       body.toggleClass('is-active-gnav');
// 		});

// 		$(window).on('load resize', function(){
// 			var wid = window.innerWidth;

// 			if( wid > 1024 ){
// 				if( body.hasClass('is-active-gnav') ) {
// 					body.removeClass('is-active-gnav');
// 				}
// 				menu.hide();
// 			}
// 		});
// 	});
// });

//------------------------------------------
//slider
//-------------------------------------------
$(document).ready(function () {
  $(".fv-slider").slick({
		autoplay:true,
		autoplaySpeed:10000,
		arrows:false,
		fade:true,
		speed:3000,
		infinite:true,
		pauseOnHover:false,
		// cssEase:'ease-in-out',
		// loop:true,
	});
});


//------------------------------------------
//swiper
//-------------------------------------------
// let swipeOption = {
//   loop: true,
//   effect: 'fade',
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   speed: 2000,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   }
// }
// new Swiper('.swiper-container', swipeOption);
