import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */
var gohoTestThree = {
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

    information: [
        {
            url: "https://www.homeserve.com/uk/insurance/plumbing-drainage-cover",
            currentText: "People who only want cover for their home's plumbing and drainage",
            newTextList: [
                "Comprehensive plumbing cover for your home's plumbing and drainage",
                "No limit to the number of claims you can make",
                "Expert plumbers available nationwide"
            ]
        },
        {
            url: "https://www.homeserve.com/uk/insurance/plumbing-electrics-cover",
            currentText: "People who only want cover for their plumbing and electrics",
            newTextList: [
                "Cover for your home's plumbing and electrics",
                "No limit to the number of claims you can make",
                "Home expert plumbers available nationwide "
            ]
        },
        {
            url: "https://www.homeserve.com/uk/insurance/heating-plumbing-cover-service-xs1",
            currentText: "People who want cover for their home’s plumbing, gas boiler, central heating and electrics",
            newTextList: [
                "Cover for your home's plumbing, gas boiler, central heating and electrics",
                "No limit to the number of claims you can make",
                "Plus, a FREE Boiler Service in your first year worth £96"
            ]
        },
        {
            url: "https://www.homeserve.com/uk/insurance/heating-plumbing-electrics-cover-service-xs1",
            currentText: "People who want cover for their home’s plumbing, gas boiler, central heating and electrics",
            newTextList: [
                "Cover for your home's plumbing, gas boiler, central heating and electrics",
                "No limit to the number of claims you can make",
                "Plus, a FREE Boiler Service in your first year worth £96"
            ]
        },
        {
            url: "https://www.homeserve.com/uk/insurance/heating-plumbing-electrics-plus-cover-service-xs1?aboutyou=true",
            currentText: "People who want comprehensive cover for their home’s plumbing, gas boiler, central heating and electrics, plus cover for security problems and pest infestations",
            newTextList: [
                "Comprehensive cover for your home's plumbing, gas boiler, central heating and electrics",
                "Plus, cover for security and pest infestations also included",
                "And, a FREE Boiler Service in your first year worth £96"
            ]
        },
        {
            url: "https://www.homeserve.com/uk/insurance/electrics-cover",
            currentText: "People who only want cover for their home's electrics",
            newTextList: [
                "Cover for your home's plumbing, gas boiler, heating and electrics",
                "No limit to the number of claims you can make",
                "Claims 24/7, 365 days a year"
            ]
        },
        {
            url: "https://www.homeserve.com/uk/insurance/boiler-cover-service",
            currentText: "People who want cover for their home’s gas boiler",
            newTextList: [
                "Cover for your home's gas boiler",
                "All parts & labour included, and no limit on repair claims",
                "Plus, a FREE Boiler Service in your first year worth £96"
            ]
        },
        {
            url: "https://www.homeserve.com/uk/insurance/boiler-and-central-heating-cover-service-xs1",
            currentText: "People who want cover for their home’s gas boiler and central heating",
            newTextList: [
                "Cover for your home's gas boiler and central heating",
                "All parts & labour included, and no limit on repair claims",
                "Plus, a FREE Boiler Service in your first year worth £96"
            ]
        }
    ],

    mainJs: function () {

        let array = gohoTestThree.information;
        let storeData = array.find(el => el.url == window.location.href)
        if (storeData) {
            let newElements = '<ul class="ticks">';
            storeData.newTextList.forEach(elm => newElements += `
            <li>
            <span class="list_span">${elm}</span>
            </li> `)
            newElements += "</ul>"
            document.querySelector('.page .hero-banner__content .intro').innerHTML = newElements;
            document.querySelector("div.cover-list-for > ul > li:nth-child(2)").remove();
        }

    },
    goals: function () { }
};
(function pollOnload() {
    if (document.querySelector('body')) {
        try {
            gohoTestThree.init();
            console.log(`This is a EchoLogyx variation -- running on ${new Date().toLocaleDateString()}`);
        } catch (error) {
            console.log('Initialization error:', error);
        }
    } else {
        setTimeout(pollOnload, 25);
    }
})();


{/* <img class="icon toggle-tick house" src="/-/media/uk/insurance/productpages/tick-teal.svg" alt=""></img> */ }