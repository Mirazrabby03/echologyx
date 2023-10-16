import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

const assets = {
    paypal : "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Hoffmann/HOF-108/paypal.png",
    klarna : "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Hoffmann/HOF-108/image+5.png",
    visa: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Hoffmann/HOF-108/visa-logo.png",
    mastercard: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Hoffmann/HOF-108/image+4.png",
    amex: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Hoffmann/HOF-108/AMEX.png",
    sofort: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Hoffmann/HOF-108/image+6.png",
    vorkasse: "https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Hoffmann/HOF-108/Vorkasse.png",
}

function mainJs(body) {
    const container = document.createElement("div");
    container.classList.add("static__checkout__container");
    container.innerHTML = `
    <div class="static__checkout__header">
        <h2 class="static__checkout__title">Standard Checkout</h2>
    </div>
    <div class="static__checkout__body">
        <span class="static__checkout__subtitle">Im letzten Checkout-Schritt stehen Ihnen folgende Zahlungsarten zur Verfügung:</span>
        <div class="static__checkout__payment-methods">
            <img class="static__checkout__img" src=${assets.paypal} alt="payment methods">
            <img class="static__checkout__img" src=${assets.klarna} alt="payment methods">
            <img class="static__checkout__img" src=${assets.visa} alt="payment methods">
            <img class="static__checkout__img" src=${assets.mastercard} alt="payment methods">
            <img class="static__checkout__img" src=${assets.amex} alt="payment methods">
            <img class="static__checkout__img" src=${assets.sofort} alt="payment methods">
            <img class="static__checkout__img" src=${assets.vorkasse} alt="payment methods">
        <div class='arrow-down'>
        <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.32002 28.2027L3.52765 31.998L15.7583 31.992L15.7529 19.7634L11.9162 23.6031C5.24969 15.858 3.17801 6.28432 6.62619 0.0019156C5.66753 0.529174 4.78459 1.18434 3.99868 1.97085C-1.94309 7.91717 -0.365286 19.2747 7.32002 28.2027Z" fill="#333333"/>
        </svg>
        </div>
        </div>
    </div>`;
    document.querySelector('.main__header .shown-if-js').insertAdjacentElement("beforeend", container);
    // console.clear()
    console.log(`HOF-108: V-01`);
}

// waitForElem(".content .wrap", mainJs);
waitForElem(".main__header .shown-if-js", mainJs);