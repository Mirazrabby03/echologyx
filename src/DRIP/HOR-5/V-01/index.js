import './styles/index.scss';

/* DO NOT IMPORT ANYTHING */

console.log('outside');
function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

	if (timer <= 0) return;

	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}

const icons = {
	cheeringIcon: ` <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#639C59"/>
    <path d="M14.2229 6.11093L8.30122 12.7703L5.71933 9.87927C5.5395 9.67791 5.28259 9.67791 5.11561 9.87927C5.02569 9.97995 5 10.1094 5 10.2388C5 10.3683 5.02569 10.4977 5.11561 10.5984L8.01862 13.849C8.19846 14.0503 8.45536 14.0503 8.62235 13.849L14.8651 6.85884C15.045 6.65748 15.045 6.36982 14.8651 6.18284C14.6853 5.95271 14.4027 5.95271 14.2229 6.11093Z" fill="white"/>
    </svg>`
};

function mainJs(body) {
	const text = document.querySelector('.main-layout__header .cart__summary-value').textContent;
	const shippingElement = document.querySelector('.main-layout__header .cart-slide-in-padding-container');
	const cartSummaryValueElement = document.querySelector('.cart__summary-value');
	const spendText = document.querySelector('.main-layout__header .cart-slide-in-shipping__no-free-shipping');
	//cart-slide-in-shipping__free-shipping
	if (location.pathname.includes('/de/')) {
		if (!cartSummaryValueElement) return;
		const text = cartSummaryValueElement.textContent;
		const sanitizedText = text.replace(/[^\d.,]/g, '');
		const sanitizedNumber = sanitizedText.replace(/\./g, '');
		const extractedNumber = parseFloat(sanitizedNumber);
		if (extractedNumber > 150) {
			spendText && spendText.remove();
			const cartSummaryLabelNote = cartSummaryValueElement.querySelector('.cart__summary-label-note');
			if (cartSummaryLabelNote) return;
			if(document.querySelector('.main-layout__header .cart-slide-in-shipping__free-shipping') && document.querySelector('.main-layout__header .cart-slide-in-shipping__free-shipping')){
				cartSummaryValueElement.insertAdjacentHTML('beforeend', `<small class="cart__summary-label-note">Kostenloser Versand</small>`);
			} else {
				cartSummaryValueElement.insertAdjacentHTML('beforeend', `<small class="cart__summary-label-note"></small>`);
			}
		} else {
			const cartSummaryLabelNote = cartSummaryValueElement.querySelector('.cart__summary-label-note');
			cartSummaryLabelNote && cartSummaryLabelNote.remove();
		}

		if (document.querySelector('.cheering__message__container')) return;
		shippingElement &&
			shippingElement.insertAdjacentHTML(
				'beforebegin',
				`
            <div class='cheering__message__container'>
                <div class='cheering__message__icon'>
                   ${icons.cheeringIcon}
                </div>
                <div class='cheering__message__description'>
                    <span class='bold__text'>Gute Wahl! </span> Einmal kaufen, immer behalten - Ihr perfekter Reisebegleiter das ganze Leben!
                    </div>
            </div>
        `
			);
		if (window.innerWidth < 500) {
			document.querySelector(
				'.cheering__message__description'
			).innerHTML = `<span class='bold__text'>Gute Wahl! </span> Einmal kaufen, immer behalten - </br>Ihr perfekter Reisebegleiter das ganze Leben!`;
		}
	} else {
		const sanitizedText = text.replace(/[^\d.,]/g, '');
		const sanitizedNumber = sanitizedText.replace(/,/g, '').replace(',', '.');
		const extractedNumber = parseFloat(sanitizedNumber);
		const cartSummaryLabelNote = cartSummaryValueElement.querySelector('.cart__summary-label-note');
		if (extractedNumber > 150) {
			spendText && spendText.remove();
			if (cartSummaryLabelNote) return;
			if(document.querySelector('.main-layout__header .cart-slide-in-shipping__free-shipping') && document.querySelector('.main-layout__header .cart-slide-in-shipping__free-shipping')){
				cartSummaryValueElement.insertAdjacentHTML('beforeend', `<small class="cart__summary-label-note">Free shipping</small>`);
			} else {
				cartSummaryValueElement.insertAdjacentHTML('beforeend', `<small class="cart__summary-label-note"></small>`);
			}
			
		} else {
			cartSummaryLabelNote && cartSummaryLabelNote.remove();
		}

		if (document.querySelector('.cheering__message__container')) return;
		shippingElement &&
			shippingElement.insertAdjacentHTML(
				'beforebegin',
				`
            <div class='cheering__message__container'>
                <div class='cheering__message__icon'>
                   ${icons.cheeringIcon}
                </div>
                <div class='cheering__message__description'>
                    <span class='bold__text'>Great decision! </span> Buy once, keep forever - Your perfect travel companion for a lifetime! 
                </div>
            </div>
        `
			);
		if (window.innerWidth < 500) {
			document.querySelector(
				'.cheering__message__description'
			).innerHTML = `<span class='bold__text'>Great decision! </span> Buy once, keep forever - </br> Your perfect travel companion for a lifetime!`;
		}
	}

	console.log('HOR-5/V-01');
}

function cartDetect() {
	const target = document.querySelector('.main-layout__header .cart__summary-line .cart__summary-value');
	if (!target) return;
	const config = { characterData: true, subtree: true };

	const callback = function(mutationsList, observer) {
		for (const mutation of mutationsList) {
			if (mutation.type === 'characterData') {
				mainJs();
			}
		}
	};

	const observer = new MutationObserver(callback);
	observer.observe(target, config);
}

waitForElem(
	'.main-layout__header .cart-slide-in.cart-slide-in__visible.cart-slide-in__loaded, .main-layout__header .cart-slide-in-padding-container',
	() => {
		mainJs();
		cartDetect();
	},
	2
);
