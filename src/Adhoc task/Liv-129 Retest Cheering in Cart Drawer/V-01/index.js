import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 100000, frequency = 25) {
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
	asset: {
		jumpSVG: `
        <svg class="jump_svg" xmlns="http://www.w3.org/2000/svg" width="22" height="34" viewBox="0 0 19 29" fill="none">
            <g clip-path="url(#clip0_1810_47)">
                <path d="M0.695776 0.158537C0.31883 0.434208 0.228932 0.974465 0.495551 1.36474L6.64112 10.3559C6.64904 10.3675 6.66245 10.3712 6.67074 10.3823V15.0149V17.0634V27.6628C6.67074 28.4015 7.24995 29 7.96401 29C8.67832 29 9.25753 28.4015 9.25753 27.6628V22.7425C9.35215 22.7659 9.44779 22.7871 9.54637 22.7871C9.70164 22.7871 9.85896 22.7575 10.0122 22.6941L15.2629 20.5268C15.7338 20.3324 16.0454 19.864 16.0525 19.3396C16.0597 18.8151 15.7604 18.3377 15.2945 18.1302L12.329 16.807V10.3823C12.3375 10.3712 12.3507 10.3674 12.3587 10.3559L18.5042 1.36475C18.7708 0.974476 18.681 0.434219 18.304 0.158548C17.925 -0.117654 17.405 -0.0231244 17.1374 0.365572L11.3517 8.83035H7.6481L1.86238 0.365561C1.59576 -0.0231352 1.07579 -0.117665 0.695776 0.158537ZM9.25754 20.2108V18.0404C9.386 18.2266 9.5451 18.3917 9.76294 18.4888L11.5241 19.2751L9.25754 20.2108Z" fill="#006750"/>
                <path d="M9.49998 8.21401C10.7999 8.21401 11.8536 7.12447 11.8536 5.78046C11.8536 4.43646 10.7999 3.34692 9.49998 3.34692C8.20011 3.34692 7.14636 4.43646 7.14636 5.78046C7.14636 7.12447 8.20011 8.21401 9.49998 8.21401Z" fill="#006750"/>
            </g>
            <defs>
                <clipPath id="clip0_1810_47">
                <rect width="19" height="29" fill="white"/>
                </clipPath>
            </defs>
        </svg>
        `
	},
	renderBanner: function() {
		if (document.querySelector('.banner')) return;
		let jumpSVG = echoVariation.asset.jumpSVG;
		const productIds = ['2226099978351', '6867031621781', '3927478239343'];
		let cartItemsPIDs = [];
		document.querySelectorAll('.CartItemWrapper').forEach(cartItemWrapper => {
			cartItemsPIDs.push(cartItemWrapper.getAttribute('data-product-id'));
		});
		console.log(productIds, 'productIds');
		console.log(cartItemsPIDs, 'cartItemsPIDs');

		let matched = cartItemsPIDs.some(r => productIds.indexOf(r) >= 0);
		if (!matched) return;
		let banner = document.createElement('div');
		banner.classList.add('banner');
		banner.innerHTML = `
            ${jumpSVG}
            <div class="banner__inner__text">
		        <span class="banner__inner__text__strong">Sehr gute Wahl!</span>
		        <span class="banner__inner__text__light">Du wirst dich während der Saftkur 
                    <span class="banner__inner__text__strong">gesund, leicht </span> und
                    <span class="banner__inner__text__strong">wohl fühlen.</span>
                </span>
		    </div>`;
		document.querySelector('.Cart.Drawer__Content .Drawer__Main > .Drawer__Container').insertAdjacentElement('beforebegin', banner);
	},
	observeElement: function() {
		const targetNode = document.querySelector('#sidebar-cart');
		const config = { attributes: false, childList: true, subtree: false };
		const callback = function(mutationsList, observer) {
			for (let mutation of mutationsList) {
				if (mutation.type === 'childList') {
					// console.log('A child node has been added or removed.');
					echoVariation.renderBanner();
				}
			}
		};
		const observer = new MutationObserver(callback);
		observer.observe(targetNode, config);
	},
	mainJs: function() {
		echoVariation.renderBanner();
		echoVariation.observeElement();
	}
};
waitForElem(
	'.CartItemWrapper, .Cart.Drawer__Content .Drawer__Main > .Drawer__Container',
	elements => {
		if (elements) {
			console.log(`Retest Cheering in Cart Drawer -V-01`);
			echoVariation.init();
		}
	},
	2
);
