import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

const assets ={
    infoIcon : `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.75" y="1.5" width="3.75" height="9" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99996 0.0119934C4.41207 0.0127272 2.88943 0.64384 1.76662 1.76665C0.643809 2.88946 0.0126967 4.4121 0.0119629 5.99999C0.0126967 7.58789 0.643809 9.11053 1.76662 10.2333C2.88943 11.3561 4.41207 11.9873 5.99996 11.988C7.58785 11.9873 9.1105 11.3561 10.2333 10.2333C11.3561 9.11053 11.9872 7.58789 11.988 5.99999C11.9872 4.4121 11.3561 2.88946 10.2333 1.76665C9.1105 0.64384 7.58785 0.0127272 5.99996 0.0119934ZM7.09935 6.31384C7.09935 5.70646 6.60735 5.21446 6.00089 5.21446C5.70931 5.21446 5.42876 5.33028 5.22258 5.53646C5.01641 5.74263 4.90058 6.02227 4.90058 6.31384V8.65476C4.90082 8.94618 5.01676 9.22557 5.22291 9.43155C5.42906 9.63752 5.70855 9.75323 5.99996 9.75323C6.60735 9.75323 7.09935 9.26123 7.09935 8.65476V6.31384ZM5.99996 2.24492C5.85547 2.24498 5.7124 2.2735 5.57893 2.32885C5.44546 2.3842 5.32419 2.4653 5.22206 2.56752C5.11993 2.66973 5.03894 2.79106 4.9837 2.92458C4.92846 3.0581 4.90006 3.20119 4.90012 3.34569C4.90018 3.49018 4.9287 3.63325 4.98405 3.76672C5.0394 3.90019 5.1205 4.02146 5.22272 4.12359C5.32493 4.22572 5.44626 4.30671 5.57978 4.36195C5.7133 4.41719 5.85639 4.44559 6.00089 4.44553C6.29271 4.44541 6.57253 4.32937 6.77879 4.12293C6.98505 3.9165 7.10086 3.63658 7.10073 3.34476C7.10061 3.05294 6.98457 2.77312 6.77813 2.56686C6.5717 2.3606 6.29178 2.24479 5.99996 2.24492Z" fill="#7E7E7E"/>
    </svg>
    `
}


function mainJs(body) {

    let isElementAdded = false; 
    let isElementAddedCartPage = false; 

    document.querySelectorAll('[data-v-5dfdfbbc].w-full > a').forEach((el) => {
        const href = el.getAttribute('href');

        if (
            href.includes('sku=A002840') ||
            href.includes('sku=A003103') ||
            href.includes('sku=A003282') ||
            href.includes('sku=A001168') ||
            href.includes('sku=A002826') ||
            href.includes('sku=A001711') ||
            href.includes('sku=A002319')
        ) {
            if (!isElementAdded) {
                const cartDrawer = document.querySelector('[data-v-2693725e].overflow-y-scroll > div');
                const newElement = document.createElement('div');
                newElement.classList.add('message__container');

                newElement.innerHTML = `
                    <div class="message__container--icon">
                        ${assets.infoIcon}
                    </div>
                    <div class="message__container--text">
                        <span class="message__container--text-title">Artikel im Warenkorb können aufgrund hoher Nachfrage nicht reserviert werden</span>
                    </div>
                `;

                if (cartDrawer) {
                    if(cartDrawer.querySelector('.message__container')) return;
                    cartDrawer.insertAdjacentElement('afterbegin', newElement);
                }                

                isElementAdded = true; 
            }

            if (!isElementAddedCartPage) {
                const cartPage = document.querySelector('[data-v-366017fd].mb-5');
                const newElement = document.createElement('div');
                newElement.classList.add('message__container');

                newElement.innerHTML = `
                    <div class="message__container--icon">
                        ${assets.infoIcon}
                    </div>
                    <div class="message__container--text">
                        <span class="message__container--text-title">Artikel im Warenkorb können aufgrund hoher Nachfrage nicht reserviert werden</span>
                    </div>
                `;
                
                if (cartPage) {
                    if(cartPage.parentElement.querySelector('.message__container')) return;
                    cartPage.insertAdjacentElement('beforebegin', newElement);
                }

                isElementAddedCartPage = true;
            }
        }
    });

    console.log(`BLA-113: V-02...................`);
}

 let observer = null;
// let observerCartPage = null;
// function mutation(){
//     const target = document.querySelector('[data-v-2693725e]');
//     const config = { attributes: false, childList: true, subtree: true };
//     const callback = function() {
//         if (document.querySelector('[data-v-2693725e] > div.fixed') && !document.querySelector('[data-v-2693725e] > div.fixed').classList.contains('bla-113-test')) {
//             document.querySelector('[data-v-2693725e] > div.fixed').classList.add('bla-113-test');
//             console.log('from mutation---------')
//             waitForElem('[data-v-2693725e] > div.fixed', mainJs);
//             waitForElem('div[data-v-5dfdfbbc] div[data-v-5dfdfbbc].w-full > a', observerProducts);
//         }
//          if(!document.querySelector('[data-v-2693725e] > div.inset-0.bla-113-test') && observer !== null){
//             // observer.disconnect();
//             observer = null;
//             observerCartPage = null;
//         }
        
//     };
//     const observer = new MutationObserver(callback);
//     observer.observe(target, config);
// }

function observerProducts() {
    const target = document.querySelector('.gap-y-6.p-4');
    const config = { attributes: false, childList: true, subtree: false };
    const callback = function() {
        const SKUs = ['A002840', 'A003103', 'A003282', 'A001168', 'A002826', 'A001711', 'A002319'];
        const currentSKUs = [...document.querySelectorAll('div[data-v-5dfdfbbc] div[data-v-5dfdfbbc].w-full > a')].map(elm=>{
            return elm.search.replace('?sku=', "")
        })
        const isAvailable = SKUs.some(sku => currentSKUs.includes(sku));
        if (!isAvailable) {
            const messageContainer = document.querySelector('[data-v-2693725e] .message__container');
            if (messageContainer) {
                messageContainer.remove();
            }
        }
    };
    observer = new MutationObserver(callback);
    observer.observe(target, config);    
}

waitForElem('div[data-v-5dfdfbbc] div[data-v-5dfdfbbc].w-full > a', observerProducts);

function observerProductsInCartPage() {
    console.log('observerProductsInCartPage')
    const target = document.querySelector('.root.container > div');
    const config = { attributes: false, childList: true, subtree: true };
    const callback = function() {
        const SKUs = ['A002840', 'A003103', 'A003282', 'A001168', 'A002826', 'A001711', 'A002319'];
        const currentSKUs = [...document.querySelectorAll('div[data-v-5dfdfbbc] div[data-v-5dfdfbbc].w-full > a')].map(elm=>{
            return elm.search.replace('?sku=', "")
        })
        const isAvailable = SKUs.some(sku => currentSKUs.includes(sku));
        if (!isAvailable) {
            const messageContainer = document.querySelector('.message__container');
            if (messageContainer) {
                messageContainer.remove();
            }
        }
    };
    observer = new MutationObserver(callback);
    observer.observe(target, config);    
}

waitForElem('.root.container > div', observerProductsInCartPage);
mutation();
waitForElem("body", mainJs);






