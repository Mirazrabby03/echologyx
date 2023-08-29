import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
	if (timer <= 0) return;
	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}
let echoVariation = {
	init: function() {
		this.mainCss();
		this.mainJs();
	},
	mainCss: function() {
		var styles = document.createElement('style');
		styles.setAttribute('type', 'text/css');
		document.head.appendChild(styles).textContent =
			'' +
			/* CSS will be imported here */

			'';
	},
	initCarousel: function() {
		var abSwiper = new Swiper('.ab-goes-well .swiper-container', {
			direction: 'horizontal',
			slidesPerView: '5',
			keyboard: true,
			spaceBetween: 15,
			nextButton: document.querySelector('.ab-goes-well .t2s-swiper-button-next'),
			prevButton: document.querySelector('.ab-goes-well .t2s-swiper-button-prev'),
			breakpoints: {
				767: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 10
				}
			}
		});
	},
	renderSection: function() {
		waitForElem('#goes-well', carasol => {
			if (carasol.length > 0) {
				waitForElem('.modal-content-container .total-section', finalButton => {
					if (finalButton.length > 0) {
						let goesWellContentClone = carasol[0].cloneNode(true);
						goesWellContentClone.classList.add('ab-goes-well');
						console.log('Miraz', goesWellContentClone);
						finalButton[0].insertAdjacentElement('afterend', goesWellContentClone);
						document.querySelector('.ab-goes-well .title.pull-left').textContent = 'Completeaza-ti comanda cu aceste produse';
						echoVariation.initCarousel();
					}
				});
			}
		});
	},

	observeElement: function() {
		const body = document.querySelector('body');
		const config = { attributes: false, childList: true, subtree: true };
		const callback = function(mutationsList, observer) {
			if (
				document.querySelector('.modal-content .add-to-cart-modal-container') &&
				!document.querySelector('.modal-content .add-to-cart-modal-container').classList.contains('ab-cart-open')
			) {
				document.querySelector('.modal-content .add-to-cart-modal-container').classList.add('ab-cart-open');
				console.log('modal');
				echoVariation.renderSection();
			}
		};
		const observer = new MutationObserver(callback);
		observer.observe(body, config);
	},
	mainJs: function() {
		echoVariation.observeElement();
	}
};
waitForElem(
	'body, meta[content="product"]',
	elements => {
		if (elements) {
			console.log(`SMP #5 Upsell in cart - SW`);
			echoVariation.init();
		}
	},
	2
);
