import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

function mainCss() {

    var styles = document.createElement("style");

    styles.setAttribute("type", "text/css");

    document.head.appendChild(styles).textContent =

        "" +

        /* CSS will be imported here */

        "";

};

const asset ={
    lookIcon:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
            <g clip-path="url(#clip0_3109_1872)">
                <path d="M1 6C1 6 3.55 1 8 1C12.45 1 15 6 15 6C15 6 12.45 11 8 11C3.55 11 1 6 1 6Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 7.5C8.39782 7.5 8.77936 7.34196 9.06066 7.06066C9.34196 6.77936 9.5 6.39782 9.5 6C9.5 5.60218 9.34196 5.22064 9.06066 4.93934C8.77936 4.65804 8.39782 4.5 8 4.5C7.60218 4.5 7.22064 4.65804 6.93934 4.93934C6.65804 5.22064 6.5 5.60218 6.5 6C6.5 6.39782 6.65804 6.77936 6.93934 7.06066C7.22064 7.34196 7.60218 7.5 8 7.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_3109_1872">
                <rect width="16" height="12" fill="white"/>
                </clipPath>
            </defs>
            </svg>`,
    addToCartIcon:`
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 15" fill="none">
    <path d="M4.76953 4.48889H8.07784H8.17784V4.38889C8.17784 3.59474 8.12829 2.98281 7.90757 2.56896C7.80908 2.38429 7.67801 2.24466 7.48807 2.14393C7.29019 2.039 6.98849 1.95556 6.52227 1.95556C6.05606 1.95556 5.75435 2.039 5.55648 2.14393C5.36653 2.24466 5.23546 2.38429 5.13697 2.56896C4.92561 2.96526 4.87122 3.54322 4.86699 4.28889H4.76953L4.76953 4.38889V4.48889ZM3.41116 4.48889H3.51116L3.51116 4.38889C3.51116 3.62817 3.53927 2.68409 3.9409 1.93104C4.15356 1.53231 4.46974 1.18586 4.9214 0.946348C5.36516 0.711019 5.89955 0.6 6.52227 0.6C7.14499 0.6 7.67938 0.711019 8.12315 0.946348C8.5748 1.18586 8.89099 1.53231 9.10365 1.93104C9.50528 2.68409 9.53339 3.62817 9.53339 4.38889V4.48889H9.63339H11.9667C12.341 4.48889 12.6445 4.79234 12.6445 5.16667V13.7222C12.6445 14.0965 12.341 14.4 11.9667 14.4H1.07783C0.7035 14.4 0.400049 14.0965 0.400049 13.7222V5.16667C0.400049 4.79234 0.7035 4.48889 1.07783 4.48889H3.41116ZM1.7556 12.9444V13.0444H1.8556H11.1889H11.2889V12.9444V5.94444V5.84444H11.1889H1.8556H1.7556V5.94444V12.9444Z" fill="white" stroke="#808080" stroke-width="0.2"/>
    </svg>`,
    closeIcon:`
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M15 12.2379L27.1388 0L30 2.8845L3.10516 29.9988L0.244004 27.1143L12.1388 15.1224L0 2.8845L2.86115 0L15 12.2379ZM18.2083 21.2413L21.0694 18.3568L29.7572 27.1155L26.8961 30L18.2083 21.2413Z" fill="black"/>
    </svg>`
}

function cartCheck() {
    document.querySelectorAll('.cross-sell__item-button.medium').forEach((item) => {
        item.addEventListener('click', (e) => {
            console.log('clicked on variant', e.target)

            e.target.closest('.cross-sell__item-wrapper').querySelector('.cross-sell__item-variants.cross-sell__item__variants--shop-the-look').classList.toggle('active')
            
        })
    })
}

function selectedVariant() {
    document.querySelectorAll('.cross-sell__item-variant-list-item').forEach((item) => {
        item.addEventListener('click', (e) => {
            e.target.closest('.cross-sell__item-variant-list-item').classList.add('ab--selected-variant')
            setTimeout(() => {
                e.target.closest('.cross-sell__item-variant-list-item').classList.remove('ab--selected-variant')
            }, 1000)
        })
    })  
}

function mainJs(body) {
    const shopTheLookSection = document.querySelector('.shop-the-look');
	if (!shopTheLookSection) return;
    const imageLabel = document.querySelector('.product-infos__image-label')
    const infoLabel = document.createElement("div");
    infoLabel.classList.add("ab--product-infos__label");
    infoLabel.innerHTML = `<div class='ab--product-infos__label_icon'>
    ${asset.lookIcon}
    </div>
    <span class='ab--product-infos__label_text'>Shop the look</span>`;
    
    imageLabel.insertAdjacentElement('beforebegin', infoLabel)

    if(window.innerWidth >= 922){
        // console.log('I am on desktop')

    //crteate popup

    const overlay = document.createElement('div')
    overlay.classList.add('ab--overlay')
    document.body.appendChild(overlay)

    //add a popup in the middle of the screen
    const popup = document.createElement('div')
    popup.classList.add('ab--popup')
    popup.innerHTML = `
    <div class='ab--popup__content'>
        <div class='ab--popup__content_header_close'>
            <div class='ab--popup__content_header_close_icon'>
            ${asset.closeIcon}
            </div>
        </div>
    </div>
    <div class='ab--popup__content_body'>
    </div>`
    document.body.appendChild(popup)

    //clone shop-the-look and append it to the popup
    const shopTheLook = document.querySelector('.shop-the-look')
    const shopTheLookClone = shopTheLook.cloneNode(true)
    const popupBody = document.querySelector('.ab--popup__content_body')
    popupBody.appendChild(shopTheLookClone)

    document.querySelector('.ab--product-infos__label').addEventListener('click', () => {
        // console.log('clicked on desktop variant')
        // add class to the popup
        popup.classList.add('active')
        overlay.classList.add('active')    
    })

    //if clicked outside and on close button of the popup close the popup
    document.addEventListener('click', (e) => {
        console.log(e.target)
        const popup = document.querySelector('.ab--popup')
        const overlay = document.querySelector('.ab--overlay')
        if (e.target.classList.contains('ab--overlay') || e.target.closest('.ab--popup__content_header_close_icon') ) {
             popup.classList.remove('active')
             overlay.classList.remove('active')
            document.body.style.overflow = 'auto'
        }
    })

        cartCheck();
        selectedVariant();

    }else{
        document.querySelector('.ab--product-infos__label').addEventListener('click', () => {   
            console.log('clicked on variant')
            // scroll to the shop-the-look section and viewport will be scrolled to the top of the element
            const yOffset = -110; 
            const shopTheLook = document.querySelector('.shop-the-look')
            const y = shopTheLook.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }

        )

        // add active class on click of cross-sell__item-button medium to .cross-sell__item-variants.cross-sell__item__variants--shop-the-look
       cartCheck();
       selectedVariant();
    }

 


    document.querySelectorAll('.cross-sell__item-info').forEach((item) => {
        item.insertAdjacentHTML('afterbegin', `
        <div class='ab--product-info-wrapper'>
        </div>
        <div class='ab--product-color'></div>
        `)
        //append cross-sell__item-title and cross-sell__item-price to the wrapper
        const productInfoWrapper = item.querySelector('.ab--product-info-wrapper')
        const productTitle = item.querySelector('.cross-sell__item-title')
        const productPrice = item.querySelector('.cross-sell__item-price')
        productInfoWrapper.appendChild(productTitle)
        productInfoWrapper.appendChild(productPrice)

        //cross-sell__item-button medium
        const productButton = item.querySelector('.cross-sell__item-button.medium')
        productButton.insertAdjacentHTML('afterbegin',
        `<div class='ab--product-info-button-icon'>
        ${asset.addToCartIcon}
        </div>`)

    })
   
    //from cross-sell__item-image get the url from its a tag
    document.querySelectorAll('.cross-sell__item-image a').forEach((item) => {
        const productUrls = item.getAttribute('href')
        console.log(productUrls)
        const endIndex = productUrls.indexOf("?");   
        const extractedPart = endIndex !== -1 ? productUrls.substring(0, endIndex) : productUrls;
        
        console.log(extractedPart,'extractedPart');


        const variantId = productUrls.split('?')[1].split('=')[1]
        console.log(variantId)
        // set variant id as data-variant-id in each .ab--product-color element
        const productColorElement = item.closest('.cross-sell__item').querySelector('.ab--product-color');
        if (productColorElement) {
            productColorElement.setAttribute('data-variant-id', variantId);
        }
       
        const modifiedProductUrls = `https://www.fromfuture.com${extractedPart}.js`
        console.log(modifiedProductUrls)
        //call api

        fetch(modifiedProductUrls)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const productColor = data.variants.find((item) => item.id == variantId).option2
            console.log(productColor)

            //set product color in .ab--product-color element depending on variant id for each product
            const productColorElement = item.closest('.cross-sell__item').querySelector('.ab--product-color');
            if (productColorElement) {
                productColorElement.innerHTML = productColor;
            }
        })  
 

    })

    // set mutation observer on mini-cart__container aria-hidden attribute
    const targetNode = document.querySelector('.mini-cart__container')
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
                if (mutation.attributeName === 'aria-hidden') {
                    if (mutation.target.getAttribute('aria-hidden') === 'false') {
                        // remove active class from all .cross-sell__item-variants.cross-sell__item__variants--shop-the-look
                        document.querySelectorAll('.cross-sell__item-variants.cross-sell__item__variants--shop-the-look').forEach((item) => {
                            item.classList.remove('active')
                        })
                        // hide popup
                        const popup = document.querySelector('.ab--popup')
                        const overlay = document.querySelector('.ab--overlay')
                        popup.classList.remove('active')
                        overlay.classList.remove('active')
                        document.body.style.overflow = 'auto'

                        // set data-variant-shown of class cross-sell__item-container to false
                        document.querySelectorAll('.cross-sell__item-container').forEach((item) => {
                            item.setAttribute('data-variant-shown', 'false')
                        }
                        )

                    }
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    
    document.querySelector('.ab--product-infos__label').addEventListener('click', () => {  
        gtag('event', 'button_click', {
            'click_element': 'shop_the_look_button',
            });
    })

    document.querySelectorAll('.cross-sell__item-button.medium').forEach((item) => {
        item.addEventListener('click', () => {
            gtag('event', 'button_click', {
                'click_element': 'complete_the_look_ATC',
                });
        })
    })
    mainCss();

    console.log(`FRO-76----Variation-01`);

}

waitForElem(".shop-the-look", mainJs);