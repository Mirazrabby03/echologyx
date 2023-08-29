import "./styles/index.scss";
/* DO NOT IMPORT ANYTHING */function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
    if (timer <= 0) return;
    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}
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

        document.querySelector('.product-meta .product-meta__title').appendChild(document.querySelector('#shopify-block-a6bce57c-4e0f-4b1a-ae25-df2e1b5cfa9f'));
        
    },
};
waitForElem("body", (elements) => {
    if (elements) {
        console.log(`Test Name - Variant Name`);
        echoVariation.init();
    }
});
