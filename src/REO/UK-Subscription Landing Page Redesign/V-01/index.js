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

        const element = document.querySelector('.subs-landing-banner [data-element="main"] h2')
        element.innerHTML = "SUBSCRIBE <br>MONTHLY <br> WITH VUSE";

        document.querySelector("div.pagebuilder-column.mobile-banner-content h2 > strong > span").innerHTML = "SUBSCRIBE MONTHLY WITH <br> VUSE"

        //Add header button
        let header =
            `
        <a href="#subs-faq" class='subscription_faq_button pagebuilder-button-primary'>
           <span class='subscription_text'> SUBSCRIPTION FAQS </span>
        <a>
        `
        document.querySelector(".subs-landing-banner .subs-banner-text div[data-content-type='button-item']").classList.add('button-container')
        document.querySelector(".button-container").insertAdjacentHTML('beforeend', header)

        //Add id for scroll
        document.querySelectorAll(".device-selection").forEach(item => {
            item.id = "reo-choose-device";
        })

        document.querySelectorAll(".device-selection.mobile").forEach(item => {
            item.id = "reo-choose-devices";
        })

        //banner subscription anchor
        document.querySelector('.subs-landing-banner .subs-banner-text div[data-content-type="button-item"] .pagebuilder-button-primary:not(.subscription_faq_button)').setAttribute('href', '#reo-choose-device');

        document.querySelector('.subs-landing-mobile-banner .mobile-banner-content div[data-content-type="button-item"] .pagebuilder-button-primary:not(.subscription_faq_button)').setAttribute('href', '#reo-choose-devices');

        document.querySelector(" div.pagebuilder-column.mobile-banner-content > div[data-content-type='buttons']").classList.add('button-container-mobile')
        document.querySelector(".button-container-mobile").insertAdjacentHTML('beforeend', header)


        document.querySelector('.subscription-faq-content').id = "subs-faq";

        let shopDevice =
            ` 
        <div class='device-wrapper pagebuilder-column' > 
        <div class='device-container'>
        <h3 class='device-text'> I don't have a device </h3>
        <a href="https://www.vuse.com/gb/en/e-cigarette-devices">
        <button class='device-button action primary'>
         Shop Devices </button>
        </a>
        </div>
        </div>`
        document.querySelector('.device-selection.desktop .pagebuilder-column-group').classList.add('custom-selection');
        document.querySelector(".device-selection.desktop .pagebuilder-column-group").
            insertAdjacentHTML('beforeend', shopDevice)

        document.querySelector(".device-selection.mobile .pagebuilder-column-group ul").
            insertAdjacentHTML('beforeend', `
            <div class='device-selection-li' >

            <div class='device-container-mobile'>
            <h3 class='device-text'> I don't have a device </h3>
            <a href="https://www.vuse.com/gb/en/e-cigarette-devices">
            <button class='device-button action primary'>
             Shop Devices </button>
            </a>
            </div>
            </div>
        `)


        document.querySelectorAll(".subscription-detail:not(.mobile) .subscription-tier-list li").forEach(elm => {
            let newText = document.createElement("span");
            newText.classList.add('custom-text');
            elm.querySelector('p strong:nth-child(3)').remove();
            newText.innerHTML = elm.innerHTML.replace(' /pack', ' per pack')
            newText.innerHTML = newText.querySelectorAll('p')[1].textContent.replace('for', '') + '<br>' + newText.querySelectorAll('p')[0].textContent.replace('for', '')
            elm.insertAdjacentElement('beforeend', newText);
        })

        document.querySelectorAll(".subscription-detail.mobile .subscription-tier-list li").forEach(el => {
            let newText = document.createElement("span");
            newText.classList.add('custom-text');
            el.querySelector('p strong:nth-child(3)').remove();
            newText.innerHTML = el.innerHTML.replace('/pack', ' per pack')
            newText.innerHTML = newText.querySelectorAll('p')[1].textContent.replace('for', '') + '<br>' + newText.querySelectorAll('p')[0].textContent.replace('for', '')

            el.insertAdjacentElement('beforeend', newText);
        })

    },
};
waitForElem("body", (elements) => {
    if (elements) {
        console.log(`UK: Subscription Landing Page Redesign- V01`);
        echoVariation.init();
    }
});
