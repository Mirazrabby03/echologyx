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
        document.querySelector('#main .shopify-section--collection-list:nth-child(3)').classList.add('base-class');
        document.querySelector('.section__header.container.text-container h3.heading').textContent = 'Shop By Room Size';
     },
};
waitForElem("body", (elements) => {
    if (elements) {
        console.log(`A360 #8 Shop By Size - HP- V-01`);
        echoVariation.init();
    }
});


