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
        const contentBox = document.querySelector('.container .content-box.content-box--fill p:nth-child(1)');
        contentBox.textContent = 'Scent your home or business with hotel inspired scents';
        contentBox.insertAdjacentHTML('afterend', `
        <span class="content-box__text">Our scent Consultants will help guide you to your signature scent, as well as the perfect diffuser size for your space.</span>
        `)
        document.querySelector('.container .content-box.content-box--fill p:nth-child(3) a').textContent = 'START YOUR SCENTING JOURNEY';
        document.querySelector('.container .content-box.content-box--fill p:nth-child(3)').insertAdjacentHTML('afterend', `
        <p class="content-box__text center-text">For as low as $99/month</p>
        `)
     },
};
waitForElem(".container .content-box.content-box--fill.content-box--text-center", (elements) => {
    if (elements) {
        console.log(`A360 #6 Exclusive Offer ATF - EO -- V01`);
        echoVariation.init();
    }
});
