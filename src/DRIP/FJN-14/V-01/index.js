import './styles/index.scss';

/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

	if (timer <= 0) return;

	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}
function initSwiper(){
	const slideshowWrappers = document.querySelectorAll('.slideshow-wrapper');
	// const slideshowWrappers = document.querySelectorAll('#CollectionAjaxContent .slideshow-wrapper');
	
	slideshowWrappers.forEach(function(element, i) {
		 if(element.classList.contains('ab--swiper-added')) return;
		element.classList.add('swiper','mySwiper', 'ab--swiper-added');
		element.setAttribute('id', 'ab--slideshow-wrapper-' + i);
		const sliderWrapper = document.createElement('div');
		sliderWrapper.classList.add('swiper-wrapper');

		element.querySelectorAll('.product-slide').forEach(function(slide) {
			slide.classList.add('swiper-slide');
			sliderWrapper.insertAdjacentElement('beforeend', slide);
		});

		element.appendChild(sliderWrapper);

		let nevigations = `
			<div class="ab-swiper-button-next"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.969836 0.226914C0.829233 0.36756 0.750246 0.558291 0.750246 0.757164C0.750246 0.956037 0.829233 1.14677 0.969836 1.28741L4.68234 4.99991L0.969835 8.71241C0.833217 8.85386 0.757621 9.04332 0.75933 9.23997C0.761039 9.43661 0.839915 9.62472 0.978972 9.76378C1.11803 9.90283 1.30614 9.98171 1.50278 9.98342C1.69943 9.98513 1.88888 9.90953 2.03033 9.77291L6.27309 5.53016C6.41369 5.38952 6.49268 5.19879 6.49268 4.99991C6.49268 4.80104 6.41369 4.61031 6.27309 4.46966L2.03034 0.226914C1.88969 0.0863106 1.69896 0.00732401 1.50009 0.007324C1.30121 0.00732399 1.11048 0.0863105 0.969836 0.226914Z" fill="black"/></svg></div>
			<div class="ab-swiper-button-prev"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M6.03016 9.77309C6.17077 9.63244 6.24975 9.44171 6.24975 9.24284C6.24975 9.04396 6.17077 8.85323 6.03016 8.71259L2.31766 5.00009L6.03016 1.28759C6.16678 1.14614 6.24238 0.956682 6.24067 0.760034C6.23896 0.563387 6.16008 0.375278 6.02103 0.236222C5.88197 0.0971658 5.69386 0.0182893 5.49721 0.0165804C5.30057 0.0148714 5.11112 0.0904682 4.96966 0.227087L0.726914 4.46984C0.58631 4.61048 0.507324 4.80121 0.507324 5.00009C0.507324 5.19896 0.58631 5.38969 0.726914 5.53034L4.96966 9.77309C5.11031 9.91369 5.30104 9.99268 5.49991 9.99268C5.69879 9.99268 5.88952 9.91369 6.03016 9.77309Z" fill="black"/></svg></div>
			<div class="swiper-pagination"></div>
		`
		element.insertAdjacentHTML('beforeend', nevigations);
			
		const swiper = new Swiper("#ab--slideshow-wrapper-" + i, {
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".ab-swiper-button-next",
				prevEl: ".ab-swiper-button-prev",
			},
		});
			
		
	});
}

function animateSlider(){
	// const targetElement = document.querySelector('#CollectionGrid');
	const targetElement = document.querySelector('#ab--slideshow-wrapper-0');
	let animationShownOnPageLoad = false;
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting && !animationShownOnPageLoad) {
			console.log('animateSlider');
			const element = document.querySelector('#ab--slideshow-wrapper-0 .swiper-wrapper');
			const transformStyle = element.style.transform;
			const match = transformStyle.match(/translate3d\(([^,]+),/);
			// if (match) {
			// 	let translateXValue = match[1];
			// 	translateXValue = Number(translateXValue.replace('px', ''));
			// 	element.style.setProperty('--translateXStartValue', translateXValue + 'px');
			// 	element.style.setProperty('--translateXEndValue', (translateXValue + -180  ) + 'px');
			// 	element.classList.add('swiper-animation-left-right-left');
			// } 

			if (match) {
				let translateXValue = match[1];
				translateXValue = Number(translateXValue.replace('px', ''));
				let viewport = Math.floor(window.innerWidth / Math.abs(translateXValue));
				
				element.style.setProperty('--translateXStartValue', translateXValue + 'px');
				element.style.setProperty('--translateXEndValue', (2 * translateXValue + 20/viewport ) + 'px');
				element.classList.add('swiper-animation-left-right-left');
			} 
			animationShownOnPageLoad = true; 
		}
	  });
	},
	{threshold: 0.9}
	);
	
	observer.observe(targetElement);	
}

// function animateSlider() {
// 	const targetElement = document.querySelector('#CollectionGrid');
// 	let animationShownOnPageLoad = false;
// 	const observer = new IntersectionObserver(entries => {
// 	  entries.forEach(entry => {
// 		if (entry.isIntersecting && !animationShownOnPageLoad) {
// 			console.log('animateSlider');
// 		  const element = document.querySelector('#ab--slideshow-wrapper-0 .swiper-wrapper');
// 		  const transformStyle = element.style.transform;
// 		  const match = transformStyle.match(/translate3d\(([^,]+),/);
// 		  if (match) {
// 			let translateXValue = match[1];
// 			translateXValue = Number(translateXValue.replace('px', ''));
// 			element.style.setProperty('--translateXStartValue', translateXValue + 'px');
// 			element.style.setProperty('--translateXEndValue', (translateXValue + -180) + 'px');
// 			element.classList.add('swiper-animation-left-right-left');
// 		  }
// 		  animationShownOnPageLoad = true;
// 		}
// 	  });
// 	}, {
// 	  threshold: 0.5 
// 	});
  
// 	observer.observe(targetElement);
//   }
  

function initSlider(){
	if (window.Flickity) {
		Flickity = undefined;
	}
	
	if(!window.Swiper){
		var swiperCSS = document.createElement('link');
		swiperCSS.setAttribute('rel', 'stylesheet');
		swiperCSS.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.css');
		document.querySelector('head').appendChild(swiperCSS);
		var script = document.createElement('script');
		script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js';
		document.head.appendChild(script);
		script.onload = function() {
			initSwiper();
		};		
	}else{
		initSwiper();
	}

	
}

function mainJs(body) {
	initSlider();
	setTimeout(() => {
	animateSlider();
	}, 1000);
	console.log(`FJN-14.......... V-01`);
}

function filterItemDetect() {
	const target = document.querySelector('#CollectionAjaxContent')
	const config = { attributes: false, childList: true, subtree: false };
	const callback = function(mutationsList, observer) {
		
		if(document.querySelector('#CollectionAjaxContent div[id*="ab--slideshow-wrapper"]') === null){
			console.log('-----------------------');
			initSlider();
		}
	};

	const observer = new MutationObserver(callback);
	observer.observe(target, config);
}

waitForElem('#CollectionGrid',
setTimeout(() => {
	waitForElem('Flickity', ()=>{
		mainJs();
		filterItemDetect();
	}, 1, true);
}, 1000));

