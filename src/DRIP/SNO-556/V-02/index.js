function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
	if (timer <= 0) return;
	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}

function mainCss() {
	var styles = document.createElement('style');
	styles.setAttribute('type', 'text/css');
	document.head.appendChild(styles).textContent =
		'' +
		/* CSS will be imported here */
		'';
}

let isMobile = false;
let swiperOBJ = null;
let currentCartItems = [];

const asset = {
	accordianIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
        <path d="M6.53126 4.88757L9.81508 1.6879C9.93836 1.55514 10.0045 1.3813 9.99976 1.20238C9.99505 1.02346 9.91985 0.853151 9.78973 0.726726C9.65962 0.6003 9.48457 0.527438 9.30081 0.523223C9.11705 0.519009 8.93866 0.583765 8.80258 0.704085L5.51876 3.90166C5.38448 4.03237 5.20239 4.1058 5.01251 4.1058C4.82264 4.1058 4.64055 4.03237 4.50627 3.90166L1.22245 0.704085C1.08809 0.573346 0.905892 0.499934 0.715944 0.5C0.525997 0.500065 0.343855 0.573602 0.20959 0.704434C0.075324 0.835266 -6.77333e-05 1.01268 -3.04946e-08 1.19763C6.67186e-05 1.38259 0.0755863 1.55995 0.209948 1.69069L3.49377 4.88757C3.89661 5.27971 4.4429 5.5 5.01251 5.5C5.58213 5.5 6.12842 5.27971 6.53126 4.88757Z" fill="#454545"/>
    </svg>
    `,
	addToCartIcon: `
	<svg class="Icon Icon--cart" viewBox="0 0 23.1 17.5" style="enable-background:new 0 0 23.1 17.5;">
	<path class="cart-st0" d="M19.5,16.5h-16L1.2,5.8h20.6L19.5,16.5z"></path>
	<path class="cart-st0" d="M6.8,5.8C6.8,3.2,9,1,11.7,1c2.7,0,4.9,2.2,4.9,4.8"></path>
  	</svg>
    `
};

let products = [
	{
		id: 'sneakersocken-weiss',
		name: 'Sneaker Socken für Herren & Damen aus Bio-Baumwolle',
		quantity: 1,
		price: '26,99',
		image: 'https://snocks.com/cdn/shop/files/Ankles-Titelbild-Onlineshop3d-weiss_3131bea8-8a7d-4ae1-a9d2-70a5850ad989.jpg?v=1687352401'
	},
	{
		id: 'fusslinge-weiss',
		name: 'Füßlinge Damen & Herren aus Bio-Baumwolle',
		quantity: 1,
		price: '29,99',
		image: 'https://snocks.com/cdn/shop/files/Invisible-Titelbild-Onlineshop3d-weiss_8410fccf-9880-4163-befc-6fa7c4da841e.jpg?v=1687436592'
	},
	{
		id: 'tennissocken-schwarz-weiss',
		name: 'Tennissocken aus Bio-Baumwolle',
		quantity: 1,
		price: '29,99',
		image: 'https://snocks.com/cdn/shop/files/Crew-Titelbild-Onlineshop3d-mixed_1bc2d253-b195-43de-80d4-213ad3842a0c.jpg?v=1687261945'
	},
	{
		id: 'business-socken-leichte-lange-socken-mix',
		name: 'Business Socken aus Bio-Baumwolle',
		quantity: 1,
		price: '22,49',
		image: 'https://snocks.com/cdn/shop/files/Business-Titelbild-Onlineshop3d-mixed_379107f2-c8cb-4372-91e3-9929abbac1ba.jpg?v=1687427555'
	},
	{
		id: 'laufsocken-schwarz-weiss',
		name: 'Laufsocken Herren & Damen',
		quantity: 1,
		price: '24,99',
		image: 'https://snocks.com/cdn/shop/files/Runnings-Titelbild-Onlineshop3d-mixed_5e61557e-63e5-4056-b1c2-353a4d547ab2.jpg?v=1687352987'
	}
];

function addToCart(id) {
	const data = JSON.stringify({ id, quantity: 1 });
	const response = fetch('/cart/add.js', {
		method: 'POST',
		body: data,
		headers: {
			'Content-Type': 'application/json'
		}
	});
	setTimeout(() => {
		document.dispatchEvent(
			new CustomEvent('product:added', {
				bubbles: true,
				detail: {
					variant: id,
					quantity: 1
				}
			})
		);
	}, 1000);

        gtag('event', 'add_cross_sell_cart', {

            });
}

function getCartItems() {
	const items = [];

	document.querySelectorAll('.Cart__ItemList .CartItem__Wrapper .CartItem__Info > a').forEach(e => {
		const urlParams = new URLSearchParams(e.search);
		const variantId = urlParams.get('variant');
		items.push(variantId);
	});

	return items;
}

function getCartItemsV2() {
	const items = [];

	document.querySelectorAll('.Cart__ItemList .CartItem__Wrapper .CartItem__Info > a').forEach(e => {
		const url = e.getAttribute('href');
		const regex = /\/products\/(.*?)\?/;
		const match = url.match(regex);
		items.push(match[1]);
	});

	return items;
}

let cartItems = 0;

function renderRecomendationPanel() {
	document.body.classList.add('sno-556');
	const sidebar = document.querySelector('#sidebar-cart');
	const recomendationPanel = document.createElement('div');
	const recomendationPanelDesktop = document.createElement('div');
	recomendationPanelDesktop.classList.add('ab--recomendation-panel');
	
	recomendationPanel.className = 'ab--recomendation-panel swiper';

	recomendationPanel.innerHTML = `<div class='ab--recomendation-panel__title__wrapper'>
    <span class="ab--recomendation-panel__title">Diese Produkte könnten dir auch gefallen:</span>
    <div class="accordion-icon-mobile">
    ${asset.accordianIcon}
    </div>
    </div>
    <div class="ab--recomendation-panel__wrapper swiper-wrapper"></div>`;

	recomendationPanelDesktop.innerHTML = `<div class='ab--recomendation-panel__title__wrapper'>
    <span class="ab--recomendation-panel__title">Diese Produkte könnten dir auch gefallen:</span>
    <div class="accordion-icon-mobile">
    ${asset.accordianIcon}
    </div>
    </div>
    <div class="ab--recomendation-panel__wrapper"></div>`;

	if (window.innerWidth < 768) {
		recomendationPanel.classList.add('mobile-recomendation-panel', 'hide-panel');
		sidebar.insertAdjacentElement('afterbegin', recomendationPanel);
		isMobile = true;
	} else {
		sidebar.insertAdjacentElement('afterbegin', recomendationPanelDesktop);
	}

	window.addEventListener('resize', sizeHandler);
	sizeHandler();
	function sizeHandler() {
		if (window.innerWidth < 768) {
			setTimeout(() => {
			recomendationPanel.classList.add('mobile');
			if (document.querySelector('.Drawer__Footer')) {
				const bottom = document.querySelector('.Drawer__Footer').getBoundingClientRect().height -1;
				recomendationPanel.style.setProperty('--bottom', (Number(bottom) + 0.6) + 'px');
				setTimeout(() => {
				recomendationPanel.style.setProperty('--mobile-display', 'flex');
				}, 0);
			}
			}, 100);
		} else {
			recomendationPanel.classList.remove('mobile');
			recomendationPanel.style.removeProperty('--bottom');
		}
	}


	const innerContent = products
		.map((product, index) => {
			if(isMobile) return;
			return `
		<div class="ab--recomendation-panel__product swiper-slide" data-index="${index}" data-id='${product.id}'>
			<div class="ab--recomendation-panel__product__container">
				<div class="ab--recomendation-panel__product__image__wrapper">
				
					<img class="ab--recomendation-panel__product__image" src="${product.image}" alt=""/>
				
				</div>
				<div class="ab--recomendation-panel__product__details">
					<div class="ab--recomendation-panel__product__name">
						<a href="${product.url}">	
							<span>
								${product.title}					
							</span>
						<a/>
					</div>
					<div class="ab--recomendation-panel__product__price">
						<span>${product.price} </span>
					</div>
					<div class="ab--recomendation-panel__product__wrapper">
						<div class='custom-select'>
							<button class='select-button'>Größe</button>
							<div class='select-items'>
								<ul class='dropdown-list open'>
									${product.variants
										.map(variant => {
											const unavailableClass = variant.available ? '' : 'unavailable';
											return `<li class='dropdown-list-item ${unavailableClass}' value="${variant.id}">${variant.size}</li>`;
										})
										.join('')}
								</ul>
							</div>
							<div class= 'accordion-icon'>
							${asset.accordianIcon}
							</div>
						</div>
					

						<div class='ab--recomendation-panel_addToCart'>
							<button class="ab--recomendation-panel__product__addToCart" type="button" data-index="${index}">
								${asset.addToCartIcon}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		`;
		})
		.join('');
	recomendationPanel.querySelector('.ab--recomendation-panel__wrapper').innerHTML = innerContent;
	recomendationPanelDesktop.querySelector('.ab--recomendation-panel__wrapper').innerHTML = innerContent;

	document.querySelectorAll('.custom-select').forEach(select => {
		select.addEventListener('click', function(e) {
			e.target
				.closest('.custom-select')
				.querySelector('.dropdown-list')
				.classList.toggle('open');
		});
	});

	//close dropdown list if clicked outside

	// select item from dropdown
	document.querySelectorAll('.dropdown-list-item').forEach(item => {
		item.addEventListener('click', function(e) {
			const text = e.target.textContent;
			const value = e.target.getAttribute('value');
			
			e.target.closest('.custom-select').querySelector('.select-button').textContent = text;
			e.target
				.closest('.custom-select')
				.querySelector('.select-button')
				.setAttribute('value', value);
			//remove class open from all the dropdown list
			document.querySelectorAll('.dropdown-list').forEach(item => {
				item.classList.add('open');
			});

			//remove border style and box-shadow from custom-select
			e.target.closest('.custom-select').classList.remove('error');
			// e.target.closest('.select-button').classList.remove('error');
		});
	});

	document.querySelectorAll('.ab--recomendation-panel__product__addToCart').forEach(button => {
		button.addEventListener('click', e => {
			const value = e.target.closest('.ab--recomendation-panel__product__wrapper').querySelector('.select-button').value;
			if (value == 0) {
				//add border style and box-shadow to custom-select
				e.target
					.closest('.ab--recomendation-panel__product__wrapper')
					.querySelector('.custom-select').classList.add('error');
					// .querySelector('.select-button').classList.add('error');

				return;
			}

			addToCart(value);
		});
	});

	document.querySelector('.ab--recomendation-panel__title__wrapper').addEventListener('click', function() {
		document.querySelector('.ab--recomendation-panel__wrapper').classList.toggle('active');
		document.querySelector('.accordion-icon-mobile').classList.toggle('active');
	});

	if (window.innerWidth < 768) {
		waitForElem('Swiper',swipers => {
			const swiper = new Swiper('.ab--recomendation-panel.swiper', {
				slidesPerView: 'auto',
				freeMode: true,
				initialSlide: 0,
			});
			swiperOBJ = swiper;
		},1,true);
	}

}

function detectCartItemChange() {
	const targetNode = document.querySelector('#sidebar-cart');
	const config = { attributes: true, childList: true, subtree: true };
	const callback = function() {
		if (Number(document.querySelectorAll('.Cart__ItemList .CartItem__Wrapper').length) !== cartItems) {
			cartItems = Number(document.querySelectorAll('.Cart__ItemList .CartItem__Wrapper').length);
			if(isMobile){
				recomendationItemArrangementMobile();
			}else{
				recomendationItemArrangement();
			}
		}
	};
	const observer = new MutationObserver(callback);
	observer.observe(targetNode, config);
}

function addItemToSLider(productID, index="new") {
	if(!swiperOBJ || !productID) return;
	const product = products.find(product => product.id === productID);

	const renderItem = `
	<div class="ab--recomendation-panel__product swiper-slide" data-index="${index}" data-id='${product.id}'>
		<div class="ab--recomendation-panel__product__container">
			
				<img class="ab--recomendation-panel__product__image" src="${product.image}" alt=""/>
		
			<div class="ab--recomendation-panel__product__details">
				<div class="ab--recomendation-panel__product__name">
					<a href="${product.url}">	
						<span>
							${product.title}					
						</span>
					<a/>
				</div>
				<div class="ab--recomendation-panel__product__price">
					<span>${product.price} </span>
				</div>
				<div class="ab--recomendation-panel__product__wrapper">
					<div class='custom-select'>
						<button class='select-button'>Größe</button>
						<div class='select-items'>
							<ul class='dropdown-list open'>
								${product.variants
									.map(variant => {
										return `<li class='dropdown-list-item' value="${variant.id}">${variant.size}</li>`;
									})
									.join('')}
							</ul>
						</div>
						<div class= 'accordion-icon'>
						${asset.accordianIcon}
						</div>
					</div>
				

					<div class='ab--recomendation-panel_addToCart'>
						<button class="ab--recomendation-panel__product__addToCart" type="button" data-index="${index}">
							${asset.addToCartIcon}
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	`
	swiperOBJ.appendSlide(renderItem);
	
	//toggle dropdown 
	document.querySelector(`.ab--recomendation-panel__product[data-id="${product.id}"] .custom-select`).addEventListener('click', e => {
		e.target
			.closest('.custom-select')
			.querySelector('.dropdown-list')
			.classList.toggle('open');
	});


	// new added items dropdown list functionality
	document.querySelectorAll(`.ab--recomendation-panel__product[data-id="${product.id}"] .dropdown-list-item`).forEach(item => {
		item.addEventListener('click', e=> {

			
			const text = e.target.textContent;
			const value = e.target.getAttribute('value');
			e.target.closest('.custom-select').querySelector('.select-button').textContent = text;
			e.target
				.closest('.custom-select')
				.querySelector('.select-button')
				.setAttribute('value', value);
			//remove class open from all the dropdown list
			document.querySelectorAll('.dropdown-list').forEach(item => {
				// item.classList.remove('open');
				item.classList.add('open');
			});
	
			//remove border style and box-shadow from custom-select
			e.target.closest('.custom-select').classList.remove('error');
			// e.target.closest('.select-button').classList.remove('error');

		});
	});

	//add to cart functionality
	document.querySelector(`.ab--recomendation-panel__product[data-id="${product.id}"] .ab--recomendation-panel__product__addToCart`).addEventListener('click', e => {
		const value = e.target.closest('.ab--recomendation-panel__product__wrapper').querySelector('.select-button').value;
		if (value == 0) {
			//add border style and box-shadow to custom-select
			e.target
				.closest('.ab--recomendation-panel__product__wrapper')
				.querySelector('.custom-select').classList.add('error');
			return;
		}
		addToCart(value);
	});
	
	
	
	
}

function removeItemFromSLider(productID) {
	if(!swiperOBJ || !productID) return;
	
	document.querySelectorAll('.ab--recomendation-panel__product').forEach((elm, i) => {
		if(elm === document.querySelector(`.ab--recomendation-panel__product[data-id="${productID}"]`)){
			swiperOBJ.removeSlide(i)
			document.querySelectorAll('.ab--recomendation-panel__wrapper > a:not(a[href])').forEach((elm) => {
				elm.remove();
			})
			return;
		}
	})
}


function recomendationItemArrangementMobile() {
	const cartItemList = getCartItems();
	if(!cartItemList) return;
	const oldCartItem = currentCartItems;
	const newCartItem = getCartItemsV2();
	currentCartItems = oldCartItem !== newCartItem ? newCartItem : currentCartItems;
	const removedItemFromCart = oldCartItem.filter(item => !newCartItem.includes(item));
	
	//CHeck which items are not available in the recomendation panel. If not available then add those items to the slider
	products.forEach(product => {
		if(!document.querySelector(`.ab--recomendation-panel__product[data-id="${product.id}"]`)){
			if(!newCartItem.includes(product.id)){
				addItemToSLider(product.id);
			}
		}
	})
	
	//if there is any item in cart then we will remove those from recomendation palnel
	cartItemList.forEach(item => {
		if (products.find(product => product.variants.find(variant => variant.id === Number(item)))) {
			const product = products.find(product => product.variants.find(variant => variant.id === Number(item)));
			removeItemFromSLider(product.id);
		}
	});	
				

		//will show only 3 items in the slider loop through all the items and remove the rest of the items
		const recomendationItems = document.querySelectorAll('.ab--recomendation-panel__wrapper .ab--recomendation-panel__product');
		let availableRecommendationItems = recomendationItems.length;

		for (let index = recomendationItems.length - 1; index >= 0; index--) {
			const item = recomendationItems[index];
			if (availableRecommendationItems > 3) {			
				if(item.getAttribute('data-id') !== removedItemFromCart[0]){
					removeItemFromSLider(item.getAttribute('data-id'));
					availableRecommendationItems--;
				}
			}		
		}

		//if suggested is 0 then hide the whole panel else show the panel
		if (recomendationItems.length === 0) {
			document.querySelector('.ab--recomendation-panel').classList.add('hide-panel');
		} else {
			document.querySelector('.ab--recomendation-panel').classList.remove('hide-panel');
		}

		//if there is 0 items in cart then hide the whole panel

		if (cartItems === 0) {
			document.querySelector('.ab--recomendation-panel').classList.add('hide-panel');
		} else {
			if (recomendationItems.length !== 0) {
				document.querySelector('.ab--recomendation-panel').classList.remove('hide-panel');
			}
		}

}

function recomendationItemArrangement() {
	const oldCartItem = currentCartItems;
	const newCartItem = getCartItemsV2();
	const removedItemFromCart = oldCartItem.filter(item => !newCartItem.includes(item));
	currentCartItems = oldCartItem !== newCartItem ? newCartItem : currentCartItems;
	//hide items from ab-panel if it is already in cart (using this class hide-item)
	const cartItemList = getCartItems();
	document.querySelectorAll('.ab--recomendation-panel__product').forEach(item => item.classList.remove('hide-item'));
	//re inject the items if it is not in cart

	cartItemList.forEach(item => {
		if (products.find(product => product.variants.find(variant => variant.id === Number(item)))) {
			const product = products.find(product => product.variants.find(variant => variant.id === Number(item)));
			//unhide all the items first
			document.querySelector(`.ab--recomendation-panel__product[data-id="${product.id}"]`) &&
				document.querySelector(`.ab--recomendation-panel__product[data-id="${product.id}"]`).classList.add('hide-item');

			//change text of select button to Größe

			document.querySelector(`.ab--recomendation-panel__product[data-id="${product.id}"]`).querySelector('.select-button').textContent = 'Größe';
			document.querySelector(`.ab--recomendation-panel__product[data-id="${product.id}"]`).querySelector('.select-button').value = 0;
		}
	});

	//if length of the item (eccept hide-item) is more tan 3 then add (hide-item) class to the rest of the items
	const recomendationPanel = document.querySelector('.ab--recomendation-panel__wrapper');
	const recomendationItems = recomendationPanel.querySelectorAll('.ab--recomendation-panel__product:not(.hide-item)');
	let availableRecommendationItems = recomendationPanel.querySelectorAll('.ab--recomendation-panel__product:not(.hide-item)').length;

		

		for (let index = recomendationItems.length - 1; index >= 0; index--) {
			const item = recomendationItems[index];
			if (availableRecommendationItems > 3) {
				if(item.getAttribute('data-id') !== removedItemFromCart[0]){
					item.classList.add('hide-item');
					availableRecommendationItems--;				
				}
			}
		}
	


	//if suggested is 0 then hide the whole panel else show the panel
	if (recomendationItems.length === 0) {
		document.querySelector('.ab--recomendation-panel').classList.add('hide-panel');
	} else {
		document.querySelector('.ab--recomendation-panel').classList.remove('hide-panel');
	}

	if (cartItems === 0) {
		document.querySelector('.ab--recomendation-panel').classList.add('hide-panel');
	} else {
		if (recomendationItems.length !== 0) {
			document.querySelector('.ab--recomendation-panel').classList.remove('hide-panel');
		}
	}
}

function getProducts(productsURLs) {
	const promises = productsURLs.map(url => fetch(url).then(res => res.json()));
	return Promise.all(promises);
}

function mainJs(panel) {
	const sidebar = document.querySelector('#sidebar-cart');
	if (!sidebar) return;
	

	if(!window.Swiper){

        (function() {   

                var swiperCSS = document.createElement("link"); 

                swiperCSS.setAttribute("rel", "stylesheet");    

                swiperCSS.setAttribute("href", "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"); 

                document.querySelector("head").appendChild(swiperCSS);  

                var script = document.createElement("script");  

                script.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"; 

                document.head.appendChild(script);

        })();
	}

		waitForElem('.Cart__ItemList .CartItem__Wrapper .CartItem__Info > a', items => {
			currentCartItems = getCartItemsV2();
		})

		
		document.body.addEventListener('click', function(e) {
			if (e.target.closest('.dropdown-list-item') || !e.target.closest('.select-button')) {
		
				document.querySelectorAll('.dropdown-list').forEach(item => {
			
					item.classList.add('open');
				});
			}
		});

		const productsURLs = products.map(product => {
			return `https://snocks.com/products/${product.id}.js`;
		});
		getProducts(productsURLs).then(res => {
			res.forEach(product => {
				const newVariants = product.variants.map(variant => {
					return {
						id: variant.id,
						size: variant.option1,
						available: variant.available,
						title: variant.title,				
					};
				});
				products.find(item => item.id === product.handle).variants = newVariants;

				let price = null;
				if (Shopify.currency.active === 'EUR') {
					price = Number(product.price) / 100;
					price =  ' €' + price;
					// price = ' €' + ' ' + price;
					price = price.replace('.', ',');
				}else if (Shopify.currency.active === 'CHF') {
					price = Number(product.price) / 100;
					price = price.toFixed(2);
					price = ' CHF' + ' ' + price;
					// price = price.replace('.', ',');
				}

				products.find(item => item.id === product.handle).price = price;
				products.find(item => item.id === product.handle).title = product.title;
				products.find(item => item.id === product.handle).url = product.url;
			});

			renderRecomendationPanel();

			waitForElem(
				'.Cart__ItemList .CartItem__Wrapper',
				items => {
					cartItems = Number(document.querySelectorAll('.Cart__ItemList .CartItem__Wrapper').length);
				},
				1,
				false,
				10000,
				1000
			);

			//hide the panel if drawer cart close button is clicked
			document.querySelector('.Drawer__Close').addEventListener('click', function() {
				document.querySelector('.ab--recomendation-panel').classList.add('hide-opacity');
				setTimeout(() => {
					document.querySelector('.ab--recomendation-panel').classList.remove('hide-opacity');
					console.log('adjusted')
				}, 1000);
			});

			detectCartItemChange();
			if(isMobile){
				setTimeout(() => {
					recomendationItemArrangementMobile();
				}, 2000);
			}else{
				recomendationItemArrangement();
			}
			
		});
	// }
	
}

function addLoader(){
	// add a sceleton loader above the drawer footer and remove it when the cart items are loaded
	const loader = document.createElement('div');
	loader.className = 'ab--loader';
	loader.innerHTML = `
	<div class="ab--loader__wrapper">
		<div class="loader-container">
			<div class="loader">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		</div>
	</div>`;
	document.querySelector('.Drawer__Footer') && document.querySelector('.Drawer__Footer').insertAdjacentElement('beforebegin', loader);

	//remove the loader after 3 seconds of recomended items loaded
	setTimeout(() => {
		document.querySelector('.ab--loader') && document.querySelector('.ab--loader').remove();
	}, 3000);
}

waitForElem('#sidebar-cart', mainJs);
waitForElem('.Drawer__Footer', addLoader);






