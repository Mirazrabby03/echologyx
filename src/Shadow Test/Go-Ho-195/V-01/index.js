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
        var array = [];
        document.querySelectorAll('.category-items .promo-box:not(.promo-box--grey)')
        [document.querySelectorAll('.category-items .promo-box:not(.promo-box--grey)').length - 1].querySelectorAll('.list ul li')
            .forEach(el => {
                array.push(el.outerText.trim());
            });

        document.querySelectorAll('.category-items .promo-box').forEach(elm => {
            elm.insertAdjacentHTML(
                'afterbegin',
                `<div class="border-line"></div>`
            );
            elm.querySelectorAll('.list li').forEach(items => {
                items.insertAdjacentHTML(
                    'afterbegin',
                    ` <i class="fa fa-check-circle" aria-hidden="true"></i>`
                )
            })
            if (!elm.classList.contains('promo-box--grey')) {
                elm.querySelector('.intro').textContent = elm.querySelector('.intro').textContent.replace('a month', ' ');
                elm.querySelector('.intro').insertAdjacentHTML('beforeend', `<span class="non-bold">a month </span>`);
                if (elm.querySelector('.intro.lowxs')) {
                    elm.querySelector('.intro.lowxs').textContent = elm.querySelector('.intro.lowxs').textContent.replace('a month', ' ');
                    elm.querySelector('.intro.lowxs').insertAdjacentHTML('beforeend', `<span class="non-bold">a month </span>`);
                }

                let text = elm.querySelector('.bubble') ? 'FREE Boiler Service in year one' : 'Unlimited number of claims';

                if (elm.querySelector('.bubble') || elm.querySelector('.claims-ribbon')) {
                    elm.querySelector('div.list').insertAdjacentHTML('beforebegin', `<div class="claim-box"><p>${text}</p></div>`);
                }

                if (elm.querySelector('.bubble')) {
                    elm.querySelector('.claim-box').classList.add('color-background');
                }

                let list = '';
                let oldList = [];
                elm.querySelectorAll('div.list ul li').forEach(el => {
                    oldList.push(el.textContent.trim());
                });

                array.forEach(item => {
                    if (!oldList.includes(item)) {
                        list += `<li class="disabled">
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                    ${item}
                </li>`;
                    }
                });

                elm.querySelector('div.list ul').insertAdjacentHTML('beforeend', list);
            }

            elm.querySelector('.intro').insertAdjacentHTML('beforebegin', `<div class="intro-container"></div>`);
            if (elm.querySelector('.intro-container') && elm.querySelector('.choose-excess') && elm.querySelector('.intro')) {
                elm.querySelector('.intro-container').insertAdjacentElement('afterbegin', elm.querySelector('.intro'));
                elm.querySelector('.intro-container').insertAdjacentElement('beforeend', elm.querySelector('.choose-excess'));
                elm.querySelector('.intro.lowxs') && elm.querySelector('.intro-container').insertAdjacentElement('afterbegin', elm.querySelector('.intro.lowxs'));
            }
            elm.querySelector('.intro-2').remove();
        });
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
