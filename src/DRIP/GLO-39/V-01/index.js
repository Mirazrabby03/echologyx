import './styles/index.scss';

/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

	if (timer <= 0) return;

	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}
function initializeTabbedContent() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    function showTabContent(index) {
        contents.forEach(content => {
            content.style.display = 'none';
        });
        contents[index].style.display = 'block';
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabs[index].classList.add('active');
    }
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            showTabContent(index);
        });
    });
    showTabContent(0);

    const tabContainer = document.querySelector('.tab-container');
    const lastTab = document.querySelector('#tab4');
    const firstTab = document.querySelector('#tab1'); 

    lastTab.addEventListener('click', function() {
        const scrollDistance = tabContainer.scrollWidth - tabContainer.clientWidth;
        tabContainer.scrollLeft = scrollDistance;
    });
    firstTab.addEventListener('click', function() {
        tabContainer.scrollLeft = 0;
    });

}

function mainJs(body) {
    let accordianTabs = `
    <div class="ab__tab__content__container">
        <div class="tab-container">
            <div class="tab" id="tab1">Beschreibung</div>
            <div class="tab" id="tab2">Anwendung</div>
            <div class="tab" id="tab3">Zutaten</div>
            <div class="tab" id="tab4">Aminogramm</div>
        </div>

        <div class="content-container">
            <div class="content" id="content1">
                <div class="ab__content__title">
                    <h2>Das Glow25 Versprechen – Wahre Schönheit kommt von innen</h2>
                </div>
                <div class="ab__first__content__subTitle">
                    <p class="ab__first__content__subTitle__text">Glow – das ist das natürliche Strahlen, das du erlebst, wenn du in den Spiegel schaust und erkennst: <span class="underline__text">Du bist in dir angekommen</span>. Glow zeigt sich in deinem selbstbewussten Blick, deinen entspannten Gesichtszügen, deinem wissenden Lächeln. 
                    </p>
                    <p class="ab__first__content__subTitle__text">Glow zeigt sich im Bewusstsein, dass du sein darfst,<span class="underline__text">wie du bist</span>. Unsere Mission ist es, deinen Tag mit Glow- Momenten zu bereichern. Nicht, indem wir deinen Körper von außen mit etwas bedecken.
                    </p>
                    <p class="ab__first__content__subTitle__text">Wir glauben, dass der Schlüssel zu deiner wahren Schönheit in deinem Inneren liegt. Sie zeigt sich, wenn du authentisch bist, für dich einstehst und deinem Körper das gibst, was er braucht, um sein kraftvolles Gleichgewicht zu finden.
                    </p>
                </div>
            </div>
            
            <div class="content" id="content2">
                <div class="ab__content__title">
                    <h2>Anwendung</h2>
                </div>
                <div class="ab__first__content__subTitle">
                    <p class="ab__first__content__subTitle__text">Täglich 1-2 Esslöffel Kollagen Pulver (10-20g) in Wasser, Shakes, Smoothies, Suppen, Tee oder Kaffee einrühren und genießen. Das Pulver ist geschmacksneutral und leicht löslich. 
                    </p>
                    <div class="ab__content__title">
                        <h2>Rezept-Tipp: Dein Glow-Coffee am Morgen</h2>
                    </div>
                    <p class="ab__first__content__subTitle__text">Viele Kundinnen nutzen das Kollagen Pulver von Glow <span class='upper__text'>25 </span> <span class='right__text'>in ihrem Kaffee.</span> Gib dazu einfach 1-2 Esslöffel in 250ml Kaffee und fertig ist der Glow Coffee.
                    </p>
                </div>
            </div>
            <div class="content" id="content3">
                <div class="ab__content__title">
                    <h2>Zutaten</h2>
                </div>
                <div class="ab__first__content__subTitle">
                <p class="ab__first__content__subTitle__text">100% reines Kollagen-Hydrolysat – ohne Zusatzstoffe</p>
                <div class="ab__table__container">
                <div class="bordered">
                <div class="row">
                    <div class="cell">Glow Kollagen Pulver</div>
                    <div class="cell">Je 100g</div>
                </div>
                <div class="row">
                    <div class="cell">Energie</div>
                    <div class="cell">1502 kJ/359 kcal</div>
                </div>
                <div class="row">
                    <div class="cell">Fett</div>
                    <div class="cell">0 g</div>
                </div>
                <div class="row">
                    <div class="cell">davon gesättigt</div>
                    <div class="cell">0 g</div>
                </div>
                <div class="row">
                    <div class="cell">Kohlenhydrate </br>davon Zucker</div>
                    <div class="cell">0 g </br>0 g</div>
                </div>
            
                <div class="row">
                    <div class="cell">Ballaststoffe</div>
                    <div class="cell">0 g</div>
                </div>
                <div class="row">
                    <div class="cell">Eiweiß</div>
                    <div class="cell">94 g</div>
                </div>
                <div class="row">
                    <div class="cell">Salz</div>
                    <div class="cell">&lt; 0,01 g</div>
                </div>
            </div>
                </div>
                </div>
            </div>
            
            <div class="content" id="content4">
                <div class="ab__content__title">
                    <h2>Aminogramm</h2>
                </div>
                <p class="ab__first__content__subTitle__text">Menge der Aminosäuren in Milligramm pro 100 Gramm Kollagen:</p>
                <div class="ab__table__container">
                    <div class="ab__table__left__content">
                        <p>Alanin: 8600 mg</p>
                        <p>Arginin: 7300 mg</p>
                        <p>Asparaginsäure: 5800 mg</p>
                        <p>Cystein: 0 mg</p>
                        <p>Glutaminsäure: 10200 mg</p>
                        <p>Glycin: 22200 mg</p>
                        <p>Histidin: 1000 mg</p>
                        <p>Isoleucin: 1400 mg</p>
                        <p>Leucin: 2700 mg</p>
                    </div>
                    <div class="ab__table__right__content">
                        <p>Lysin: 3600 mg</p>
                        <p>Methionin: 900 mg</p>
                        <p>Phenylalanin: 2100 mg</p>
                        <p>Prolin: 12700 mg</p>
                        <p>Serin: 3200 mg</p>
                        <p>Threonin: 1800 mg</p>
                        <p>Tryptophan: 0 mg</p>
                        <p>Tyrosin: 800 mg</p>
                        <p>Valin: 2400 mg</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

	if(window.innerWidth >768){
        document.querySelector('.elementor-section[data-id="5b9e45e8"]').insertAdjacentHTML(
            'afterbegin', accordianTabs	
        );

    }else{
        document.querySelector('.elementor-section[data-id="6b48581d"]').insertAdjacentHTML(
            'beforeend', accordianTabs	
        );
        document.querySelector(".tab-container").addEventListener("scroll", ()=>{
            var elem= document.querySelector(".tab-container");
            document.querySelector(".tab-container").classList.remove('margin-right-20');
            var newScrollLeft = elem.scrollLeft,
                width= elem.offsetWidth,
                scrollWidth= elem.scrollWidth;
            if (scrollWidth- newScrollLeft-width < 4) {
                document.querySelector(".tab-container").classList.add('margin-right-20');
            }  
        })
    }
   
    initializeTabbedContent();

	console.log(`GLO-39: Initialized.......`);
}


waitForElem('.elementor-section[data-id="5b9e45e8"], .elementor-section[data-id="6b48581d"]', () => {
    mainJs();
},2); 

