import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

const assets = {
    icon: `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5314 2.61957L7.09068 10.708C6.46564 11.3071 5.45173 11.3071 4.82609 10.708L0.468959 6.53209C-0.15632 5.93298 -0.15632 4.96119 0.468959 4.36197C1.09436 3.76263 2.10819 3.76263 2.73331 4.36174L5.95872 7.4528L13.2666 0.449334C13.892 -0.150005 14.906 -0.149551 15.5311 0.449334C16.1563 1.04856 16.1563 2.02 15.5314 2.61957Z" fill="white"/>
    </svg>
    `
}

function mainJs(body) {

    let innerHTML = ` 
    <h2 class="b-checkout_step-title"">
    <span class="b-checkout_step-counter">1</span>
    VERSAND
    </h2>
    <div class="b-checkout_step-header__first__bar">
        <div class="b-checkout_step-header__first__bar__inner"></div>
    </div>
        <h2 class="b-checkout_step-title"">
            <span class="b-checkout_step-counter">2</span>
            Bezahlung
        </h2>
    <div class="b-checkout_step-header__second__bar">
        <div class="b-checkout_step-header__second__bar__inner"></div>
    </div>
        <h2 class="b-checkout_step-title"">
            <span class="b-checkout_step-counter">3</span>
            Überprüfung
        </h2>`

    const query = new URLSearchParams(location.search)

    if (query.get('step') == 'shipping') {
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(1)').remove();
        document.querySelector('.l-checkout-main .b-checkout_step-header.m-active').insertAdjacentHTML('beforeend',innerHTML)
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(1)').classList.add('active')
        document.querySelector('.b-checkout_step-header__second__bar__inner').style.width = '0%';
    }else if(query.get('step') == 'billing'){
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(1)').remove();
        document.querySelector('.l-checkout-main .b-checkout_step-header.m-active').insertAdjacentHTML('beforeend', innerHTML)
        document.querySelector('.b-checkout_step-header__first__bar__inner').style.width = '100%';
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(1)').classList.add('active')
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(1) span').classList.add('success')
        document.querySelector('.b-checkout_step-counter.success').innerHTML = assets.icon
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(3)').classList.add('active')
    }else if(query.get('step') == 'summary'){
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(1)').remove();
        document.querySelector('.l-checkout-main .b-checkout_step-header.m-active').insertAdjacentHTML('beforeend', innerHTML)
        document.querySelector('.b-checkout_step-header__first__bar__inner').style.width = '100%';
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(1)').classList.add('active')
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(1) span').classList.add('success')
        document.querySelector('.b-checkout_step-counter.success').innerHTML = assets.icon
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(3)').classList.add('active')
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(3) span').classList.add('success')
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(3) span').innerHTML = assets.icon
        document.querySelector('.b-checkout_step-header.m-active h2:nth-child(5)').classList.add('active')
        document.querySelector('.b-checkout_step-header__second__bar__inner').style.width = '100%';

    }


    // console.clear()
    console.log(`KIC-144......V-01`);

}
window.addEventListener('popstate', function(event) {
    var currentURL = window.location.href;
    
    if(currentURL == 'https://www.kickz.com/de/checkout/?step=shipping'){
        console.log('shipping')
        mainJs()
    }else if(currentURL == 'https://www.kickz.com/de/checkout/?step=billing'){
        console.log('billing')    
        mainJs()
    }else if(currentURL == 'https://www.kickz.com/de/checkout/?step=summary'){
        console.log('summary')
        mainJs()
    }
});

waitForElem(".b-checkout_step-header.m-active h2:nth-child(1)", mainJs);
