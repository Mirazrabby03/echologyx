import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

const assets ={
    infoIcon : `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2500_1168)">
    <rect x="4.375" y="1.75" width="4.375" height="10.5" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00016 0.0141602C5.14762 0.0150163 3.3712 0.751314 2.06126 2.06126C0.751314 3.3712 0.0150163 5.14762 0.0141602 7.00016C0.0150163 8.8527 0.751314 10.6291 2.06126 11.9391C3.3712 13.249 5.14762 13.9853 7.00016 13.9862C8.8527 13.9853 10.6291 13.249 11.9391 11.9391C13.249 10.6291 13.9853 8.8527 13.9862 7.00016C13.9853 5.14762 13.249 3.3712 11.9391 2.06126C10.6291 0.751314 8.8527 0.0150163 7.00016 0.0141602ZM8.28278 7.36631C8.28278 6.6577 7.70878 6.0837 7.00124 6.0837C6.66107 6.0837 6.33375 6.21883 6.09321 6.45937C5.85268 6.69991 5.71755 7.02614 5.71755 7.36631V10.0974C5.71783 10.4374 5.85309 10.7633 6.0936 11.0036C6.3341 11.2439 6.66018 11.3789 7.00016 11.3789C7.70878 11.3789 8.28278 10.8049 8.28278 10.0974V7.36631ZM7.00016 2.61924C6.83158 2.61931 6.66467 2.65258 6.50895 2.71716C6.35324 2.78174 6.21176 2.87635 6.09261 2.9956C5.97346 3.11485 5.87896 3.25641 5.81452 3.41218C5.75007 3.56795 5.71694 3.73489 5.71701 3.90347C5.71708 4.07205 5.75035 4.23896 5.81493 4.39468C5.87951 4.55039 5.97412 4.69187 6.09337 4.81102C6.21262 4.93017 6.35418 5.02467 6.50995 5.08911C6.66572 5.15356 6.83266 5.18669 7.00124 5.18662C7.34169 5.18648 7.66815 5.0511 7.90879 4.81026C8.14943 4.56942 8.28453 4.24285 8.28439 3.90239C8.28425 3.56194 8.14887 3.23548 7.90803 2.99484C7.66719 2.7542 7.34062 2.61909 7.00016 2.61924Z" fill="#7E7E7E"/>
    </g>
    <defs>
    <clipPath id="clip0_2500_1168">
    <rect width="14" height="14" fill="white"/>
    </clipPath>
    </defs>
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
            href.includes('sku=A003104') ||
            href.includes('sku=A003282') ||
            href.includes('sku=A003283') ||
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
let observerCartPage = null;
function mutation(){
    const target = document.querySelector('[data-v-2693725e]');
    const config = { attributes: false, childList: true, subtree: true };
    const callback = function() {
        if (document.querySelector('[data-v-2693725e] > div.fixed') && !document.querySelector('[data-v-2693725e] > div.fixed').classList.contains('bla-113-test')) {
            document.querySelector('[data-v-2693725e] > div.fixed').classList.add('bla-113-test');
            console.log('from mutation---------')
            waitForElem('[data-v-2693725e] > div.fixed', mainJs);
            waitForElem('div[data-v-5dfdfbbc] div[data-v-5dfdfbbc].w-full > a', observerProducts);
        }
         if(!document.querySelector('[data-v-2693725e] > div.inset-0.bla-113-test') && observer !== null){
            // observer.disconnect();
            observer = null;
            observerCartPage = null;
        }
        
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
}

function observerProducts() {
    const target = document.querySelector('.gap-y-6.p-4');
    const config = { attributes: false, childList: true, subtree: false };
    const callback = function() {
        const SKUs = ['A002840', 'A003103', 'A003104', 'A003282', 'A003283', 'A001168', 'A002826', 'A001711', 'A002319'];
        const currentSKUs = [...document.querySelectorAll('div[data-v-5dfdfbbc] div[data-v-5dfdfbbc].w-full > a')].map(elm=>{
            return elm.search.replace('?sku=', "")
        })
        const isAvailable = SKUs.some(sku => currentSKUs.includes(sku));
        if (!isAvailable) {
            const messageContainer = document.querySelector('[data-v-2693725e] .message__container');
            if (messageContainer) {
                messageContainer.remove();
            }
        }else{
            mainJs();
        }
    };
    observer = new MutationObserver(callback);
    observer.observe(target, config);    
}

function observerProductsInCartPage() {
    console.log('observerProductsInCartPage')
    const target = document.querySelector('.root.container > div');
    const config = { attributes: false, childList: true, subtree: true };
    const callback = function() {
        const SKUs = ['A002840', 'A003103','A003104', 'A003282', 'A003283', 'A001168', 'A002826', 'A001711', 'A002319'];
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




