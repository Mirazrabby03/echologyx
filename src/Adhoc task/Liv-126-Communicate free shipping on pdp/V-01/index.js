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

	//Mutation Observer

	ObserverElemt: function() {
		const targetNode = document.querySelector('.ProductMeta__PriceList');
		const config = { attributes: false, childList: true, subtree: false };
		const callback = function(mutationsList, observer) {
			echoVariation.mainJs();
			console.log('Miraz', 'mutation');
		};
		const observer = new MutationObserver(callback);
		observer.observe(targetNode, config);
	},

	mainJs: function() {
		if (Shopify.currency.active == 'EUR') {
			document.querySelector('.Product__Wrapper').classList.add('Variation-01');
			let ProductMeta__TaxNotice = document.querySelector('.ProductMeta .ProductMeta__TaxNotice.Rte');
			if (ProductMeta__TaxNotice) {
				ProductMeta__TaxNotice.innerHTML = ProductMeta__TaxNotice.innerHTML
					.replace('zzgl.', 'zzgl')
					.replace('zggl.', 'zggl')
					.replace('Pfand,', '')
					.replace('&', '')
					.replace('amp', '')
					.replace(';', ',');

				// ProductMeta__TaxNotice.innerHTML = ProductMeta__TaxNotice.innerHTML.replace('zzgl.', '');
				let ProductMeta__TaxNoticeText = ProductMeta__TaxNotice.querySelector('a');
				if (ProductMeta__TaxNoticeText) {
					ProductMeta__TaxNoticeText.insertAdjacentHTML('afterend', 'Pfand ');
					ProductMeta__TaxNoticeText.remove();
				}
				// let ProductMeta__TaxNoticeText2 = document.querySelector('.ProductMeta .UnitPriceMeasurement__Price');
				// if (ProductMeta__TaxNoticeText2) {
				// 	ProductMeta__TaxNoticeText2.innerHTML = ProductMeta__TaxNoticeText2.innerHTML.replace(',', ' ');
				// }
			}

			if (document.querySelector('.free_shipping-banner')) {
				document.querySelector('.free_shipping-banner').remove();
			}

			const priceContainer = document.querySelector('.ProductMeta .flex-align-baseline');
			let injectElement = null;
			let ProductMeta__Rating = document.querySelector('.ProductMeta .ProdutMeta__Title-Wrapper .ProductMeta__Rating');

			if (
				ProductMeta__Rating &&
				ProductMeta__Rating.parentElement &&
				ProductMeta__Rating.parentElement.nextElementSibling &&
				ProductMeta__Rating.parentElement.nextElementSibling.classList.length === 0
			) {
				injectElement = ProductMeta__Rating.parentElement.nextElementSibling;
			} else {
				injectElement = document.querySelector('.ProductMeta .flex-align-baseline ~ div');
			}

			if (priceContainer === null || injectElement === null) return;
			let price = priceContainer.textContent
				.trim()
				.replace('€', '')
				.replace('ab', '');
			let FloatPrice = parseFloat(price);

			let condition = {
				lessThan100: {
					text: 'Kostenloser Versand in DE ab 100€',
					emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 16 17" fill="none">
                <path d="M13.3753 7.25933L11.6069 4.42617C11.4109 4.11225 11.067 3.92168 10.6969 3.92168H1.07263C0.480179 3.92168 0 4.40186 0 4.9943V11.0225C0 11.6149 0.480179 12.0951 1.07263 12.0951H1.35401C1.62503 12.6736 2.20889 13.0783 2.88894 13.0783C3.56898 13.0783 4.15249 12.6736 4.42351 12.0951H11.5768C11.8479 12.6736 12.4317 13.0783 13.1118 13.0783C13.7911 13.0783 14.3753 12.6736 14.646 12.0951H14.9274C15.5195 12.0951 16 11.6149 16 11.0225V10.13C16 8.62943 14.8437 7.39055 13.3753 7.25933ZM2.89144 12.0826C2.50387 12.0826 2.18959 11.7683 2.18959 11.3807C2.18959 10.9931 2.50387 10.6785 2.89144 10.6785C3.27902 10.6785 3.5933 10.9931 3.5933 11.3807C3.5933 11.7683 3.27902 12.0826 2.89144 12.0826ZM9.31111 8.00874V6.06693V4.99466H10.6969L12.579 8.00874H9.31111ZM13.1114 12.0826C12.7238 12.0826 12.4096 11.7683 12.4096 11.3807C12.4096 10.9931 12.7238 10.6785 13.1114 10.6785C13.499 10.6785 13.8133 10.9931 13.8133 11.3807C13.8133 11.7683 13.499 12.0826 13.1114 12.0826Z" fill="#006750"/>
                </svg>`
				},
				lessThan120: {
					text: 'Kostenloser Versand in DE',
					emoji: `<img src='https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/Livefresh/Liv-126/check.png' alt='check' width='16' height='11'>`
				},
				moreThan120: {
					text: 'Kostenloser Versand in DE und AT',
					emoji: `<img src='https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/Livefresh/Liv-126/check.png' alt='check' width='16' height='11'>`
				}
			};
			const key = FloatPrice <= 100 ? 'lessThan100' : FloatPrice <= 120 ? 'lessThan120' : 'moreThan120';
			const data = condition[key];
			console.log(data);

			const banner = document.createElement('div');
			banner.classList.add('free_shipping-banner');
			banner.innerHTML = `
            <div class="free_shipping-banner__emoji">
            ${data.emoji}
            </div>
            <div class="free_shipping-banner__text">
            ${data.text}
            </div>`;
			injectElement.insertAdjacentElement('afterend', banner);
			echoVariation.ObserverElemt();
		}
	}
};

setTimeout(() => {
	waitForElem('.Product__Wrapper', elements => {
		if (elements) {
			console.log(`Communicate free shipping on pdp - V-01`);
			echoVariation.init();
		}
	});
}, 1500);

// function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
// 	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
// 	if (timer <= 0) return;
// 	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
// 		? callback(elements)
// 		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
// }
// let echoVariation = {
// 	init: function() {
// 		this.mainCss();
// 		this.mainJs();
// 	},
// 	mainCss: function() {
// 		var styles = document.createElement('style');
// 		styles.setAttribute('type', 'text/css');
// 		document.head.appendChild(styles).textContent =
// 			'' +
// 			/* CSS will be imported here */

// 			'';
// 	},

// 	//Mutation Observer

// 	ObserverElemt: function() {
// 		const targetNode = document.querySelector('.ProductMeta__PriceList');
// 		const config = { attributes: false, childList: true, subtree: false };
// 		const callback = function(mutationsList, observer) {
// 			echoVariation.mainJs();
// 			console.log('Miraz', 'mutation');
// 		};
// 		const observer = new MutationObserver(callback);
// 		observer.observe(targetNode, config);
// 	},

// 	mainJs: function() {
// 		document.querySelector('.Product__Wrapper').classList.add('Variation-01');
// 		let ProductMeta__TaxNotice = document.querySelector('.ProductMeta .ProductMeta__TaxNotice.Rte');
// 		if (ProductMeta__TaxNotice) {
// 			ProductMeta__TaxNotice.innerHTML = ProductMeta__TaxNotice.innerHTML
// 				.replace('zzgl.', '')
// 				.replace('zggl.', '')
// 				.replace('Pfand,', '')
// 				.replace('&', '')
// 				.replace('amp', '')
// 				.replace(';', '');

// 			ProductMeta__TaxNotice.innerHTML = ProductMeta__TaxNotice.innerHTML.replace('zzgl.', '');
// 			let ProductMeta__TaxNoticeText = ProductMeta__TaxNotice.querySelector('a');
// 			if (ProductMeta__TaxNoticeText) {
// 				ProductMeta__TaxNoticeText.insertAdjacentHTML('afterend', 'Pfand ');
// 				ProductMeta__TaxNoticeText.remove();
// 			}
// 			let ProductMeta__TaxNoticeText2 = document.querySelector('.ProductMeta .UnitPriceMeasurement__Price');
// 			if (ProductMeta__TaxNoticeText2) {
// 				ProductMeta__TaxNoticeText2.innerHTML = ProductMeta__TaxNoticeText2.innerHTML.replace(',', ' ');
// 			}
// 		}

// 		if (document.querySelector('.free_shipping-banner')) {
// 			document.querySelector('.free_shipping-banner').remove();
// 		}

// 		const priceContainer = document.querySelector('.ProductMeta .flex-align-baseline');
// 		let injectElement = null;
// 		let ProductMeta__Rating = document.querySelector('.ProductMeta .ProdutMeta__Title-Wrapper .ProductMeta__Rating');

// 		if (
// 			ProductMeta__Rating &&
// 			ProductMeta__Rating.parentElement &&
// 			ProductMeta__Rating.parentElement.nextElementSibling &&
// 			ProductMeta__Rating.parentElement.nextElementSibling.classList.length === 0
// 		) {
// 			injectElement = ProductMeta__Rating.parentElement.nextElementSibling;
// 		} else {
// 			injectElement = document.querySelector('.ProductMeta .flex-align-baseline ~ div');
// 		}

// 		if (priceContainer === null || injectElement === null) return;
// 		let price = priceContainer.textContent
// 			.trim()
// 			.replace('€', '')
// 			.replace('ab', '');
// 		let FloatPrice = parseFloat(price);

// 		let condition = {
// 			lessThan100: {
// 				text: 'Kostenloser Versand in DE ab 100€',
// 				emoji: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 16 17" fill="none">
//                 <path d="M13.3753 7.25933L11.6069 4.42617C11.4109 4.11225 11.067 3.92168 10.6969 3.92168H1.07263C0.480179 3.92168 0 4.40186 0 4.9943V11.0225C0 11.6149 0.480179 12.0951 1.07263 12.0951H1.35401C1.62503 12.6736 2.20889 13.0783 2.88894 13.0783C3.56898 13.0783 4.15249 12.6736 4.42351 12.0951H11.5768C11.8479 12.6736 12.4317 13.0783 13.1118 13.0783C13.7911 13.0783 14.3753 12.6736 14.646 12.0951H14.9274C15.5195 12.0951 16 11.6149 16 11.0225V10.13C16 8.62943 14.8437 7.39055 13.3753 7.25933ZM2.89144 12.0826C2.50387 12.0826 2.18959 11.7683 2.18959 11.3807C2.18959 10.9931 2.50387 10.6785 2.89144 10.6785C3.27902 10.6785 3.5933 10.9931 3.5933 11.3807C3.5933 11.7683 3.27902 12.0826 2.89144 12.0826ZM9.31111 8.00874V6.06693V4.99466H10.6969L12.579 8.00874H9.31111ZM13.1114 12.0826C12.7238 12.0826 12.4096 11.7683 12.4096 11.3807C12.4096 10.9931 12.7238 10.6785 13.1114 10.6785C13.499 10.6785 13.8133 10.9931 13.8133 11.3807C13.8133 11.7683 13.499 12.0826 13.1114 12.0826Z" fill="#006750"/>
//                 </svg>`
// 			},
// 			lessThan120: {
// 				text: 'Kostenloser Versand in DE',
// 				emoji: `<img src='https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/Livefresh/Liv-126/check.png' alt='check' width='16' height='11'>`
// 			},
// 			moreThan120: {
// 				text: 'Kostenloser Versand in DE und AT',
// 				emoji: `<img src='https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Drip/Livefresh/Liv-126/check.png' alt='check' width='16' height='11'>`
// 			}
// 		};
// 		const key = FloatPrice <= 100 ? 'lessThan100' : FloatPrice <= 120 ? 'lessThan120' : 'moreThan120';
// 		const data = condition[key];
// 		console.log(data);

// 		const banner = document.createElement('div');
// 		banner.classList.add('free_shipping-banner');
// 		banner.innerHTML = `
//             <div class="free_shipping-banner__emoji">
//             ${data.emoji}
//             </div>
//             <div class="free_shipping-banner__text">
//             ${data.text}
//             </div>`;
// 		injectElement.insertAdjacentElement('afterend', banner);
// 		echoVariation.ObserverElemt();
// 	}
// };

// setTimeout(() => {
// 	waitForElem('.Product__Wrapper', elements => {
// 		if (elements) {
// 			console.log(`Communicate free shipping on pdp - V-01`);
// 			echoVariation.init();
// 		}
// 	});
// }, 1500);
