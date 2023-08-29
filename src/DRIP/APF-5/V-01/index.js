import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

const products = [
    {
        link: "https://apfelband.de/products/alpin-loop-armband",
        subline: "Optimal für Wanderungen & alle Outdoor-Abenteuer",
    },
    {
        link:"https://apfelband.de/products/bicolor-alpin-loop-armband",
        subline:"Ideal für Wanderungen & jedes Abenteuer im Freien",
    },
    {
        link:"https://apfelband.de/products/flex-loop-armband",
        subline:"Perfektes Tragegefühl für jede Gelegenheit",
    },
    {
        link:"https://apfelband.de/products/florales-lederarmband",
        subline:"Für das gewisse Etwas in deinem Outfit",
    },
    {
        link:"https://apfelband.de/products/schmales-lederarmband",
        subline:"Schickes Accessoire als Highlight für deinen Look",
    },
    {
        link:"https://apfelband.de/products/geflochtenes-flex-loop-bicolor",
        subline:"Passt immer, egal ob Alltag oder andere Anlässe",
    },
    {
        link:"https://apfelband.de/products/geflochtenes-flex-loop-multicolor",
        subline:"Passend für jeden Style und Anlass",
    },
    {
        link:"https://apfelband.de/products/geflochtenes-flex-loop-rainbow-edition",
        subline:"Persönlicher Stil im Regenbogen-Design",
    },
    {
        link:"https://apfelband.de/products/geflochtenes-flex-loop",
        subline:"Bequemer Komfort, egal ob Freizeit oder Arbeit",
    },
    {
        link:"https://apfelband.de/products/geflochtenes-solo-loop-edition",
        subline:"Leichtes Tragegefühl für jeden Anlass",
    },
    {
        link:"https://apfelband.de/products/keramik",
        subline:"Das stilvolle Upgrade für deinen Look",
    },
    {
        link:"https://apfelband.de/products/gliederarmband-holz",
        subline:"Für den besonderen & eleganten Look",
    },
    {
        link:"https://apfelband.de/products/hippie-lederarmband",
        subline:"Der Eyecatcher für deinen einzigartigen Look",
    },
    {
        link:"https://apfelband.de/products/echtlederarmband",
        subline:"Klassisch & edel, für einen zeitlosen Look",
    },
    {
        link:"https://apfelband.de/products/lederarmband",
        subline:"Dein zeitloser Look für jeden Anlass",
    },
    {
        link:"https://apfelband.de/products/lederarmband-lochmuster",
        subline:"Für einen eleganten Look im Alltag",
    },
    {
        link:"https://apfelband.de/products/leder-loop",
        subline:"Elegantes Design & angenehmes Tragefühl im Alltag",
    },
    {
        link:"https://apfelband.de/products/gliederarmband-classic",
        subline:"Für einen starken Eindruck bei jeder Gelegenheit",
    },
    {
        link:"https://apfelband.de/products/pulseira",
        subline:"Stilvoll & edel, dein Statement für jeden Anlass",
    },
    {
        link:"https://apfelband.de/products/gliederarmband-resin",
        subline:"Edel & individuell, für deinen besonderen Look",
    },
    {
        link:"https://apfelband.de/products/vena",
        subline:"Klassisch & modern, der Hingucker für jedes Outfit",
    },
    {
        link:"https://apfelband.de/products/milanese-armband",
        subline:"Angenehm & edel, für jeden Anlass geeignet",
    },
    {
        link:"https://apfelband.de/products/milanese-series7",
        subline:"Elegant & komfortabel, passend für jeden Style",
    },
    {
        link:"https://apfelband.de/products/milanese",
        subline:"Edler Look für alle Anlässe, ob Freizeit oder Arbeit",
    },
    {
        link:"https://apfelband.de/products/ocean-armband",
        subline:"Wasserfest & stylisch, perfekt zum Tauchen",
    },
    {
        link:"https://apfelband.de/products/rainbow-sport-silikonarmband",
        subline:"Dein sportlicher und moderner Begleiter im Alltag",
    },
    {
        link:"https://apfelband.de/products/silikonarmband",
        subline:"Ideal für alle Anlässe, ob Sport, Alltag oder Arbeit",
    },
    {
        link:"https://apfelband.de/products/sport-loop-bicolor",
        subline:"Perfekter Komfort für Freizeit und Sport",
    },
    {
        link:"https://apfelband.de/products/multicolor-sport-loop",
        subline:"Atmungsaktiv & leicht, ideal für Sport & Freizeit",
    },
    {
        link:"https://apfelband.de/products/sport-loop",
        subline:"Sportlich & stilvoll, für aktive Tage und Freizeit",
    },
    {
        link:"https://apfelband.de/products/sport-silikonarmband",
        subline:"Leicht & atmungsaktiv, perfekt für Sport & Freizeit",
    },
    {
        link:"https://apfelband.de/products/trail-loop-armband",
        subline:"Robust & flexibel, für Abenteuer und Alltag",
    },
    {
        link:"https://apfelband.de/products/vintage-lederarmband",
        subline:"Zeitloses & stilvolles Accessoire für jeden Anlass",
    },
    {
        link:"https://apfelband.de/products/wendearmband-verto",
        subline:"Ein Armband, vier Looks - passend für jeden Anlass",
    },
];

function mainJs(body) {

    const productTitle = document.querySelector('.product-meta .product-meta__title');
    



    console.log(`Test Name - Variant Name`);

}

waitForElem("body", mainJs);