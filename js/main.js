 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
	  verticalOffset: 0
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-volunteer').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


})(jQuery);


document.addEventListener("DOMContentLoaded", () => {
	const items = document.querySelectorAll(".menu-overlay__main ul li");
	const bgImgs = document.querySelectorAll(".menu-overlay__bg-img img");
	const menuOverlay = document.querySelector(".menu-overlay");
	const pageContent = document.querySelector(".page-content");
	const toggleButton = document.querySelector("#menu-toggle");

	// 	====menu overlay background animation====

	// Show first image by default
	gsap.set(bgImgs[0], { opacity: 1 });

	items.forEach((item, index) => {
		item.addEventListener("mouseenter", () => {
			// Fade out all images
			gsap.to(bgImgs, {
				opacity: 0,
				duration: 0.5,
				ease: "power2.inOut"
			});

			// Fade in corresponding image
			gsap.to(bgImgs[index + 1], {
				opacity: 1,
				scale: 1.18,
				duration: 0.5,
				ease: "power3.inOut"
			});
		});

		item.addEventListener("mouseleave", () => {
			// Reset to default (first image)
			gsap.to(bgImgs, {
				opacity: 0,
				duration: 0.5,
				ease: "power2.inOut",
				scale: 1
			});
			gsap.to(bgImgs[0], {
				opacity: 1,
				duration: 0.5,
				ease: "power3.inOut"
			});
		});
	});

	// 	====menu overlay oepning/closing animation====
	let menuTimeline = gsap.timeline({ paused: true });

	// === OPEN ANIMATION ===
	menuTimeline
		// Animate menu overlay clip-path open
		.to(
			menuOverlay,
			{
				clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 100%)",
				duration: 0.8,
				ease: "power3.inOut",
				onStart: () => {
					menuOverlay.style.pointerEvents = "none";
				},
				onComplete: () => {
					menuOverlay.style.clipPath = "none";
					menuOverlay.style.pointerEvents = "auto";
				}
			},
			0
		)

		// Animate page content
		.to(
			pageContent,
			{
				yPercent: 20,
				rotation: 18,
				scale: 1.3,
				transformOrigin: "left top",
				duration: 0.8,
				ease: "power3.inOut"
			},
			0
		)
		// 	Animate background zoom
		.to(
			".menu-overlay__bg-img img",
			{
				scale: 1.1,
				duration: 1,
				ease: "power3.inOut"
			},
			0
		)
		// Animate menu links in
		.add(() => {
			const linkTexts = document.querySelectorAll("[data-text-anim]");

			linkTexts.forEach((el) => {
				gsap.set(el, { visibility: "visible" });

				const split = SplitText.create(el, {
					type: "chars",
					smartWrap: true,
					mask: "chars"
				});

				menuTimeline.fromTo(
					split.chars,
					{ yPercent: -200 },
					{ yPercent: 0, ease: "power2.inOut", duration: 0.5, stagger: 0.01 },
					0.2
				);
			});
		}, 0)
		// Animate toggle button
		.to(
			".toggle-line-top",
			{
				transformOrigin: "center",
				y: 4,
				scaleX: 0.8,
				rotation: 45,
				duration: 0.4,
				ease: "back.out(1.5)"
			},
			0.2
		)
		.to(
			".toggle-line-bottom",
			{
				transformOrigin: "center",
				y: -4,
				scaleX: 0.8,
				rotation: -45,
				duration: 0.4,
				ease: "back.out(1.5)"
			},
			0.2
		);

	// === CLOSE ANIMATION (just reverse the timeline) ===

	toggleButton.addEventListener("click", () => {
		if (menuTimeline.progress() === 1) {
			// Menu is open, close it
			menuTimeline.reverse();
			menuTimeline.eventCallback("onReverseComplete", () => {
				menuOverlay.style.pointerEvents = "none";
			});
		} else {
			// Menu is closed, open it
			menuTimeline.play();
		}
	});
});





    gsap.registerPlugin(ScrollTrigger, Draggable);

let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

// set initial state of items
gsap.set('.cards li', {xPercent: 400, opacity: 0, scale: 0});

const spacing = 0.1, // spacing of the cards (stagger)
	snapTime = gsap.utils.snap(spacing), // we'll use this to snapTime the playhead on the seamlessLoop
	cards = gsap.utils.toArray('.cards li'),
	// this function will get called for each element in the buildSeamlessLoop() function, and we just need to return an animation that'll get inserted into a master timeline, spaced
	animateFunc = element => {
		const tl = gsap.timeline();
		tl.fromTo(element, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false})
		  .fromTo(element, {xPercent: 400}, {xPercent: -400, duration: 1, ease: "none", immediateRender: false}, 0);
		return tl;
	},
	seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc),
	playhead = {offset: 0}, // a proxy object we use to simulate the playhead position, but it can go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline.
	wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()), // feed in any offset (time) and it'll return the corresponding wrapped time (a safe value between 0 and the seamlessLoop's duration)
	scrub = gsap.to(playhead, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
		offset: 0,
		onUpdate() {
			seamlessLoop.time(wrapTime(playhead.offset)); // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
		},
		duration: 0.5,
		ease: "power3",
		paused: true
	}),
	// converts a progress value (0-1, but could go outside those bounds when wrapping) into a "safe" scroll value that's at least 1 away from the start or end because we reserve those for sensing when the user scrolls ALL the way up or down, to wrap.
	progressToScroll = progress => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end),
	wrap = (iterationDelta, scrollTo) => {
		iteration += iterationDelta;
		trigger.scroll(scrollTo);
		trigger.update(); // by default, when we trigger.scroll(), it waits 1 tick to update().
	};

// when the user stops scrolling, snap to the closest item.
ScrollTrigger.addEventListener("scrollEnd", () => scrollToOffset(scrub.vars.offset));

// feed in an offset (like a time on the seamlessLoop timeline, but it can exceed 0 and duration() in either direction; it'll wrap) and it'll set the scroll position accordingly. That'll call the onUpdate() on the trigger if there's a change.
// --- FIXED BUTTON CODE (no ScrollTrigger needed) ---
function scrollToOffset(offset) {
  const snappedTime = snapTime(offset);
  gsap.to(scrub.vars, {
    offset: snappedTime,
    duration: 0.4,
    ease: "power2.out",
    onUpdate: () => scrub.invalidate().restart()
  });
}

document.querySelector(".next").addEventListener("click", () => {
  scrollToOffset(scrub.vars.offset + spacing);
});

document.querySelector(".prev").addEventListener("click", () => {
  scrollToOffset(scrub.vars.offset - spacing);
});


// --- FIXED DRAG (works with scrub + scrollToOffset) ---
Draggable.create(".drag-proxy", {
  type: "x",
  trigger: ".cards",
  onPress() {
    // record where the playhead was when the drag started
    this.startOffset = scrub.vars.offset || 0;
    // record the starting pointer x so we can compute delta
    this.startX = this.x || 0;
  },
  onDrag() {
    // convert pixel drag to timeline offset delta (tweak factor if you want faster/slower swipe)
    scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001;
    // update the scrub tween so seamlessLoop.time(...) is called
    scrub.invalidate().restart();
  },
  onDragEnd() {
    // snap to the nearest item (uses your existing scrollToOffset)
    scrollToOffset(scrub.vars.offset);
    // reset the drag-proxy position visually so next drag starts fresh
    gsap.set(this.target, { x: 0 });
  }
});


	
function buildSeamlessLoop(items, spacing, animateFunc) {
	let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
		startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
		loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime
		rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
		seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
			paused: true,
			repeat: -1, // to accommodate infinite scrolling/looping
			onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
				this._time === this._dur && (this._tTime += this._dur - 0.01);
			}
		}),
		l = items.length + overlap * 2,
		time, i, index;

	// now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
	for (i = 0; i < l; i++) {
		index = i % items.length;
		time = i * spacing;
		rawSequence.add(animateFunc(items[index]), time);
		i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
	}

	// here's where we set up the scrubbing of the playhead to make it appear seamless.
	rawSequence.time(startTime);
	seamlessLoop.to(rawSequence, {
		time: loopTime,
		duration: loopTime - startTime,
		ease: "none"
	}).fromTo(rawSequence, {time: overlap * spacing + 1}, {
		time: startTime,
		duration: startTime - (overlap * spacing + 1),
		immediateRender: false,
		ease: "none"
	});
	return seamlessLoop;
}