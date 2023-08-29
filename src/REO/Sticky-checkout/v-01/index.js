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

        const element = document.querySelector('a[data-test-id="cart-summary-checkout"]');
        let stickyButton = document.createElement("button");
        stickyButton.classList.add("sticky-checkout-button");
        stickyButton.innerHTML = element.innerHTML;
        stickyButton.addEventListener("click", () => {
            document.querySelector('a[data-test-id="cart-summary-checkout"]').click();
        });
        document.body.insertAdjacentElement("beforeend", stickyButton);
        const headerHeight = document.querySelector('#nav-bar-sticky').getBoundingClientRect().height;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio === 1) {
                    console.log('Element is fully visible in the viewport');
                    document.querySelector('body').classList.remove('sticky-checkout');
                } else if (entry.boundingClientRect.top - headerHeight <= 0 && entry.intersectionRatio > 0) {
                    console.log('Element is partially visible in the viewport');
                    document.querySelector('body').classList.add('sticky-checkout');
                } else {
                    console.log('Element is not visible in the viewport');
                    document.querySelector('body').classList.add('sticky-checkout');
                }
            });
        }, { threshold: [0, 1] });
        observer.observe(element);
    },
};
waitForElem(document.querySelector('a[data-test-id="cart-summary-checkout"]'), (elements) => {
    if (elements) {
        console.log(`Test Name - Variant Name`);
        echoVariation.init();
    }
});
