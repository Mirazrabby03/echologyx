import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */ function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
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
	getproductRating: function(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(response => response.text())
				.then(html => {
					const parser = new DOMParser();
					const doc = parser.parseFromString(html, 'text/html');
					const element = doc.querySelector('.product-form [data-oke-star-rating]');
					resolve(element);
				})
				.catch(error => {
					reject(error);
				});
		});
	},
	mainJs: function() {
		document.querySelectorAll('.featured-collections product-list product-item').forEach(e => {
			let url = e.querySelector('.product-item__image-wrapper a').getAttribute('href');
			echoVariation.getproductRating(url).then(element => {
				if (element == null) return;
				e.querySelector('.product-item-meta__price-list-container').insertAdjacentElement('beforebegin', element);
			});
		});
	}
};
waitForElem('.featured-collections', elements => {
	if (elements) {
		console.log(`A360 #9 Reviews in Featured Collection - HP---V01`);
		echoVariation.init();
	}
});
