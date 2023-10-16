import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

const assets = {
    closeIcone : `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 15L8 8L15 15M15 1L7.99867 8L1 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
}


function fetchDataToCart(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const element = doc.querySelector('.custom-cart.cart__container.page__inner')
                resolve(element);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function addToCart(){
    id = '40249698582709'
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
}

function mainJs(body) {
    // Add cart drawer to body
    const cartDrawer = document.createElement('div');
    cartDrawer.classList.add('cart__drawer');
    document.body.prepend(cartDrawer);

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.prepend(overlay);

    const cartIcon = document.querySelector('.cart__icon');

    cartIcon.addEventListener('click', function (event) {
        event.preventDefault();
        cartDrawer.classList.toggle('cart__drawer--open');
        overlay.classList.toggle('overlay--open');
    });

    document.body.addEventListener('click', function (event) {
        if (!cartDrawer.contains(event.target) && !cartIcon.contains(event.target)) {
            cartDrawer.classList.remove('cart__drawer--open');
            overlay.classList.remove('overlay--open');
        }
    });

    const cartHeader = document.createElement('div');
    cartHeader.classList.add('cart__header');
    cartHeader.innerHTML = `
        <h3 class="cart__title">Dein Warenkorb</h3>
        <button class="cart__close">
            ${assets.closeIcone}
        </button>
    `;
    cartDrawer.prepend(cartHeader);
 
    const closeBtn = document.querySelector('.cart__close');
    closeBtn.addEventListener('click', function (event) {
        cartDrawer.classList.remove('cart__drawer--open');
        overlay.classList.remove('overlay--open');
    });

    
    // fetch data and append to cart
    
    const url = 'https://duschbrocken.de/cart'; 
    fetchDataToCart(url)
        .then(cartElement => {
            cartDrawer.appendChild(cartElement);
            cartElement.classList.add('dus-5');
        })
        .catch(error => {
            console.error('Error fetching cart data: ' + error);
        });

    // document.querySelector('.cart__drawer .cart__container').classList.add('dus-5');
    console.log(`Test Name - Variant Name`);
}

waitForElem("body", mainJs);