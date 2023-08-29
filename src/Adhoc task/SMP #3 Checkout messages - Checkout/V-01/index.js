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
        waitForElem('.legend', (elements) => {
            if (elements) {
                document.querySelector('.legend').textContent = 'Introduceți adresa dvs. de email';
            }
        })
        waitForElem('.new-users h2', (elements) => {
            if (elements) {
                document.querySelector('.new-users h2').textContent = 'Setați o parolă pentru contul dvs. de client';
            }
        })
        waitForElem('#signup-form button span', (elements) => {
            if (elements) {
                document.querySelector('#signup-form button span').textContent = 'Creează Cont';
                document.querySelector('#signup-form button').setAttribute('title', 'Creează Cont');
            }
        })
        waitForElem('.data-wrapper .inchoo-socialconnect-checkout .text-left', (elements) => {
            if (elements) {
                document.querySelectorAll('.data-wrapper .inchoo-socialconnect-checkout .text-left').forEach(el => {
                    el.textContent = 'Prin intermediul contului de client, veți putea accesa factura, efectua retururi și veți putea verifica statusul comenzii'
                })
            }
        },)


    },
};

console.log(`SMP #3 Checkout messages - Checkout`);
echoVariation.init();

waitForElem('.step.two.active', (elements) => {
    if (elements) {
        trackGA("Checkout-Message", "Order Details Screen", "SMP-3");
    }
})

function trackGA(eventCategory, eventAction, eventLabel) {
    return ga(
        ga.getAll()[0].get("name") + ".send",
        {
            hitType: "event",
            eventCategory: eventCategory,
            eventAction: eventAction,
            eventLabel: eventLabel,
        });
}