import './styles/index.scss';

/* DO NOT IMPORT ANYTHING */

// function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
// 	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

// 	if (timer <= 0) return;

// 	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
// 		? callback(elements)
// 		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
// }

const assets = {
	deliveryIcon: `<svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2664_708)">
    <path d="M16.6888 11.895H10.0229" stroke="#1B1B1B" stroke-width="0.8" stroke-miterlimit="10"/>
    <path d="M21.2771 11.8949H23.0616C23.3937 11.8949 23.6632 11.6256 23.6632 11.2933V7.76392C23.6632 7.62476 23.6151 7.49009 23.5269 7.38242L18.2747 0.976758C18.1604 0.837425 17.9897 0.756592 17.8096 0.756592H1.59825C1.26608 0.756592 0.996582 1.02593 0.996582 1.35826V11.1631C0.996582 11.4953 1.26592 11.7648 1.59825 11.7648H3.13625" stroke="#1B1B1B" stroke-width="0.8" stroke-miterlimit="10"/>
    <path d="M15.4082 0.756836C15.4082 3.151 16.0405 7.55084 21.3895 7.55084" stroke="#1B1B1B" stroke-width="0.8" stroke-miterlimit="10"/>
    <path d="M5.44666 14.2371C6.7402 14.2371 7.78883 13.1884 7.78883 11.8949C7.78883 10.6014 6.7402 9.55273 5.44666 9.55273C4.15312 9.55273 3.10449 10.6014 3.10449 11.8949C3.10449 13.1884 4.15312 14.2371 5.44666 14.2371Z" stroke="#1B1B1B" stroke-width="0.8" stroke-miterlimit="10"/>
    <path d="M19.0311 14.2371C20.3247 14.2371 21.3733 13.1884 21.3733 11.8949C21.3733 10.6014 20.3247 9.55273 19.0311 9.55273C17.7376 9.55273 16.689 10.6014 16.689 11.8949C16.689 13.1884 17.7376 14.2371 19.0311 14.2371Z" stroke="#1B1B1B" stroke-width="0.8" stroke-miterlimit="10"/>
    <path d="M6.39111 8.32964C6.39111 8.32964 6.59928 5.62314 10.2686 3.87964" stroke="#1B1B1B" stroke-width="0.8" stroke-miterlimit="10"/>
    <path d="M12.8448 3.20289C12.8448 3.20289 11.908 2.21406 9.61781 2.60439C7.34681 2.99156 5.87865 4.33089 7.01198 6.65889C7.45781 7.57489 9.40965 8.35556 10.7628 6.01339C12.116 3.67123 12.8448 3.20289 12.8448 3.20289Z" stroke="#1B1B1B" stroke-width="0.8" stroke-miterlimit="10"/>
    </g>
    <defs>
    <clipPath id="clip0_2664_708">
    <rect width="23.3333" height="14" fill="white" transform="translate(0.663086 0.5)"/>
    </clipPath>
    </defs>
    </svg>`,

    deliveryIconMobile : `
    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2792_274)">
    <path d="M13.2582 8.95322H8.02075" stroke="#1B1B1B" stroke-width="0.6" stroke-miterlimit="10"/>
    <path d="M16.8631 8.95321H18.2653C18.5262 8.95321 18.738 8.74159 18.738 8.48047V5.70742C18.738 5.59808 18.7001 5.49227 18.6309 5.40767L14.5042 0.374648C14.4143 0.265172 14.2802 0.20166 14.1387 0.20166H1.4012C1.14022 0.20166 0.928467 0.413279 0.928467 0.674398V8.3782C0.928467 8.63918 1.14009 8.85093 1.4012 8.85093H2.60963" stroke="#1B1B1B" stroke-width="0.6" stroke-miterlimit="10"/>
    <path d="M12.2521 0.201782C12.2521 2.08291 12.7489 5.53993 16.9517 5.53993" stroke="#1B1B1B" stroke-width="0.6" stroke-miterlimit="10"/>
    <path d="M4.42487 10.7935C5.44122 10.7935 6.26514 9.96954 6.26514 8.95319C6.26514 7.93683 5.44122 7.11292 4.42487 7.11292C3.40851 7.11292 2.58459 7.93683 2.58459 8.95319C2.58459 9.96954 3.40851 10.7935 4.42487 10.7935Z" stroke="#1B1B1B" stroke-width="0.6" stroke-miterlimit="10"/>
    <path d="M15.0985 10.7935C16.1148 10.7935 16.9387 9.96954 16.9387 8.95319C16.9387 7.93683 16.1148 7.11292 15.0985 7.11292C14.0821 7.11292 13.2582 7.93683 13.2582 8.95319C13.2582 9.96954 14.0821 10.7935 15.0985 10.7935Z" stroke="#1B1B1B" stroke-width="0.6" stroke-miterlimit="10"/>
    <path d="M5.16699 6.15186C5.16699 6.15186 5.33055 4.02532 8.2136 2.65543" stroke="#1B1B1B" stroke-width="0.6" stroke-miterlimit="10"/>
    <path d="M10.2379 2.12376C10.2379 2.12376 9.50178 1.34682 7.70236 1.65351C5.918 1.95771 4.76444 3.01005 5.65492 4.83919C6.00522 5.55891 7.5388 6.17229 8.602 4.33201C9.66521 2.49174 10.2379 2.12376 10.2379 2.12376Z" stroke="#1B1B1B" stroke-width="0.6" stroke-miterlimit="10"/>
    </g>
    <defs>
    <clipPath id="clip0_2792_274">
    <rect width="18.3333" height="11" fill="white" transform="translate(0.666504)"/>
    </clipPath>
    </defs>
    </svg>

    `
};

function newTrElement() {
    const newTr = document.createElement('tr');
    newTr.classList.add('total-line--shipping');
    newTr.innerHTML = `
    <th class="total-line__name" scope="row">
        <span></span>
    </th>
        <td class="total-line__price delivery__details">
        <span class="order-summary__emphasis__new">Delivery in 1-3 Days</span>
        </td>
    `;
    document.querySelector('.total-line-table__tbody').insertAdjacentElement('beforeend', newTr);
}

function newTrElementDe() {
    const newTr = document.createElement('tr');
    newTr.classList.add('total-line--shipping');
    newTr.innerHTML = `
    <th class="total-line__name" scope="row">
        <span></span>
    </th>
        <td class="total-line__price delivery__details">
        <span class="order-summary__emphasis__new">Delivery in 1-3 Days</span>
        </td>
    `;
    document.querySelector('.total-line-table__tbody').insertAdjacentElement('beforeend', newTr);
}

function mainJs(body) {
	
    // var currentPage = null;
    var currentLanguage = null;
     
    let pathname = location.pathname;

	// for (var i = 0; i < dataLayer.length; i++) {
	// 	if (dataLayer[i].page && dataLayer[i].page.pageType) {
	// 		currentPage = dataLayer[i].page.pageType;
	// 		break;
	// 	}
	// }

    for (var i = 0; i < dataLayer.length; i++) {
		if (dataLayer[i].page && dataLayer[i].page.pageType) {
			currentLanguage = dataLayer[i].page.language;
			break;
		}
	}
    
    // For CART Drawer

    if(pathname.includes('checkout')){

            const priceText = document.querySelector('.total-line__price .order-summary__emphasis').getAttribute('data-checkout-subtotal-price-target');
            const priceContent = document.querySelector('.total-line--shipping .order-summary__emphasis');
            const mobilePriceContent = document.querySelector('.total-line--shipping .order-summary__small-text');
            const price = priceText.slice(0, -2);
            const newPrice = Number(price);
            console.log(newPrice);
    
            var desiredStep = null;
    
            for (var i = 0; i < dataLayer.length; i++) {
                if (dataLayer[i].page && dataLayer[i].page.step) {
                    desiredStep = dataLayer[i].page.step;
                    break;
                }
            }
    
            //For CONTACT INFORMATION
            if (desiredStep == 'contact_information') {
                if (price < 150) { 
                    document.querySelector('.payment-due__price').textContent = `€${newPrice + 5}.00`;
                    if(currentLanguage === 'de'){
                        document.querySelector('.payment-due__price').textContent = `${newPrice + 5},00 €`;
                    }
                    if (localStorage.getItem('orderSummaryEmphasis') == 'Delivery in 1-3 Days') {
                        if(window.innerWidth < 768){
                            mobilePriceContent.innerHTML = `€5.00`;
                            newTrElement();
                            if(currentLanguage === 'de'){
                                mobilePriceContent.innerHTML = `5,00 €`;
                                newTrElement();
                                document.querySelector('.order-summary__emphasis__new').textContent = 'Lieferung in 2-6 Tagen';
                            }
                        }
                        priceContent.innerHTML = `€5.00 <br/> Delivery in 2-6 Days`;
                        if(currentLanguage === 'de'){
                            priceContent.innerHTML = `5,00 €<br/> Lieferung in 2-6 Tagen`;
                        }
                    } else if (localStorage.getItem('orderSummaryEmphasis') == 'Delivery in 1-2 Days') {
                        priceContent.innerHTML = `€10.00 <br/> Delivery in 2-6 Days`;
                        document.querySelector('.payment-due__price').textContent = `€${newPrice + 10}.00`;
                        if(currentLanguage === 'de'){
                            priceContent.innerHTML = `10,00 €<br/> Lieferung in 2-6 Tagen`;
                            document.querySelector('.payment-due__price').textContent = `${newPrice + 10},00 €`;
                        }
                    } else {
                        
                        if(currentLanguage === 'de'){
                            if(localStorage.getItem('orderSummaryEmphasis') == 'Lieferung in 1-3 Tagen'){
                                document.querySelector('.payment-due__price').textContent = `€${newPrice + 5}.00`;
                                priceContent.innerHTML = `€5.00`;
                                newTrElementDe();
                            } else if(localStorage.getItem('orderSummaryEmphasis') == 'Lieferung in 1-2 Tagen'){
                                document.querySelector('.payment-due__price').textContent = `€${newPrice + 10}.00`;
                                priceContent.innerHTML = `€10.00`;
                                newTrElementDe();
                                document.querySelector('.order-summary__emphasis__new').textContent = 'Lieferung in 1-2 Tagen';
                            }else{
    
                                mobilePriceContent.innerHTML = `€5.00`;
                                newTrElementDe();
                            }
                            // priceContent.innerHTML = `5,00 €<br/> Lieferung in 2-6 Tagen`;
                        }else{
                            document.querySelector('.total-line--shipping .order-summary__small-text').innerHTML = `€5.00 <br/> Delivery in 2-6 Days`;
                            if(window.innerWidth < 768){
                                mobilePriceContent.innerHTML = `€5.00`;
                                newTrElement();
                            }
                        }
                    }
                } else if (price >= 150) {
    
                    if(window.innerWidth < 768){
                        if(currentLanguage === 'de'){
                            if(localStorage.getItem('orderSummaryEmphasis') == 'Lieferung in 1-3 Tagen'){
                                mobilePriceContent.innerHTML = `Kostenlos`;
                                newTrElementDe();
                            }else if(localStorage.getItem('orderSummaryEmphasis') == 'Lieferung in 1-2 Tagen'){
                                // mobilePriceContent.innerHTML = `Kostenlos`;
                                newTrElementDe();
                                document.querySelector('.order-summary__emphasis__new').textContent = 'Lieferung in 1-2 Tagen';
                            }else{
                                mobilePriceContent.innerHTML = `Kostenlos`;
                                newTrElementDe();
                            }
    
                        }
                        if(localStorage.getItem('orderSummaryEmphasis') == 'Delivery in 1-2 Days'){
                            newTrElement();
                            document.querySelector('.order-summary__emphasis__new').textContent = 'Delivery in 1-2 Days';
                        }else if(localStorage.getItem('orderSummaryEmphasis') == 'Delivery in 1-3 Days'){
                            mobilePriceContent.innerHTML = `For Free`;
                            newTrElement();
                        }else{
                            mobilePriceContent.innerHTML = `For Free`;
                            newTrElement();
                        }
            
                    } else{
                        document.querySelector('.payment-due__price').textContent = `€${newPrice}.00`;
                        if(priceContent){
                            priceContent.innerHTML = `For Free <br/> Delivery in 2-6 Days`;
                        }else{
                            document.querySelector('.total-line--shipping .order-summary__small-text').innerHTML = `For Free <br/> Delivery in 2-6 Days`;
                        }
                        if(currentLanguage === 'de'){
                            priceContent.innerHTML = `Kostenlos <br/> Lieferung in 2-6 Tagen`;
                        }
    
                    }
                    
                }
            }
    
            //For SHIPPING METHOD
            else if (desiredStep === 'shipping_method') {
                const divElements = document.querySelectorAll('fieldset.content-box .content-box__row .radio-wrapper');
                const priceElement = document.querySelector('.total-line-table__tbody');
            
                const newTr = document.createElement('tr');
                newTr.classList.add('total-line--shipping');
                newTr.innerHTML = `
                <th class="total-line__name" scope="row">
                    <span></span>
                </th>
                    <td class="total-line__price delivery__details">
                    <span class="order-summary__emphasis__new">Delivery in 1-3 Days</span>
                    </td>
                `;
                priceElement.insertAdjacentElement('beforeend', newTr);
    
                const orderSummaryEmphasis = document.querySelector('.total-line--shipping .order-summary__emphasis__new');
    
                document.querySelector('.total-line--shipping .order-summary__emphasis').remove();
    
                document.querySelector('.total-line--shipping .total-line__price').insertAdjacentHTML('beforeend', `<span class="order-summary__type"></span>`);
    
                divElements.forEach(elm => {
        
    
                    if (elm === divElements[0]) {
                        elm.querySelector('.content-box__emphasis').textContent = 'Delivery in 1-3 Days';
                    } else if (elm === divElements[1]) {
                        elm.querySelector('.content-box__emphasis').textContent = 'Delivery in 1-3 Days';
                    } else if (elm === divElements[2]) {
                        elm.querySelector('.content-box__emphasis').textContent = 'Delivery in 1-2 Days';
                    }
    
                    if(currentLanguage === 'de'){
                        if (elm === divElements[0]) {
                            elm.querySelector('.content-box__emphasis').textContent = 'Lieferung in 1-3 Tagen';
                        } else if (elm === divElements[1]) {
                            elm.querySelector('.content-box__emphasis').textContent = 'Lieferung in 1-3 Tagen';
                        } else if (elm === divElements[2]) {
                            elm.querySelector('.content-box__emphasis').textContent = 'Lieferung in 1-2 Tagen';
                        } 
                    }
                });
                
    
                function currentItem() {
                    document.querySelectorAll('fieldset.content-box input').forEach(elm=>{
                        if(elm.checked === true){
                            const delivaryType = elm.getAttribute("data-backup").replaceAll("%20", " ");
                            console.log('Miraz', delivaryType);
                            
                            if(delivaryType.includes('shopify-UPS Express')){
                                console.log('inside Express');
                                orderSummaryEmphasis.textContent = 'Delivery in 1-2 Days';
                                document.querySelector('.order-summary__type').textContent = '€10.00';
                                localStorage.setItem('orderSummaryEmphasis', 'Delivery in 1-2 Days')
                                
                                if(currentLanguage === 'de'){
                                    orderSummaryEmphasis.textContent = 'Lieferung in 1-2 Tagen';
                                    document.querySelector('.order-summary__type').textContent = '10,00 €';
                                    localStorage.setItem('orderSummaryEmphasis', 'Lieferung in 1-2 Tagen')
                                }
    
                            }else if(delivaryType.includes('shopify-DHL Standard')){
                                console.log('inside DHL');
                                orderSummaryEmphasis.textContent = 'Delivery in 1-3 Days';
                                if(currentLanguage === 'de'){
                                    orderSummaryEmphasis.textContent = 'Lieferung in 1-3 Tagen';
                                }
                                if(price >= 150){
                                    document.querySelector('.order-summary__type').textContent = 'For Free';
                                    if(currentLanguage === 'de'){
                                        document.querySelector('.order-summary__type').textContent = 'Kostenlos';
                                    } 
                                }else if(price < 150){
                                    document.querySelector('.order-summary__type').textContent = '€5.00';
                                    if(currentLanguage === 'de'){
                                        document.querySelector('.order-summary__type').textContent = '5,00 €';
                                    }
                                }
                                localStorage.setItem('orderSummaryEmphasis', storedText)           
    
                            }else if(delivaryType.includes('shopify-UPS Standard')){
                                console.log('inside UPS');
                                orderSummaryEmphasis.textContent = 'Delivery in 1-3 Days';
                                if(currentLanguage === 'de'){
                                    orderSummaryEmphasis.textContent = 'Lieferung in 1-3 Tagen';
                                }
                                if(price >= 150){
                                    document.querySelector('.order-summary__type').textContent = 'For Free';
                                    if(currentLanguage === 'de'){
                                        document.querySelector('.order-summary__type').textContent = 'Kostenlos';
                                    }
                                }else if(price < 150){
                                    document.querySelector('.order-summary__type').textContent = '€5.00';
                                    if(currentLanguage === 'de'){
                                        document.querySelector('.order-summary__type').textContent = '5,00 €';
                                    }
                                }
                                localStorage.setItem('orderSummaryEmphasis', storedText)           
    
                            }
                        }
                    })
                }
    
                document.querySelectorAll('fieldset.content-box input').forEach(elm=>{
                    elm.addEventListener('input', ()=>{
                        currentItem();
                    })
                })
                currentItem(); 
                const storedText = orderSummaryEmphasis.textContent;
                localStorage.setItem('orderSummaryEmphasis', storedText)           
            }
            //For PAYMENT METHOD
            else if (desiredStep === 'payment_method') {
                const deliveryText = localStorage.getItem('orderSummaryEmphasis');
                console.log(localStorage.getItem('orderSummaryEmphasis'));
                const priceElement = document.querySelector('.total-line-table__tbody');
    
                const newTr = document.createElement('tr');
                newTr.classList.add('total-line--shipping');
                newTr.innerHTML = `
                <th class="total-line__name" scope="row">
                    <span></span>
                </th>
                    <td class="total-line__price delivery__details">
                    <span class="order-summary__emphasis__new">${deliveryText}</span>
                    </td>
                `;
    
                priceElement.insertAdjacentElement('beforeend', newTr);
                if(price >= 150){
                    if (deliveryText === 'Delivery in 1-3 Days') {
                        document.querySelector('.total-line--shipping .order-summary__emphasis').innerHTML = 'For Free';
                    }else if(deliveryText === 'Lieferung in 1-3 Tagen'){
                        document.querySelector('.total-line--shipping .order-summary__emphasis').innerHTML = 'Kostenlos';
                    }
                }
                else if(price < 150){
                    if (deliveryText === 'Delivery in 1-3 Days') {
                        document.querySelector('.total-line--shipping .order-summary__emphasis').innerHTML = '€5.00';
                        
                    }else if (deliveryText === 'Delivery in 1-2 Days') {
                        document.querySelector('.total-line--shipping .order-summary__emphasis').innerHTML = '€10.00';
                      
                    }else if(deliveryText === 'Lieferung in 1-3 Tagen'){
                        document.querySelector('.total-line--shipping .order-summary__emphasis').innerHTML = '5,00 €';
                    }else if(deliveryText === 'Lieferung in 1-2 Tagen'){
                        document.querySelector('.total-line--shipping .order-summary__emphasis').innerHTML = '10,00 €';
                    }
                }
            }
            //For REVIEW
            else if (desiredStep === 'review') {
                console.log('inside review');
                const deliveryText = localStorage.getItem('orderSummaryEmphasis');
                console.log(localStorage.getItem('orderSummaryEmphasis'));
                const orderSummary = document.querySelector('.order-summary__section tbody.total-line-table__tbody');
    
                const newTr = document.createElement('tr');
                newTr.classList.add('total-line--shipping');
                newTr.innerHTML = `
                <th class="total-line__name" scope="row">
                    <span></span>
                </th>
                    <td class="total-line__price delivery__details">
                    <span class="order-summary__emphasis__new">${deliveryText}</span>
                    </td>
                `;
    
                orderSummary.insertAdjacentElement('beforeend', newTr);
    
                if (deliveryText === 'Delivery in 1-3 Days') {
                    if(price >= 150){
                        document.querySelector('.order-summary__section .total-line--shipping .order-summary__emphasis').innerHTML = 'For Free';
                        if(currentLanguage === 'de'){
                            document.querySelector('.order-summary__section .total-line--shipping .order-summary__emphasis').innerHTML = 'Kostenlos';
                        }
                    }else if (price < 150){
                        document.querySelector('.order-summary__section .total-line--shipping .order-summary__emphasis').innerHTML = '€5.00';
                        if(currentLanguage === 'de'){
                            document.querySelector('.order-summary__section .total-line--shipping .order-summary__emphasis').innerHTML = '5,00 €';
                        }
                    }
                }
                document.querySelector('.review-block:nth-child(3) .review-block__link').insertAdjacentHTML('beforeend', `
                <span class="order-delivery__type">${deliveryText}</span>
                `)
            }
        
    }
    else if (!pathname.includes('checkout') && !pathname.includes('cart')) {
        document.querySelector('.main-layout__header').classList.add('Hor-8');

        const cartItemContainer = document.querySelector('.main-layout__header .cart-slide-in-padding-container');
        const cartHeadline = document.querySelector('.main-layout__header .slide-in-cart-headline');
        //create a div element
        const cartHeader = document.createElement('div');
        cartHeader.classList.add('cart__header__container');
        cartHeader.innerHTML = `<div class='delivery__container'>
            <div class='delivery__icon'>
                ${assets.deliveryIcon}
            </div>
            <span class='delivery__description'>Delivery in 1-3 Days</span>
        </div>`;

        cartItemContainer.insertAdjacentElement('afterbegin', cartHeader);
        cartHeader.prepend(cartHeadline);
        if(window.innerWidth < 768){
            cartHeader.querySelector('.delivery__icon').innerHTML = assets.deliveryIconMobile;
        }
        if(location.pathname.includes('/de/')){
            document.querySelector('.delivery__description').textContent = 'Lieferung in 2-6 Tagen';
        }
    }
	//FOR CHECKOUT PAGE

	


	console.log(`HOR-8--------V-01`);
}


let waitForElem = ((waitFor, callback, minElements = 1, variable = false) => {
    function checkElements() {
      if (variable) {
        return waitFor;
      } else {
        return window.document.querySelectorAll(waitFor);
      }
    }

    var thisElem = checkElements(),
      timeOut;
    if ((!variable && thisElem.length >= minElements) || (variable && typeof thisElem !== "undefined")) {
      return callback(thisElem);
    } else {
      var interval = setInterval(function() {
        thisElem = checkElements();
        if ((!variable && thisElem.length >= minElements) || (variable && typeof thisElem !== "undefined")) {
          clearInterval(interval);
          clearTimeout(timeOut);
          return callback(thisElem);
        }
      }, 20);
      timeOut = setTimeout(function() {
        // Fallback
        clearInterval(interval);
        return callback(false);
      }, 10000);
    }
});

waitForElem('.main-layout__header .cart-slide-in-padding-container, .wrap', ()=>{
    let pathname = location.pathname;
    if(pathname.includes('checkout')){
        setTimeout( mainJs, 2000)
    }else mainJs()
});
