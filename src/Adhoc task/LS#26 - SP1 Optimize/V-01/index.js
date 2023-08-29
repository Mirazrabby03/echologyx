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
	mainJs: function() {
		document.querySelector('#mws3').classList.add('variation-1');
		document.querySelector('#hero .row a.btn').textContent = 'SHOP THE KIT $65';
		document.querySelector('#hero .row .special').textContent = 'SAVE $35 + FREE SHIPPING';
		document.querySelector('#hero video').insertAdjacentHTML(
			'afterend',
			`
        <div class="hero__video__text">
        <span>"Clear glue and quality lashes make me look and feel fab!  <br />Am amazed at how great these look"</span>
        </div>`
		);

		document.querySelector('#easy').insertAdjacentHTML(
			'afterend',
			`
        
        <div class="icons__container">
			<h3>Lilac ST Lashes</h3>
				<div class= 'icon__wrapper'>
					<img class="icon__image" src="https://cdn.shopify.com/s/files/1/0308/4163/4956/files/cloud_icon_e1aa35a2-7845-4059-bb97-24fd3f27c57d.png?v=1666812948">
					<p class= 'icon__title'>Designed to be slept in</p>
				</div>

				<div class= 'icon__wrapper'>
					<img class="icon__image" src="https://cdn.shopify.com/s/files/1/0308/4163/4956/files/sparkle_icon_f7be8345-39d1-48ad-bace-6c196015e9c8.png?v=1666812948">
					<p class='icon__title'>Easy to apply, even for beginners</p>
				</div>

				<div class= 'icon__wrapper'>
					<img class="icon__image" src="https://cdn.shopify.com/s/files/1/0308/4163/4956/files/water_icon_cde49407-33e2-4e88-9e94-faa8c2adaf2b.png?v=1666812948">
					<p class= 'icon__title'>Waterproof</p>
				</div>

				<div class= 'icon__wrapper'>
					<img class="icon__image" src="https://cdn.shopify.com/s/files/1/0308/4163/4956/files/strip_icon_0b8576f7-18e3-41db-bea4-d2afeb313a78.png?v=1666812948">
					<p class= 'icon__title'>No strips, gaps, peeling, or magnets</p>
				</div>

				<div class= 'icon__wrapper'>
					<img class="icon__image" src="https://cdn.shopify.com/s/files/1/0308/4163/4956/files/feather_icon_590a8816-4dab-40dd-8844-1e19f110faae.png?v=1666812948">
					<p class= 'icon__title'>Ultra lightweight</p>
				</div>
		</div>
        `
		);
	}
};
waitForElem('#mws3', elements => {
	if (elements) {
		console.log(`LS#26 - SP1 Optimize- V-01`);
		echoVariation.init();
	}
});
