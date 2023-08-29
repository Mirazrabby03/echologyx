import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
	if (timer <= 0) return;
	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}
let echoVariation = {
	init: function() {
		this.mainCss();
		this.mainJs();
	},
	mainCss: function() {
		var styles = document.createElement('style');
		styles.setAttribute('type', 'text/css');
		document.head.appendChild(styles).textContent =
			'' +
			/* CSS will be imported here */

			'';
	},
	mainJs: function() {
		document.querySelector('.wissenschaftl-basis__wrapper').insertAdjacentHTML(
			'afterend',
			`
            <div class="PageContent PageContent--narrow">
          <div class="Faq">
			<button class="accordion">
			<span class="Faq__Icon"><svg class="Icon Icon--select-arrow-right " role="presentation" viewBox="0 0 11 18">
      <path d="M1.5 1.5l8 7.5-8 7.5" stroke-width="2" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square"></path>
    </svg></span>
				<h3 class='question_title'> Deine Nährwerte pro Tag </h3>
		  	</button>
            
            <div class="accordion-content">
			<div class="Faq__Answer Rte">
			<p>Energie: <strong>Ø 1200kcal<br></strong>Proteine: <strong> über 100g (100% Pflanzlich)<br></strong>Kohlenhydrate:<strong> Ø 70g<br></strong>Fette: <strong>Ø 52g (aus gesunden Fettsäuren)<br></strong>Dein Tagesbedarf an Vitamine &amp; Mineralstoffe: <strong>Vitamin A, D, E, C, K, B6, B12, Biotin, Calcium, Magnesium, Eisen, Zink, Mangan &amp; viele mehr</strong></p>
		  </div>
            </div>
          </div>
		  <div class="Faq">
			<button class="accordion">
			<span class="Faq__Icon"><svg class="Icon Icon--select-arrow-right " role="presentation" viewBox="0 0 11 18">
      <path d="M1.5 1.5l8 7.5-8 7.5" stroke-width="2" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square"></path>
    </svg></span>
				<h3 class='question_title'> Das ist in der Foodkur enthalten: </h3>
		  </button>
            <div class="accordion-content">
            <div class="Faq__Answer Rte">
                  <p>1x pro Tag Low Carb Porridge Deiner Wahl&nbsp;<br>2x pro Tag Trinkmahlzeit Mix Deiner Wahl&nbsp;<br>1x pro Tag eine Low Carb High Protein Mahlzeit<br>1x pro Tag Protein Knabbersnack&nbsp;<br>1x pro Tag Happy Lemon + Sunshine Berry Shot&nbsp;</p><p>+ Umfangreicher Guide als Begleiter für Deine Kur</p>
                </div>
            </div>
          
           </div>
          </div>
          
        `
		);

		const accordionBtns = document.querySelectorAll('.accordion');

		accordionBtns.forEach(accordion => {
			accordion.onclick = function() {
				this.classList.toggle('is-open');

				let content = this.nextElementSibling;
				console.log(content);

				if (content.style.maxHeight) {
					//this is if the accordion is open
					content.style.maxHeight = null;
				} else {
					//if the accordion is currently closed
					content.style.maxHeight = content.scrollHeight + 'px';
					console.log(content.style.maxHeight);
				}
			};
		});
	}
};
waitForElem('body', elements => {
	if (elements) {
		console.log(`Liv-125: Communicate content and nutrients on foodkur pdp -V01`);
		echoVariation.init();
	}
});
