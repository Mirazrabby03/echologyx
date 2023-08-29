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
        if(window.innerWidth >= 590){
            waitForElem(".page-content .page-width", (elements) => {
                if (elements) {
                    document.querySelector('.page-content .page-width').insertAdjacentHTML('afterend',`
                    <div class="badge__container">
                    <h5 class="badge__title">Bekannt aus:</h5>
                    <div class="badge__list">
                        <div class="col-4 col-lg-2 text-center">
                        <img src="https://images.prismic.io/xbyx/135e942a-7601-422a-b511-a8033fd00ef6_Elle-logo.png" alt="presse xbyx elle" style="width:73px;height:30px"></div>
                        <div class="col-4 col-lg-2 text-center">
                        <img src="https://images.prismic.io/xbyx/a4bc4a4e-1b94-4052-801b-e0c717e02c06_Gala-logo.png" alt="presse xbyx gala" style="width:69px;height:30px"></div>
                        <div class="col-4 col-lg-2 text-center">
                        <img src="https://images.prismic.io/xbyx/554fc881-72f3-48ee-aa33-cf6c7102b291_ntv-logo.png" alt="presse xbyx ntv" style="width:48px;height:30px"></div>
                        <div class="col-4 col-lg-2 text-center">
                        <img src="https://images.prismic.io/xbyx/a83fe13d-6b95-4ffa-a51e-76f91ac1daf3_chefkoch-logo-2.png" style="width:141px;height:30px"></div>
                        <div class="col-4 col-lg-2 text-center">
                        <img src="https://images.prismic.io/xbyx/ffc40460-6c37-4b8d-8b96-37cf640dc993_familie-logo.png" alt="presse xbyx familie" style="width:90px;height:30px"></div>
                        <div class="col-4 col-lg-2 text-center">
                        <img src="https://images.prismic.io/xbyx/76db6393-0a0a-4826-85c7-f6e099fa4a06_Donna-logo.png" alt="presse xbyx donna" style="width:148px;height:30px"></div>
                    </div>
                    </div>
                    `)
                }
            });
           
        }else {
            waitForElem(".grid .grid__item.medium-up--one-half .product-single__meta", (elements) => {
                if (elements) {
                    document.querySelector('.grid .grid__item.medium-up--one-half .product-single__meta').insertAdjacentHTML('beforebegin',`
                    <div class="badge__container">
                    <h5 class="badge__title">Bekannt aus:</h5>
                    <div class="badge__list">
                        <div class="col-4 col-lg-2 text-center">
                        <img src="https://images.prismic.io/xbyx/135e942a-7601-422a-b511-a8033fd00ef6_Elle-logo.png" alt="presse xbyx elle" style="width:73px;height:30px"></div>
                        <div class="col-4 col-lg-2 text-center">
                        <img src="https://images.prismic.io/xbyx/a4bc4a4e-1b94-4052-801b-e0c717e02c06_Gala-logo.png" alt="presse xbyx gala" style="width:69px;height:30px"></div>
                        <div class="col-4 col-lg-2 text-center">
                        <img src="https://images.prismic.io/xbyx/554fc881-72f3-48ee-aa33-cf6c7102b291_ntv-logo.png" alt="presse xbyx ntv" style="width:48px;height:30px"></div>               
                    </div>
                    </div>
                    `)

                    
                }
            });
           
        }
      
    },
};
waitForElem("head", (elements) => {
    if (elements) {
        console.log(`Test Name - Variant Name`);
        echoVariation.init();
    }
});
