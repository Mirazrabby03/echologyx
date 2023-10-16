import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

const products = [
    {
        link: "/products/alpin-loop-armband",
        subline: "Optimal für Wanderungen & alle Outdoor-Abenteuer",
    },
    {
        link:"/products/bicolor-alpin-loop-armband",
        subline:"Ideal für Wanderungen & Abenteuer im Freien",
    },
    {
        link:"/products/flex-loop-armband",
        subline:"Perfektes Tragegefühl für jede Gelegenheit",
    },
    {
        link:"/products/florales-lederarmband",
        subline:"Für das gewisse Etwas in deinem Outfit",
    },
    {
        link:"/products/schmales-lederarmband",
        subline:"Edles Accessoire als Highlight für deinen Look",
    },
    {
        link:"/products/geflochtenes-flex-loop-bicolor",
        subline:"Passt immer, egal ob Alltag oder andere Anlässe",
    },
    {
        link:"/products/geflochtenes-flex-loop-multicolor",
        subline:"Passend für jeden Style und Anlass",
    },
    {
        link:"/products/geflochtenes-flex-loop-rainbow-edition",
        subline:"Persönlicher Stil im Regenbogen-Design",
    },
    {
        link:"/products/geflochtenes-flex-loop",
        subline:"Bequemer Komfort, egal ob Freizeit oder Arbeit",
    },
    {
        link:"/products/geflochtenes-solo-loop-edition",
        subline:"Leichtes Tragegefühl für jeden Anlass",
    },
    {
        link:"/products/keramik",
        subline:"Das stilvolle Upgrade für deinen Look",
    },
    {
        link:"/products/gliederarmband-holz",
        subline:"Für den besonderen & eleganten Look",
    },
    {
        link:"/products/hippie-lederarmband",
        subline:"Der Eyecatcher für deinen einzigartigen Look",
    },
    {
        link:"/products/echtlederarmband",
        subline:"Klassisch & edel, für einen zeitlosen Look",
    },
    {
        link:"/products/lederarmband",
        subline:"Dein zeitloser Look für jeden Anlass",
    },
    {
        link:"/products/lederarmband-lochmuster",
        subline:"Für einen eleganten Look im Alltag",
    },
    {
        link:"/products/leder-loop",
        subline:"Eleganter Look & angenehmes Tragefühl im Alltag",
    },
    {
        link:"/products/gliederarmband-classic",
        subline:"Für einen starken Eindruck bei jeder Gelegenheit",
    },
    {
        link:"/products/pulseira",
        subline:"Stilvoll & edel, dein Statement für jeden Anlass",
    },
    {
        link:"/products/gliederarmband-resin",
        subline:"Edel & individuell, für deinen besonderen Look",
    },
    {
        link:"/products/vena",
        subline:"Klassisch & modern, der Hingucker für jedes Outfit",
    },
    {
        link:"/products/milanese-armband",
        subline:"Angenehm & edel, für jeden Anlass geeignet",
    },
    {
        link:"/products/milanese-series7",
        subline:"Elegant & komfortabel, passend für jeden Style",
    },
    {
        link:"/products/milanese",
        subline:"Edler Look für alle Anlässe, ob Freizeit oder Arbeit",
    },
    {
        link:"/products/ocean-armband",
        subline:"Wasserfest & stylisch, perfekt zum Tauchen",
    },
    {
        link:"/products/rainbow-sport-silikonarmband",
        subline:"Sportlicher und moderner Begleiter im Alltag",
    },
    {
        link:"/products/silikonarmband",
        subline:"Ideal für alle Anlässe, ob Sport, Alltag oder Arbeit",
    },
    {
        link:"/products/sport-loop-bicolor",
        subline:"Perfekter Komfort für Freizeit und Sport",
    },
    {
        link:"/products/multicolor-sport-loop",
        subline:"Atmungsaktiv & leicht, ideal für Sport & Freizeit",
    },
    {
        link:"/products/sport-loop",
        subline:"Sportlich & stilvoll, für aktive Tage und Freizeit",
    },
    {
        link:"/products/sport-silikonarmband",
        subline:"Leicht & atmungsaktiv, perfekt für Sport & Freizeit",
    },
    {
        link:"/products/trail-loop-armband",
        subline:"Robust & flexibel, für Abenteuer und Alltag",
    },
    {
        link:"/products/vintage-lederarmband",
        subline:"Zeitloses & stilvolles Accessoire für jeden Anlass",
    },
    {
        link:"/products/wendearmband-verto",
        subline:"Ein Armband, vier Looks - ideal für jeden Anlass",
    },
];

function mainJs(body) {

    const productTitle = document.querySelector('.product-meta .product-meta__title');
    productTitle.insertAdjacentHTML('afterend', `<div class="product-meta__subline">
    <span class="product-meta__subline--text"></span>
    </div>`);
    const currentUrl = window.location.pathname;
    products.forEach(product => {
        if(currentUrl === product.link) {
            document.querySelector('.product-meta__subline--text').innerHTML = product.subline;
        }
    });
    // console.log(`APF-5.............. V-01`);
}

waitForElem(".product-meta .product-meta__title", mainJs);














