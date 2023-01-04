import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */
var echoVariation = {
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

		var itemCount = cartJson.item_count;
		var dollar = '$';
		document.querySelector('#header').insertAdjacentHTML(
			'afterend',
			`
            <div class = 'cart_item_container'>
                <div class = 'welcome_header'>
                    <p class="header_text">Welcome back </p> </br> 
                    <p > You have <span class="itemCount"> ${itemCount} </span> items in your cart </p>
                </div>
            </div>`
		);
		cartJson.items.forEach(el => {
			var key = el.key;
			var title = el.product_title;
			var price = el.final_price / 100;
			var quantity = el.quantity;
			var itemCounts = el.item_count;
			var sku = el.sku;
			var vendor = el.vendor;
			var image = el.image;
			var totalPrice = el.line_price / 100;
			var url = el.url;
			var variant_id = el.variant_id;
			if (itemCounts == 0) {
				document.querySelector('.cart_item_container').style.display = 'none';
			}

			document.querySelector('.cart_item_container').insertAdjacentHTML(
				'beforeend',
				`
      
                <div class='cart_image_item_container' 
                    data-item-key='${key}'    
                    data-product-title='${title}'
                    data-variant-title='Default Title'
                    data-variant-price='${price}'
                    data-quantity='${quantity}'
                    data-type='tools'
                    data-sku='${sku}'
                    data-vendor='${vendor}'
                    data-variant='${variant_id}'
                    >

                    <div class='cart_item-image'>
                        <img
                            class='cart-image'
                            src='${image}'
                            alt='h<em>air</em> | blow dryer brush 2.0'/>
                    </div>
                        <div class='cart_item--info'>
                            <div class='cross '>
                                <img src='https://cdn.shopify.com/s/files/1/0495/0596/0091/files/Vector_2.svg?v=1629899010' />
                            </div>
                        <div class='cart_item--details'>
                            <a href='${url}'>
                                <p class='text'>
                                    <span> ${title}</span>
                                </p>
                            </a>
                        </div>
                        <div class='cart_item--priceDetails'>
                            <div class='deal '>
                                <span class='currentPrice'>
                                    ${dollar}${totalPrice}
                                </span>
                            </div>
                        </div>
                
                        <div class='cart_item--action'>
                            <div class='cart_item--actionQuantity'>
                                <div class="counter_area" >
                                    <span class= "minus" > - </span>
                                    <span class="currentItem">${quantity}</span>
                                    <span class="pluse">+</span>
                                </div>
                            </div>
                        </div>
                    
                </div>
                </div>
                     `);
		    });
		document.querySelector('.cart_item_container').insertAdjacentHTML(
			'beforeend',
			`
            <div class="checkout-button">
            <a href="/cart" class="btn animation btn-dark btn-go-to-cart">checkout</a>
            </div>
        `
		);

		document.querySelector('body').addEventListener('click', function(e) {
			if (document.querySelector('.cart_item_container') && document.querySelector('.cart_item_container').contains(e.target)) {
				console.log('You clicked inside the box');
			} else {
				document.querySelector('.cart_item_container').remove();
				document.querySelector('.side-cart').style.display = 'block';
				console.log(e.target);
			}
		});

		document.querySelectorAll('.pluse').forEach(elm => {
			elm.addEventListener('click', function(e) {
				e.preventDefault();
				// var hidden = document.querySelector('.side-cart').classList.add('hidden');
				// console.log("I am triggered", hidden);
				var informationData = e.target.closest('.cart_image_item_container');
				console.log('information data', informationData);

				var currentDataQuantity = informationData.getAttribute('data-quantity');
				var actualPrice = informationData.getAttribute('data-variant-price');
				var body = '%5B' + informationData.getAttribute('data-item-key').replace(':', '%3A') + '%5D=' + (+currentDataQuantity + 1);
				console.log(body);

				let currentItemCount = e.target.closest('.cart_item--actionQuantity').querySelector('.currentItem').textContent;
				var updatedQuantityCount = +currentItemCount + 1;
				if (updatedQuantityCount <= 3) {
					console.log('this is my current quantity', updatedQuantityCount);
					fetch('https://loveamika.com/cart/update.js', {
						'headers': {
							'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
							'x-requested-with': 'XMLHttpRequest'
						},
						'referrer': 'https://loveamika.com/',
						'referrerPolicy': 'strict-origin-when-cross-origin',
						'body': `updates${body}`,
						'method': 'POST',
						'mode': 'cors',
						'credentials': 'include'
					})
						.then(response => response.json())
						.then(data => {
							let currentQuantity = e.target.closest('.cart_item--actionQuantity').querySelector('.currentItem').textContent;
							e.target.closest('.cart_item--actionQuantity').querySelector('.currentItem').textContent = +currentQuantity + 1;
							let currentPrice = e.target.closest('.cart_image_item_container').querySelector('.currentPrice').textContent;
							let onlyPrice = currentPrice.replace(/[^\d.]/g, '');
							var priceTag = (e.target.closest('.cart_image_item_container').querySelector('.currentPrice').textContent = parseInt(onlyPrice) + parseInt(actualPrice));
							e.target.closest('.cart_image_item_container').querySelector('.currentPrice').textContent = `${dollar}${priceTag}`;
							var items = document.querySelector('.itemCount').textContent;
							var totalItem = +items + 1;
							console.log(totalItem);
							document.querySelector('.itemCount').textContent = totalItem;

							var cartCounter = document.querySelector('#cartItemsCount').textContent;
							var totalCount = +cartCounter + 1;
							document.querySelector('#cartItemsCount').textContent = totalCount;

							console.log('this is data', data);
						})
						.catch(error => {
							console.error('Error:', error);
						});
				}

				// var dataVariant =  informationData.getAttribute("data-variant");
				var sku = informationData.getAttribute('data-sku');
				console.log('sku', sku);
				let currentQuantityofCart = e.target.closest('.cart_item--actionQuantity').querySelector('.currentItem').textContent;
				var updatedQuantityofCart = +currentQuantityofCart + 1;
				if (updatedQuantityofCart <= 3) {
					document.querySelectorAll('.side-cart .cart_item').forEach(item => {
						if (item.getAttribute('data-sku') == sku) {
							item.querySelector(`select `).value = updatedQuantityofCart;
							item.querySelector(`select `).dispatchEvent(new Event('change', { bubbles: true }));
							// document.querySelector('.side-cart').classList.add('hidden');
							document.querySelector('.side-cart').classList.remove('active');
							document.querySelector('.side__cart--overlay').classList.remove('active');
							document.querySelector('.mm-slideout').classList.remove('side__cart--active');

							console.log('current quantity', updatedQuantityofCart);
						}
					});
				}
			});
		});

		document.querySelectorAll('.minus').forEach(elm => {
			elm.addEventListener('click', function(e) {
				e.preventDefault();
				var informationData = e.target.closest('.cart_image_item_container');
				console.log('information data', informationData);
				var dataVariant = informationData.getAttribute('data-variant');

				var currentDataQuantity = informationData.getAttribute('data-quantity');
				var actualPrice = informationData.getAttribute('data-variant-price');
				var parsedPrice = parseInt(actualPrice);
				var bodyMinus = '%5B' + informationData.getAttribute('data-item-key').replace(':', '%3A') + '%5D=' + (+currentDataQuantity - 1);
				console.log(bodyMinus);

				let currentItemCount = e.target.closest('.cart_item--actionQuantity').querySelector('.currentItem').textContent;
				var updatedQuantityCount = +currentItemCount - 1;
				if (updatedQuantityCount >= 1) {
					fetch('https://loveamika.com/cart/update.js', {
						'headers': {
							'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
							'x-requested-with': 'XMLHttpRequest'
						},
						'referrer': 'https://loveamika.com/',
						'referrerPolicy': 'strict-origin-when-cross-origin',
						'body': `updates${bodyMinus}`,
						'method': 'POST',
						'mode': 'cors',
						'credentials': 'include'
					})
						.then(response => response.json())
						.then(data => {
							let currentQuantity = e.target.closest('.cart_item--actionQuantity').querySelector('.currentItem').textContent;
							e.target.closest('.cart_item--actionQuantity').querySelector('.currentItem').textContent = +currentQuantity - 1;

							let currentPrice = e.target.closest('.cart_image_item_container').querySelector('.currentPrice').textContent;
							let onlyPrice = currentPrice.replace(/[^\d.]/g, '');
							var priceTag = (e.target.closest('.cart_image_item_container').querySelector('.currentPrice').textContent = parseInt(onlyPrice) - parseInt(actualPrice));
							e.target.closest('.cart_image_item_container').querySelector('.currentPrice').textContent = `${dollar}${priceTag}`;

							var items = document.querySelector('.itemCount').textContent;
							var totalItem = +items - 1;
							console.log(totalItem);
							document.querySelector('.itemCount').textContent = totalItem;

							var cartCounter = document.querySelector('#cartItemsCount').textContent;
							var totalCount = +cartCounter - 1;
							document.querySelector('#cartItemsCount').textContent = totalCount;
							console.log('this is data', data);
						})
						.catch(error => {
							console.error('Error:', error);
						});
				} else {
					var informationData = e.target.closest('.cart_image_item_container');
					var removeItem = '%5B' + informationData.getAttribute('data-item-key').replace(':', '%3A') + '%5D=' + 0;
					fetch('https://loveamika.com/cart/update.js', {
						'headers': {
							'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
							'x-requested-with': 'XMLHttpRequest'
						},
						'referrer': 'https://loveamika.com/',
						'referrerPolicy': 'strict-origin-when-cross-origin',
						'body': `updates${removeItem}`,
						'method': 'POST',
						'mode': 'cors',
						'credentials': 'include'
					})
						.then(response => response.json())
						.then(data => {
							e.target.closest('.cart_image_item_container').remove();
							console.log('this is data', data);
						})
						.catch(error => {
							console.error('Error:', error);
						});
				}
				var sku = informationData.getAttribute('data-sku');
				console.log('sku', sku);
				let currentQuantityofCart = e.target.closest('.cart_item--actionQuantity').querySelector('.currentItem').textContent;
				var updatedQuantityofCart = +currentQuantityofCart - 1;
				if (updatedQuantityofCart >= 1) {
					document.querySelectorAll('.side-cart .cart_item').forEach(item => {
						if (item.getAttribute('data-sku') == sku) {
							item.querySelector(`select `).value = updatedQuantityofCart;
							item.querySelector(`select `).dispatchEvent(new Event('change', { bubbles: true }));
							document.querySelector('.side-cart').classList.remove('active');

							console.log('current quantity', updatedQuantityofCart);
						}
					});
				}
			});
		});

		document.querySelectorAll('.cross').forEach(elm => {
			elm.addEventListener('click', function(e) {
				e.preventDefault();
				function removeItem() {
					var informationData = e.target.closest('.cart_image_item_container');
					var removeItem = '%5B' + informationData.getAttribute('data-item-key').replace(':', '%3A') + '%5D=' + 0;
					fetch('https://loveamika.com/cart/update.js', {
						'headers': {
							'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
							'x-requested-with': 'XMLHttpRequest'
						},
						'referrer': 'https://loveamika.com/',
						'referrerPolicy': 'strict-origin-when-cross-origin',
						'body': `updates${removeItem}`,
						'method': 'POST',
						'mode': 'cors',
						'credentials': 'include'
					})
						.then(response => response.json())
						.then(data => {
							e.target.closest('.cart_image_item_container').remove();
							console.log('this is data', data);
						})
						.catch(error => {
							console.error('Error:', error);
						});
				}
				removeItem();
			});
		});
	}
};

(function pollOnload() {
	if (document.querySelector('body')) {
		try {
			echoVariation.init();
			console.log(`This is a EchoLogyx variation -- running on ${new Date().toLocaleDateString()}`);
		} catch (error) {
			console.log('Initialization error:', error);
		}
	} else {
		setTimeout(pollOnload, 25);
	}
})();
