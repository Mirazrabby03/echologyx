// function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 100000, frequency = 25) {
// 	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
// 	if (timer <= 0) return;
// 	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
// 		? callback(elements)
// 		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
// }
// function observeElement() {
// 	const targetNode = document.querySelector('#sidebar-cart');
// 	const config = { attributes: true, childList: false, subtree: false };
// 	const callback = function(mutationsList, observer) {
// 		if (
// 			document.querySelector('#sidebar-cart') &&
// 			document.querySelector('#sidebar-cart').getAttribute('aria-hidden') &&
// 			document.querySelector('#sidebar-cart').getAttribute('aria-hidden') === 'false'
// 		) {
// 			const productIds = ['2226099978351', '6867031621781', '3927478239343'];
// 			let cartItemsPIDs = [];
// 			document.querySelectorAll('.CartItemWrapper').forEach(cartItemWrapper => {
// 				cartItemsPIDs.push(cartItemWrapper.getAttribute('data-product-id'));
// 			});
// 			let matched = cartItemsPIDs.some(r => productIds.indexOf(r) >= 0);
// 			if (matched) {
// 				observer.disconnect();
// 				console.log('matched');
// 				return true;
// 			}
// 		}
// 	};
// 	const observer = new MutationObserver(callback);
// 	observer.observe(targetNode, config);
// }

// waitForElem(
// 	'#sidebar-cart, .CartItemWrapper',
// 	elements => {
// 		if (elements) {
// 			observeElement();
// 		}
// 	},
// 	2
// );

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 100000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
	if (timer <= 0) return;
	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}
function observeElement() {
	const targetNode = document.querySelector('#sidebar-cart');
	const config = { attributes: true, childList: false, subtree: false };
	const callback = function(mutationsList, observer) {
		const productIds = ['2226099978351', '6867031621781', '3927478239343'];
		let cartItemsPIDs = [];
		document.querySelectorAll('.CartItemWrapper').forEach(cartItemWrapper => {
			cartItemsPIDs.push(cartItemWrapper.getAttribute('data-product-id'));
		});
		let matched = cartItemsPIDs.some(r => productIds.indexOf(r) >= 0);
		if (matched) {
			observer.disconnect();
			console.log('matched');
			return true;
		}
	};
	const observer = new MutationObserver(callback);
	observer.observe(targetNode, config);
}

waitForElem(
	'#sidebar-cart, .CartItemWrapper',
	elements => {
		if (elements) {
			observeElement();
		}
	},
	2
);
