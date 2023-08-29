import "./styles/index.scss";
/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
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
        let productMeta = document.querySelector('.ProductMeta__custom-product-description');
        let productRating = document.querySelector('.ProdutMeta__Title-Wrapper .ProductMeta__Rating');
        let productMetaParent = document.querySelector('.ProductMeta');
        if(productMeta && productMeta){
            console.log('Miraz', 'productMeta');
            
            productMeta.insertAdjacentElement('beforebegin', productRating);
        }else{
            productMetaParent.insertAdjacentElement('afterend', productRating);
        }

        const ratingSection = document.createElement('div');
        ratingSection.classList.add('rating-section');
        ratingSection.innerHTML = `
            <div class="rating-section__container">
                <div class="rating-section__container__wrapper">
                    <div class="rating-section__container__title">
                        <h3>Wohlsein:</h3>
                    </div>
                    <div class="rating-section__container__slider__range">
                        <div class="rating-section__container__slider__top_first">
                        </div>
                        <div class="rating-section__container__slider__bottom">
                        </div>
                        <div class="rating-section__container__slider__text">
                        <span>Sehr wohl</span>
                    </div>
                    </div>
                    <div class="rating-section__container__rating">
                        <p>4.94/5.00</p>
                    </div>
                </div>

                <div class="rating-section__container__wrapper">
                    <div class="rating-section__container__title">
                        <h3>Geschmack:</h3>
                    </div>
                    <div class="rating-section__container__slider__range">
                        <div class="rating-section__container__slider__top_second">
                        </div>
                        <div class="rating-section__container__slider__bottom">
                        </div>
                        <div class="rating-section__container__slider__text">
                        <span>Sehr lecker</span>
                    </div>
                    </div>
                    <div class="rating-section__container__rating">
                        <p>4.74/5.00</p>
                    </div>
                </div>

                <div class="rating-section__container__wrapper">
                    <div class="rating-section__container__title">
                        <h3>Sättigung:</h3>
                    </div>
                    <div class="rating-section__container__slider__range">
                        <div class="rating-section__container__slider__top_third">
                        </div>
                        <div class="rating-section__container__slider__bottom">
                        </div>
                         <div class="rating-section__container__slider__text">
                            <span>Hoch</span>
                        </div>
                    </div>
                    <div class="rating-section__container__rating">
                        <p>4.93/5.00</p>
                    </div>
                </div>
            </div>
        `;

        productRating.insertAdjacentElement('afterend', ratingSection);     
        //clone ratingSection and insert it 
        const headerGroup = document.querySelector('.header__group.header__group--center');
        const clonedRatingSection = ratingSection.cloneNode(true);
        headerGroup.insertAdjacentElement('afterbegin', clonedRatingSection);
    },
};
waitForElem(".ProductMeta, .header__group.header__group--center", (elements) => {
    if (elements) {
        console.log(`Liv-164----- V-01`);
        echoVariation.init();
    }
},2);
