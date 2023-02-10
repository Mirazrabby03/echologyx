import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */
var echoVariation = {
    init: function () {
        this.mainCss();
        this.mainJs();
        this.goals();
    },
    mainCss: function () {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '' +
            /* CSS will be imported here */
            '';
    },
    mainJs: function () {
        var lastLi = document.querySelector(" ul > li.secondary-nav__item.secondary-nav__item--search");
        var ul = lastLi.parentNode;
        lastLi.parentNode.removeChild(lastLi);
        ul.insertBefore(lastLi, ul.firstChild);

        // document.querySelector("#top ul > li.secondary-nav__item.secondary-nav__item--search a").click();
        document.querySelector(".secondary-nav__items").insertAdjacentElement('afterbegin', document.querySelector(".search-draw__wrapper .search__inner"));

        // document.querySelector(".mfp-wrap").onclick = function () {
        //     this.style.top = "2%";
        //     document.querySelector('.search__nav').style.display = "block";
        //     document.querySelector("html").style.overflow = "scroll";
        // };

        document.querySelector("nav.secondary-nav.header-navs__items.js-secondary-nav > ul > .search__inner").onclick = function () {
            document.querySelector('.search__nav').style.display = "block";
            console.log("I am clicked");
        }

        document.addEventListener("click", e => {
            if (!e.composedPath().includes(document.querySelector("nav.secondary-nav.header-navs__items.js-secondary-nav > ul > .search__inner"))) {
                document.querySelector(".search__nav").style.display = "none";
                document.querySelector("nav.secondary-nav.header-navs__items.js-secondary-nav > ul > .search__inner > a").style.display = "none";
            }
        });



        document.querySelector('.search__form-submit').insertAdjacentHTML('afterbegin', `
        <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" style="color: white" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"/> </svg>
        </div>
        `)


    },
    goals: function () { }
};
(function pollOnload() {
    if (document.querySelector('body')) {
        try {
            echoVariation.init();
            console.log(`This is a EchoLogyx variation -- running on ${new Date().toLocaleDateString()}`);
        } catch (error) {
            console.log('Initialization error:', error);
        }
    } else {
        setTimeout(pollOnload, 25);
    }
})();
