import './styles/index.scss';

/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

	if (timer <= 0) return;

	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}
console.log('VARIATION RUNNING');
function mainCss() {
	var styles = document.createElement('style');

	styles.setAttribute('type', 'text/css');

	document.head.appendChild(styles).textContent =
		`
.mobile-nav__image {
	width: 90px;
	height: 90px;
}

#mobile-menu-1 .mobile-nav__images-scroller {
	grid-template-rows: 1fr 1fr;
	width: auto;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-flow: row dense;
	gap: 8px;
	width: auto;
	margin-bottom: 16px !important;
	row-gap: 16px;
}

.mobile-nav__image-push {
	max-width: unset;
	min-width: unset;
}

.mobile-nav__image-heading.heading.heading--xsmall {
	text-transform: capitalize;
	font-size: 14px;
	text-wrap: nowrap;
}

#mobile-menu-3 .mobile-nav__image-heading.heading.heading--xsmall,
#mobile-menu-5 .mobile-nav__image-heading.heading.heading--xsmall {
	text-transform: unset !important;
}

.mobile-nav .mobile-nav {
	margin-bottom: unset !important;
}

#mobile-menu-1 .mobile-nav__image {
	margin: unset;
}
#mobile-menu-1 .mobile-nav__image-heading {
	font-size: 11px;
}

#mobile-menu-3 .mobile-nav__images-scroller,
#mobile-menu-5 .mobile-nav__images-scroller {
	margin-bottom: unset !important;
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 15px;
	margin-top: 5px;
}
#mobile-menu-3 .mobile-nav__images-scroller > a,
#mobile-menu-5 .mobile-nav__images-scroller > a {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 60px;
	align-content: center;
	gap: 18px;
}
#mobile-menu-3 .mobile-nav__images-scroller > a::before,
#mobile-menu-5 .mobile-nav__images-scroller > a::before {
	position: absolute;
	display: block;
	content: '';
	min-width: 50px;
	min-height: 50px;
	left: 0;
	border-radius: 50%;
	top: -4px;
	background: rgba(245, 245, 245, 1);
	z-index: -1;
}

.hide-item {
	display: none;
}

#mobile-menu-2 > ul > li:nth-child(1) {
	display: none;
}

#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(3) {
	cursor: pointer;
}

button[aria-controls='mobile-menu-4'] {
	pointer-events: none;
}
button[aria-controls='mobile-menu-4'] > span {
	display: none;
}

.li-images {
	width: 35px;
	height: 35px;
	margin-right: 12px;
}

#mobile-menu-2-2 .mobile-nav__link {
	justify-content: flex-start;
}

#mobile-menu-2-2 .mobile-nav__item {
	margin-bottom: unset;
	padding-bottom: 10px;
	padding-top: 10px;
	font-size: 14px;
}

#mobile-menu-2-2 .mobile-nav__item:not(:last-child) {
	border-bottom: 1px solid rgba(40, 40, 40, 0.15);
}

.drawer__header {
	justify-content: flex-end;
}

#mobile-menu-3 .mobile-nav__images-scroller,
#mobile-menu-5 .mobile-nav__images-scroller {
	display: flex;
	flex-direction: column;
	width: 100%;
}
#mobile-menu-3 .mobile-nav__images-scroller .mobile-nav__image-push,
#mobile-menu-5 .mobile-nav__images-scroller .mobile-nav__image-push {
	display: flex;
	padding-bottom: 15px;
}
#mobile-menu-3 .mobile-nav__images-scroller .mobile-nav__image-push:not(:last-child),
#mobile-menu-5 .mobile-nav__images-scroller .mobile-nav__image-push:not(:last-child) {
	border-bottom: 1px solid rgba(40, 40, 40, 0.15);
}
#mobile-menu-3 .mobile-nav__images-scroller .mobile-nav__image,
#mobile-menu-5 .mobile-nav__images-scroller .mobile-nav__image {
	margin: unset;
	width: 35px !important;
	height: 35px;
	margin-left: 7px;
}
#mobile-menu-3 .mobile-nav__images-scroller .mobile-nav__image-heading,
#mobile-menu-5 .mobile-nav__images-scroller .mobile-nav__image-heading {
	margin: unset !important;
}

`		 
		

}

// create items array for name and images of products
let products = [
	{
		name: 'Aufbewahrung',
		image: 'https://apfelband.de/cdn/shop/products/kleinschwarz_500x.png?v=1668767231'
	},
	{
		name: 'AirTag Zubehör',
		image: 'https://apfelband.de/cdn/shop/products/schwarz_500x.png?v=1659620493'
	},
	{
		name: 'Schutzhüllen',
		image: 'https://apfelband.de/cdn/shop/products/schwarz-apfelband_3e31f06d-f8b6-49c6-b205-e654b047df06_500x.png?v=1659619977'
	},
	{
		name: 'Ladestation',
		image: 'https://apfelband.de/cdn/shop/products/grau_500x.png?v=1659620826'
	},
	{
		name: 'Connectoren',
		image: 'https://apfelband.de/cdn/shop/products/silber_apfelband_368c99c1-6d08-4a67-a6bb-5d3244fa8652_500x.png?v=1659620316'
	},
	{
		name: 'Werkzeug',
		image: 'https://apfelband.de/cdn/shop/products/Werkzeug_apfelband_500x.png?v=1659620888'
	}
];

function mainJs() {
	document.querySelector('button[aria-controls="mobile-menu-4"]').childNodes[0].textContent = 'Bundles';

	// clone 2nd sub menu
	const clone = document.querySelector('#mobile-menu-2 > ul > li:nth-child(2)').cloneNode(true);
	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(1)').after(clone);
	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(3)').remove();

	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(1) button').setAttribute('aria-expanded', 'true');

	//set overflow to visible


	document.querySelector('#mobile-menu-1').style.overflow = 'visible';
	document.querySelector('#mobile-menu-1').setAttribute('open', 'true');

	// document.querySelector('.header__icon-list button.header__icon-wrapper[aria-controls="mobile-menu-drawer"]').addEventListener('click', function() {
		
	// });

	// add heading h5 class together with the button class

	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(2) > button').classList.add('heading');
	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(2) > button').classList.add('h5');

	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(4) > button').innerHTML = `<a href="/pages/bundle">Bundles</a>`;

	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(4)').addEventListener('click', function() {
		window.location.href = '/pages/bundle';
	});

	document.querySelector('#mobile-menu-4.collapsible').remove();

	// add new li for gutschein
	const newLi = document.createElement('li');
	newLi.className = 'mobile-nav__item custom-gutschein';
	newLi.setAttribute('data-level', '1');
	newLi.innerHTML = `<button class="mobile-nav__link heading h5" aria-controls="mobile-menu-5" aria-expanded="false" >
    <a href="/products/geschenkgutschein">Gutschein</a>
    </button>`;
	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(4)').after(newLi);

	// append information

	document
		.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(5)')
		.after(document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(3)'));

	document.querySelector('.custom-gutschein').addEventListener('click', function() {
		window.location.href = '/products/geschenkgutschein';
	});

	document.querySelectorAll('#mobile-menu-2-2 > ul li a').forEach(e => {
		products.forEach(product => {
			if (e.textContent == product.name) {
				// console.log('match')
				e.innerHTML = `<img class='li-images' src="${product.image}" alt="${product.name}"> <span>${product.name}</span>`;
			}
		});
	});

	// add event on click burger menu

	function burgerMenuClick() {
        console.log('menu_item_click')
		if (document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(1) button').getAttribute('aria-expanded') == 'false') {
			document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(1) button').setAttribute('aria-expanded', 'true');
			document.querySelector('#mobile-menu-1').style.overflow = 'visible';
			document.querySelector('#mobile-menu-1').setAttribute('open', 'true');
			// gtag('event', 'mobile_menu_click', {
			// 	'target_element': 'burger_menu'
			// });
		}
      if (sessionStorage.getItem('burgerMenuTriggered') === 'false') {
        gtag('event', 'mobile_menu_click', {
			'target_element': 'burger_menu'
		});
        sessionStorage.setItem('burgerMenuTriggered', 'true');
      }
	}
    document.querySelector('.header__icon-list button.header__icon-wrapper[aria-controls="mobile-menu-drawer"]').addEventListener('click',  
    burgerMenuClick
     );

	// document.querySelector('.header__icon-list button.header__icon-wrapper[aria-controls="mobile-menu-drawer"]').addEventListener('click', function() {
	// console.log('menu_Triggered')	
	// if (document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(1) button').getAttribute('aria-expanded') == 'false') {
	// 	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(1) button').setAttribute('aria-expanded', 'true');
	// 	document.querySelector('#mobile-menu-1').style.overflow = 'visible';
	// 	document.querySelector('#mobile-menu-1').setAttribute('open', 'true');
	// 	// gtag('event', 'mobile_menu_click', {
	// 	// 	'target_element': 'burger_menu'
	// 	// });
	// }
    
	// });

	document.querySelectorAll('#mobile-menu-drawer > .drawer__content a').forEach(el => {
		el.addEventListener('click', e => {
          	console.log('menu_item_Triggered')
			gtag('event', 'mobile_menu_item_click', {
				'target_element': e.target.closest('a').getAttribute('href')
			});
		});
	});

	document.querySelector('#mobile-menu-drawer > div.drawer__content > ul > li:nth-child(3)').addEventListener('click', e => {
		console.log('menu_item_Triggered')	
      gtag('event', 'mobile_menu_item_click', {
			'target_element': e.currentTarget.querySelector('a').getAttribute('href')
		});
	});

	mainCss();
}

function TrackCart(body) {
	if (window.innerWidth <= 1198) {
		const target = document.body;
		const config = { attributes: false, childList: true, subtree: true };
		const callback = function(mutationsList, observer) {
			mutationsList.forEach(mutation => {
				// console.log('mutation', mutation);
				if(mutation.addedNodes.length > 0 && mutation.addedNodes[0].id == 'mobile-menu-drawer') {
					console.log('mutation', mutation);
					mainJs();
				}
			})
		
		};
		const observer = new MutationObserver(callback);
		observer.observe(target, config);
	}
}

waitForElem('#mobile-menu-drawer', TrackCart);

