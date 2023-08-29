import "./styles/index.scss";
/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
    if (timer <= 0) return;
    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}

function mainJs([link]) {
    link.classList.add('discount-badge');
    console.log(`GLO-33 : V-01`);
}

waitForElem('.products.columns-4 li > div .product-thumbnail a[href="https://glow25.de/products/kollagen-pulver/"]', mainJs);