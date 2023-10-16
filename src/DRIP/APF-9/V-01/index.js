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
        innerHTML: `<p>✔️ <strong style="font-weight: 700;">Robustes Armband</strong>, ideal für Outdoor Abenteuer</p><p>✔️ <strong style="font-weight: 700;">Sicherer Halt</strong> mit dem <strong style="font-weight: 700;">G-Haken</strong>, auch für Apple Watch Ultra</p><p>✔️ <strong style="font-weight: 700;">Strapazierfähiges Polyester</strong> und <strong style="font-weight: 700;">Edelstahl</strong> für maximale Qualität</p>`
    },
    {
        link:"/products/bicolor-alpin-loop-armband",
        innerHTML: `<p>✔️ <strong style="font-weight: 700;">Robustes Outdoor Armband</strong> in zweifarbiger Ausführung</p><p>✔️ <strong style="font-weight: 700;">G-Haken-Verschluss </strong>für ultimative Sicherheit</p><p>✔️ <strong style="font-weight: 700;">Hochwertiges Polyester</strong> und <strong style="font-weight: 700;">Edelstahl</strong> für eine langlebige Qualität</p>`,      
    },
    {
        link:"/products/flex-loop-armband",
        innerHTML: `<p>✔️ <strong style="font-weight: 700;">Flexibel & leicht</strong>, Tragekomfort den ganzen Tag</p><p>✔️ Stufenlos einstellbar dank <strong style="font-weight: 700;">innovativer Loop-Schnalle </strong></p><p>✔️ <strong style="font-weight: 700;">Hochwertiges Nylon</strong> und belastbare Connectoren für eine anhaltende Qualität</p>`,
    },
    {
        link:"/products/florales-lederarmband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Florales Muster</strong> im britischen Landhausstil</p>
        <p>✔️ <strong style="font-weight: 700;">Vegan und stylisch </strong>für einen verspielten Look</p>
        <p>✔️ <strong style="font-weight: 700;">Angenehmes Kunstleder</strong> und <strong style="font-weight: 700;">hochwertiger Edelstahl</strong> in bester Qualität </p>`,
    },
    {
        link:"/products/schmales-lederarmband",
        innerHTML: `
        <p>✔️ Perfekt<strong style="font-weight: 700;"> für zarte Handgelenke</strong>, bequem & stilvoll</p>
        <p>✔️ Dein eleganter Begleiter <strong style="font-weight: 700;">für jeden Tag </strong></p>
        <p>✔️ <strong style="font-weight: 700;">Veganes Kunstleder</strong> und <strong style="font-weight: 700;">hochwertiger Edelstahl</strong> in Premium Qualität </p>`,

    },
    {
        link:"/products/geflochtenes-flex-loop-bicolor",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Individiduelle Passform</strong> für maximalen Komfort</p>
        <p>✔️ Leicht und angenehm zu tragen <strong style="font-weight: 700;">für jeden Tag </strong></p>
        <p>✔️ <strong style="font-weight: 700;">Hochwertige geflochtene Nylonfasern</strong> und <strong style="font-weight: 700;">Edelstahl</strong> in bester Qualität </p>`,

    },
    {
        link:"/products/geflochtenes-flex-loop-multicolor",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Perfekter Tragekomfort</strong> mit flexibler Einstellung</p>
        <p>✔️ Verleihe deiner Apple Watch einen <strong style="font-weight: 700;">frischen Look </strong></p>
        <p>✔️ Leichtgewichtig und angenehm zu tragen dank <strong style="font-weight: 700;">hochwertigen Nylonfasern</strong> und <strong style="font-weight: 700;">Edelstahl</strong></p>`,

    },
    {
        link:"/products/geflochtenes-flex-loop-rainbow-edition",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Perfekte Passform</strong> mit flexibler Einstellung</p>
        <p>✔️ Für einen <strong style="font-weight: 700;">farbenfrohen Look </strong></p>
        <p>✔️ <strong style="font-weight: 700;">Hochwertige geflochtene Nylonfasern</strong> und <strong style="font-weight: 700;">Edelstahl</strong> in bester Qualität</p>`,

    },
    {
        link:"/products/geflochtenes-flex-loop",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Perfekter Sitz</strong> für jedes Handgelenk</p>
        <p>✔️ <strong style="font-weight: 700;">Leicht & komfortabel</strong>, den ganzen Tag über angenehm</p>
        <p>✔️ <strong style="font-weight: 700;">Erstklassige geflochtene Nylonfasern</strong> und <strong style="font-weight: 700;">Edelstahl</strong> in hoher Qualität</p>`,

    },
    {
        link:"/products/geflochtenes-solo-loop-edition",
        innerHTML: `
        <p>✔️ Müheloses Anlegen<strong style="font-weight: 700;"> ohne Schnalle</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Maximaler Komfort</strong> beim Tragen</p>
        <p>✔️ <strong style="font-weight: 700;">Hochwertige geflochtene Nylonfasern</strong> und <strong style="font-weight: 700;">Edelstahl</strong>-Connectoren</p>`,
     
    },
    {
        link:"/products/keramik",
        innerHTML: `
        <p>✔️ Für einen<strong style="font-weight: 700;"> exklusiven</strong> und <strong style="font-weight: 700;">stilvollen Look</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Praktische Butterfly-Faltschließe</strong> für eine sichere und komfortable Passform</p>
        <p>✔️ <strong style="font-weight: 700;">Erstklassiges Keramik</strong> und hochwertige <strong style="font-weight: 700;">Edelstahl</strong>-Connectoren</p>`,

    },
    {
        link:"/products/gliederarmband-holz",
        innerHTML: `
        <p>✔️ Für einen<strong style="font-weight: 700;"> natürlichen</strong> und <strong style="font-weight: 700;">einzigartigen Look</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Praktische Butterfly-Faltschließe</strong> für eine sichere und komfortable Passform</p>
        <p>✔️ <strong style="font-weight: 700;">Erstklassiges und leichtes Holz</strong> mit <strong style="font-weight: 700;">Edelstahl-</strong>Connectoren für langlebige Qualität</p>`,

    },
    {
        link:"/products/hippie-lederarmband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Einzigartiges Muster</strong> für einen besonderen Look</p>
        <p>✔️ <strong style="font-weight: 700;">Vegan und stylisch</strong> für einen persönlichen Look</p>
        <p>✔️ <strong style="font-weight: 700;">Weiches und hochwertiges Kunstleder</strong> und <strong style="font-weight: 700;">Edelstahl</strong> für eine lang anhaltende Qualität</p>`,

    },
    {
        link:"/products/echtlederarmband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Exklusives Echtleder</strong>, für einen hochwertigen Look</p>
        <p>✔️ <strong style="font-weight: 700;">Garantiert edler Look</strong>, perfekt für Business und besondere Anlässe</p>
        <p>✔️ <strong style="font-weight: 700;">Höchste Qualität</strong> mit <strong style="font-weight: 700;">Echtleder</strong>, <strong style="font-weight: 700;">Kunstleder-Innenfutter</strong> und <strong style="font-weight: 700;">Edelstahl</strong>-Connectoren</p>`,

    },
    {
        link:"/products/lederarmband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Stilvoller Look</strong>, der dich für jeden Anlass optimal kleidet</p>
        <p>✔️ <strong style="font-weight: 700;">Pin-Verschluss</strong> für einen zeitlosen und sicheren Sitz</p>
        <p>✔️ <strong style="font-weight: 700;">Veganes Kunstleder</strong> und <strong style="font-weight: 700;">hochwertiger Edelstahl</strong> in Premium Qualität</p>`,

    },
    {
        link:"/products/lederarmband-lochmuster",
        innerHTML: `
        <p>✔️ Exklusives Echtleder<strong style="font-weight: 700;"> mit elegantem Lochmuster</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Garantiert edler Look</strong>, perfekt für Business und besondere Anlässe</p>
        <p>✔️ <strong style="font-weight: 700;">Erstklassiges Echtleder</strong>, sorgfältige Verarbeitung und <strong style="font-weight: 700;">Edelstahl</strong>-Connectoren</p>`,

    },
    {
        link:"/products/leder-loop",
        innerHTML: `
        <p>✔️ Für einen<strong style="font-weight: 700;"> eleganten</strong> und <strong style="font-weight: 700;"> stilvollen Look</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Stufenlos einstellbare Schlaufe</strong>, perfekte Passform für jeden Anlass</p>
        <p>✔️ <strong style="font-weight: 700;">Veganes Kunstleder</strong> und <strong style="font-weight: 700;">sicherer Magnetverschluss</strong> in Premium Qualität</p>`,

    },
    {
        link:"/products/gliederarmband-classic",
        innerHTML: `
        <p>✔️ Edles Gliederarmband für einen<strong style="font-weight: 700;"> stilvollen & eleganten Look</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Praktische Butterfly-Faltschließe</strong> und kürzbar ohne Werkzeug</p>
        <p>✔️ <strong style="font-weight: 700;">Hochwertige</strong> Verarbeitung von <strong style="font-weight: 700;">chirurgischem Edelstahl </strong>für maximale Qualität</p>`,

    },
    {
        link:"/products/pulseira",
        innerHTML: `
        <p>✔️ Klassisches Gliederarmband für einen<strong style="font-weight: 700;"> zeitlosen Look</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Stabile Faltschließe</strong>, sichere und bequeme Befestigung</p>
        <p>✔️ <strong style="font-weight: 700;">Erstklassig verarbeiteter Edelstahl</strong> in Premium Qualität für maximale Haltbarkeit</p>`,

    },
    {
        link:"/products/gliederarmband-resin",
        innerHTML: `
        <p>✔️ Stilvolles Armband mit<strong style="font-weight: 700;"> eingefassten Kunstharzelementen</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Vielseitig kombinierbar </strong> - von Jeans bis Sommerkleid</p>
        <p>✔️ <strong style="font-weight: 700;">Hochwertiger Edelstahl in roségold oder silber</strong> und Kunstharz in Premium Qualität</p>`,

    },
    {
        link:"/products/vena",
        innerHTML: `
        <p>✔️ Gliederarmband für einen<strong style="font-weight: 700;"> zeitlosen</strong> und <strong style="font-weight: 700;"> eleganten Look</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Praktische Butterfly-Faltschließe</strong>, sichere und komfortable Befestigung</p>
        <p>✔️ <strong style="font-weight: 700;">Erstklassig verarbeiteter Edelstahl</strong> in Premium Qualität für maximale Haltbarkeit</p>`,

    },
    {
        link:"/products/milanese-armband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Edles Mesh-Design</strong> für einen eleganten Look</p>
        <p>✔️ <strong style="font-weight: 700;">Perfekte Passform</strong> für jedes Handgelenk</p>
        <p>✔️ <strong style="font-weight: 700;">Erstklassig verarbeiteter Edelstahl</strong> in Premium Qualität für angenehmen Tragekomfort</p>`,

    },
    {
        link:"/products/milanese-series7",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Edles Mesh-Design</strong> für einen zeitlosen Look</p>
        <p>✔️ <strong style="font-weight: 700;">Farblich abgestimmt</strong> auf die Apple Watch Series 7+8</p>
        <p>✔️ <strong style="font-weight: 700;">Hochwertig verarbeiteter Edelstahl</strong> und <strong style="font-weight: 700;">starke Magneten</strong> in Premium Qualität</p>`,

    },
    {
        link:"/products/milanese",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Edles Mesh-Design</strong> für einen eleganten Look</p>
        <p>✔️ <strong style="font-weight: 700;">Sichere & bequeme Passform</strong> den ganzen Tag über</p>
        <p>✔️ <strong style="font-weight: 700;">Hochwertig verarbeiteter Edelstahl</strong> und <strong style="font-weight: 700;">superstarke Magneten</strong> in Premium Qualität</p>`,

    },
    {
        link:"/products/ocean-armband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Robustes Silikon-Armband</strong> für langanhaltende Haltbarkeit</p>
        <p>✔️ <strong style="font-weight: 700;">Perfekt für Wasseraktivitäten</strong>, ideal für Taucher und Wassersportler</p>
        <p>✔️ <strong style="font-weight: 700;">Wasserfestes und robustes Silikon</strong> und <strong style="font-weight: 700;">Edelstahl</strong>-Schließe in bester Qualität</p>`,

    },
    {
        link:"/products/rainbow-sport-silikonarmband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Perforiertes Silikonarmband</strong>, optimal für Sport und Freizeit</p>
        <p>✔️ <strong style="font-weight: 700;">Bunte Rainbow Edition</strong> für ein frisches Design</p>
        <p>✔️ <strong style="font-weight: 700;">Wasserfestes und robustes Silikon</strong> und <strong style="font-weight: 700;">Edelstahl-Pin</strong> in Premium Qualität</p>`,

    },
    {
        link:"/products/silikonarmband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Klassisches Silikonarmband</strong>, ideal für den Alltag</p>
        <p>✔️ <strong style="font-weight: 700;">Zeitloses Design</strong>, passt perfekt zu jedem Outfit und Stil</p>
        <p>✔️ <strong style="font-weight: 700;">Wasserfestes und robustes Silikon</strong> und <strong style="font-weight: 700;">Edelstahl-Pin</strong> in Premium Qualität</p>`,

    },
    {
        link:"/products/sport-loop-bicolor",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Nylon Loop Armband</strong>, ideal für Sport und Freizeit</p>
        <p>✔️ <strong style="font-weight: 700;">Stufenlos einstellbarer Klettverschluss</strong> für den perfekten Sitz</p>
        <p>✔️ <strong style="font-weight: 700;">Atmungsaktive Nylonfasern</strong> und Kunststoff in bester Qualität</p>`,

    },
    {
        link:"/products/multicolor-sport-loop",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Nylon Loop Armband</strong>, ideal für Sport und Freizeit</p>
        <p>✔️ <strong style="font-weight: 700;">Stufenlos einstellbarer Klettverschluss</strong> für den perfekten Sitz</p>
        <p>✔️ <strong style="font-weight: 700;">Atmungsaktive Nylonfasern</strong> und Kunststoff in bester Qualität</p>`,
    },
    {
        link:"/products/sport-loop",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Nylon Loop Armband</strong>, ideal für Sport und Freizeit</p>
        <p>✔️ <strong style="font-weight: 700;">Stufenlos einstellbarer Klettverschluss</strong> für den perfekten Sitz</p>
        <p>✔️ <strong style="font-weight: 700;">Atmungsaktive Nylonfasern</strong> und Kunststoff in bester Qualität</p>`,
    },
    {
        link:"/products/sport-silikonarmband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Perforiertes Silikonarmband</strong>, optimal für Sport und Freizeit</p>
        <p>✔️ <strong style="font-weight: 700;">Große Farbauswahl</strong> für jeden Style</p>
        <p>✔️ <strong style="font-weight: 700;">Wasserfestes und robustes Silikon</strong> und <strong style="font-weight: 700;">Edelstahl-Pin</strong> in Premium Qualität</p>`,

    },
    {
        link:"/products/trail-loop-armband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Robustes Nylon Armband</strong>, perfekt für Outdoor Aktivitäten</p>
        <p>✔️ <strong style="font-weight: 700;">Stufenlos einstellbarer Klettverschluss</strong> für den perfekten Sitz </p>
        <p>✔️ <strong style="font-weight: 700;">Hochwertiges Nylon</strong> und <strong style="font-weight: 700;">Edelstahl-Connectoren</strong> für eine langanhaltende Qualität</p>`,

    },
    {
        link:"/products/vintage-lederarmband",
        innerHTML: `
        <p>✔️ <strong style="font-weight: 700;">Stylisches Echtlederarmband</strong> für einen eleganten Look</p>
        <p>✔️ <strong style="font-weight: 700;">Passend zu jedem Outfit</strong>- vielseitig kombinierbar</p>
        <p>✔️ <strong style="font-weight: 700;">Hochwertig verarbeitetes Echtleder</strong> und <strong style="font-weight: 700;">Edelstahl</strong> in Premium Qualität</p>`,

    },
    {
        link:"/products/wendearmband-verto",
        innerHTML: `
        <p>✔️ Dein vielseitiger Begleiter<strong style="font-weight: 700;"> für jeden Tag</strong></p>
        <p>✔️ <strong style="font-weight: 700;">Einfarbig und zweifarbig</strong> in vier Styles tragbar</p>
        <p>✔️ <strong style="font-weight: 700;">Wasserabweisendes</strong> Silikon und Magnete in <strong style="font-weight: 700;">Premium Qualität</strong></p>`,
          
    },
];

function mainJs(body) {
    const currentUrl = window.location.pathname;
    products.forEach(product => {
        if(currentUrl === product.link) {
            document.querySelector('.metafield-rich_text_field').innerHTML = '';
            document.querySelector('.metafield-rich_text_field').insertAdjacentHTML('afterbegin', product.innerHTML);
        }
    });
    console.log(`APF-9.............. V-01`);

    
}

waitForElem(".product-meta .product-meta__title", mainJs);














