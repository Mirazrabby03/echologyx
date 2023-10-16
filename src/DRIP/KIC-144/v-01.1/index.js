import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

function mainJs() {
    console.log(`KIC-144..... v-01`);

    //write a polling function to check device and browser type using window.bowser and add a class to the body

   
    const pagination = document.createElement('div');
    pagination.classList.add('ab--pagination');
    pagination.innerHTML = `
        <div class="item info">
            <span class="text">
                <p class="number">1</p>
                <svg class="sucess-icon" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5314 2.61957L7.09068 10.708C6.46564 11.3071 5.45173 11.3071 4.82609 10.708L0.468959 6.53209C-0.15632 5.93298 -0.15632 4.96119 0.468959 4.36197C1.09436 3.76263 2.10819 3.76263 2.73331 4.36174L5.95872 7.4528L13.2666 0.449334C13.892 -0.150005 14.906 -0.149551 15.5311 0.449334C16.1563 1.04856 16.1563 2.02 15.5314 2.61957Z" fill="white"/>
                </svg>
            </span>
            
            <h3 class="title">VERSAND</h3>
        </div>
        <div class="item bar">
            <div class="inner"></div>
        </div>
        <div class="item info">
            <span class="text">
                <p class="number">2</p>
                <svg class="sucess-icon" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5314 2.61957L7.09068 10.708C6.46564 11.3071 5.45173 11.3071 4.82609 10.708L0.468959 6.53209C-0.15632 5.93298 -0.15632 4.96119 0.468959 4.36197C1.09436 3.76263 2.10819 3.76263 2.73331 4.36174L5.95872 7.4528L13.2666 0.449334C13.892 -0.150005 14.906 -0.149551 15.5311 0.449334C16.1563 1.04856 16.1563 2.02 15.5314 2.61957Z" fill="white"/>
                </svg>
            </span>
            <h3 class="title">BEZAHLUNG</h3>
        </div>
        <div class="item bar">
            <div class="inner"></div>
        </div>
        <div class="item info">
            <span class="text">
                <p class="number">3</p>
                <svg class="sucess-icon" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5314 2.61957L7.09068 10.708C6.46564 11.3071 5.45173 11.3071 4.82609 10.708L0.468959 6.53209C-0.15632 5.93298 -0.15632 4.96119 0.468959 4.36197C1.09436 3.76263 2.10819 3.76263 2.73331 4.36174L5.95872 7.4528L13.2666 0.449334C13.892 -0.150005 14.906 -0.149551 15.5311 0.449334C16.1563 1.04856 16.1563 2.02 15.5314 2.61957Z" fill="white"/>
                </svg>
            </span>
            <h3 class="title">ÜBERPRÜFUNG</h3>
        </div>        
    `;

    document.querySelectorAll('.l-checkout-main > section header').forEach((header, index) => {
        if(header.querySelector('.ab--pagination')) return;
        header.insertAdjacentElement('afterbegin', pagination.cloneNode(true));
    });    
}

function mutateElmChange(){
    const targetNode = document.querySelector('main.l-checkout-main');
    const config = { attributes: false, childList: true, subtree: true };
    const callback = function() {
        if([...document.querySelectorAll('.l-checkout-main > section header .ab--pagination')].length < 3){
            mainJs();
        }
        if(document.querySelector('section[data-ref="billingStep"] > .b-checkout_step-section:not(.m-summary):not(.m-hide)') && document.querySelector('section[data-ref="billingStep"] > header:not(.m-active)')){
            document.querySelector('section[data-ref="billingStep"] > header').classList.add('m-active')
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
}

(function pollOnload() {
    waitForElem("body", ()=>{
        if (window.bowser.name == 'Safari' || (window.bowser.name == 'Chrome' && window.bowser.osname == 'iOS')|| (window.bowser.name == 'Chrome' && window.bowser.osname == 'Android') || (window.bowser.name == 'Chrome' && window.bowser.osname == 'Mac') || (window.bowser.name == 'Firefox' && window.bowser.osname == 'iOS') || (window.bowser.name == 'Firefox' && window.bowser.osname == 'Android')) {
            document.body.classList.add('is-safari');
        } else {
            setTimeout(pollOnload, 25);
        }
    })
})();

function init() {
    mainJs();
    mutateElmChange();
}

waitForElem(".l-checkout-main > section header", init);