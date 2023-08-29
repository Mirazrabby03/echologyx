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
        document.querySelectorAll('.mobile-menu__list-item .mobile-menu__first-level').forEach(e=>{
            e.insertAdjacentHTML('afterbegin', `
            <img src="https://cdn.shopify.com/s/files/1/0270/2098/4401/files/arrow-down.svg" alt="arrow-down" class="arrow-down">
            `)
        });
    },
};
waitForElem("body", (elements) => {
    if (elements) {
        console.log(`HC#7 - Mobile Menu Redesign- V01`);
        echoVariation.init();
    }
});
