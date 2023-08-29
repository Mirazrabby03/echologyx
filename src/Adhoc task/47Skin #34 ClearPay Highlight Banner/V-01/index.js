import "./styles/index.scss";
/* DO NOT IMPORT ANYTHING */

// function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
//     let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
//     if (timer <= 0) return;
//     (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
// }
let echoVariation = {
    init: function () {
        this.mainCss();
        this.mainJs();
    },
    mainCss: function () {
        var styles = document.createElement("style");
        styles.setAttribute("type", "text/css");
        document.head.appendChild(styles).textContent =
            "" +
            /* CSS will be imported here */

            "";
    },
    mainJs: function () {
        document.querySelector('.Product__Wrapper').classList.add('highlight-banner');
        let customBanner = document.createElement('div')
            customBanner.innerHTML = ` <div class='banner-section'>
            <div class='banner-section__content'>
                <div class='banner-section__content__text'>
                    <p>Shop now.Pay Later.
                    <br>
                    Always interest-free.</p>   
                </div>
                <div class='banner-section__content__logo'>
                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="100" height="31" viewBox="0 0 102 21" class="compact-badge-logo-banner">
                <path fill= #ff000000 d="M89.85 20.92h-78.9a10.42 10.42 0 110-20.82h78.89a10.42 10.42 0 010 20.83v-.01z" class="afterpay-logo-badge-background"></path>
                <g class="afterpay-logo-badge-lockup">
                  <path d="M72.05 6.76l-5.13 10.57H64.8l1.91-3.95-3-6.62h2.18l1.93 4.44 2.11-4.44h2.12z"></path>
                  <path d="M52.55 10.52c0-1.22-.92-2.15-2.04-2.15-1.13 0-2.04.9-2.04 2.15 0 1.23.91 2.14 2.04 2.14 1.12 0 2.04-.93 2.04-2.14m-5.94 6.81V6.76h1.84v.98a2.98 2.98 0 012.37-1.12c2.03 0 3.62 1.67 3.62 3.88 0 2.2-1.62 3.88-3.67 3.88a2.9 2.9 0 01-2.26-1v3.95h-1.9z"></path>
                  <path d="M61.1 10.52c0-1.27-.92-2.15-2.04-2.15-1.13 0-2.04.9-2.04 2.15 0 1.23.91 2.14 2.04 2.14 1.12 0 2.04-.89 2.04-2.14m.01 3.75v-.97a3 3 0 01-2.37 1.09c-2.06 0-3.62-1.65-3.62-3.87 0-2.2 1.62-3.89 3.67-3.89a3 3 0 012.32 1.08v-.95h1.85v7.5H61.1z"></path>
                  <path d="M43.28 7.5s.46-.88 1.62-.88c.5 0 .8.17.8.17v1.92s-.69-.43-1.33-.34c-.63.09-1.04.67-1.04 1.45v4.45h-1.9v-7.5h1.84v.73z"></path>
                  <path d="M86.37 6.34L84.2 5.09l-2.22-1.27a2.2 2.2 0 00-3.3 1.9v.3c0 .15.09.3.22.37l1.03.59c.29.16.64-.05.64-.37v-.68c0-.34.36-.54.65-.38l2.02 1.16 2.02 1.16c.3.16.3.59 0 .75l-2.02 1.16-2.02 1.16a.44.44 0 01-.65-.38v-.33a2.2 2.2 0 00-3.3-1.91l-2.21 1.27-2.19 1.25a2.2 2.2 0 000 3.82l2.19 1.25 2.21 1.27a2.2 2.2 0 003.3-1.9v-.3c0-.15-.08-.3-.22-.37l-1.03-.59a.43.43 0 00-.64.37v.68c0 .34-.36.54-.65.38L76 14.29 74 13.13a.43.43 0 010-.75L76 11.22l2.02-1.16c.3-.16.65.05.65.38v.33a2.2 2.2 0 003.3 1.91l2.22-1.27 2.18-1.25a2.2 2.2 0 000-3.82z"></path>
                  <path d="M20.22 11.47a3.77 3.77 0 01-3.81 2.91 3.8 3.8 0 01-3.89-3.87c0-2.2 1.7-3.89 3.92-3.89A3.78 3.78 0 0120.2 9.5h-1.95a2.04 2.04 0 00-1.8-1.12c-1.11 0-2.04.92-2.04 2.13s.93 2.13 2.04 2.13c.8 0 1.49-.45 1.81-1.17h1.96z"></path>
                  <path d="M21.1 14.26V3.67h1.88v10.6H21.1z"></path>
                  <path d="M25.83 11a1.86 1.86 0 001.93 1.75c.8 0 1.4-.38 1.77-.98h1.93c-.45 1.6-1.87 2.61-3.75 2.61-2.27 0-3.85-1.59-3.85-3.85s1.68-3.9 3.9-3.9a3.75 3.75 0 013.8 4.38h-5.73zm3.76-1.17c-.13-.97-.93-1.56-1.86-1.56-.92 0-1.69.57-1.88 1.56h3.74z"></path>
                  <path d="M38.35 14.26v-.97a3 3 0 01-2.36 1.1c-2.06 0-3.62-1.66-3.62-3.88 0-2.2 1.62-3.89 3.66-3.89.96 0 1.77.42 2.32 1.08v-.94h1.85v7.5h-1.85zm-.01-3.75c0-1.26-.92-2.15-2.05-2.15-1.12 0-2.04.9-2.04 2.15 0 1.23.92 2.15 2.04 2.15 1.13 0 2.05-.89 2.05-2.15z"></path>
                </g>
                </svg>
                </div>
            </div>
        </div>`
        
        if(window.innerWidth >= 990){  
        document.querySelector('.stamped-product-reviews-badge').insertAdjacentElement('afterend', document.querySelector('.ProductMeta__PriceList.Heading'));
        document.querySelector("afterpay-placement").shadowRoot.querySelector('.afterpay-logo').style.display = 'none';
        
        let spanElement = document.querySelector("afterpay-placement").shadowRoot.querySelector('.afterpay-main-text'); 
        spanElement.innerHTML = spanElement.innerHTML.replace(' with ', '');
        document.querySelector('.ProductMeta__PriceList.Heading').insertAdjacentElement('afterend', customBanner)

        } else{
            document.querySelector('.Product__Wrapper').insertAdjacentElement('afterbegin', customBanner)
        }
     },
};
// waitForElem(".Product__Wrapper", (elements) => {
//     if (elements) {
//         console.log(`47Skin #34 ClearPay Highlight Banner`);
//         echoVariation.init();
//     }
// });

(function waitFor(){
    if(document.querySelector("afterpay-placement")){
        (function waitFor1(){
            if(document.querySelector("afterpay-placement").shadowRoot.querySelector('.afterpay-main-text')){
                
                console.log(`47Skin #34 ClearPay Highlight Banner`);
                echoVariation.init();
            } else{
                setTimeout(waitFor1, 300);
            }
        })();        
    } else{
        setTimeout(waitFor, 300);
    }
})();
