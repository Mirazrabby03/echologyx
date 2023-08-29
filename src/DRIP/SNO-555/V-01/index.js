import './styles/index.scss';

/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

	if (timer <= 0) return;

	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}

function mainCss() {
	var styles = document.createElement('style');

	styles.setAttribute('type', 'text/css');

	document.head.appendChild(styles).textContent =
		'' +
		/* CSS will be imported here */

		'';
}

const asset ={
	accordianIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
	<path d="M6.37383 5.8583L11.8574 0.766687C11.9489 0.681731 12 0.568862 12 0.451488C12 0.334115 11.9489 0.221246 11.8574 0.13629L11.8512 0.130807C11.8068 0.0894799 11.7534 0.0565715 11.6942 0.0340838C11.635 0.0115962 11.5712 -3.74845e-08 11.5068 -4.31174e-08C11.4424 -4.87503e-08 11.3786 0.0115961 11.3194 0.0340838C11.2602 0.0565714 11.2068 0.0894799 11.1624 0.130807L5.99897 4.92549L0.837607 0.130806C0.793229 0.0894789 0.739812 0.0565705 0.680605 0.0340829C0.621398 0.0115952 0.557638 -1.00032e-06 0.493206 -1.00596e-06C0.428773 -1.01159e-06 0.365015 0.0115952 0.305808 0.0340828C0.246601 0.0565705 0.193184 0.0894789 0.148806 0.130806L0.142609 0.136289C0.0510669 0.221245 4.95327e-07 0.334114 4.85066e-07 0.451487C4.74805e-07 0.568861 0.0510669 0.68173 0.142609 0.766686L5.62617 5.8583C5.67439 5.90308 5.73239 5.93872 5.79665 5.96308C5.86091 5.98744 5.93009 6 6 6C6.06991 6 6.13909 5.98744 6.20335 5.96308C6.26761 5.93872 6.32561 5.90308 6.37383 5.8583Z" fill="#1C1C1C" style="fill:#1C1C1C;fill:color(display-p3 0.1098 0.1098 0.1098);fill-opacity:1;"/>
	</svg>
    `
}

function mainJs(body) {
	document.querySelector('.product-gallery__main') && document.querySelector('.product-gallery__main').swiper.destroy();
	document.querySelector('.product-gallery-main-wrapper .swiper-button-next').remove();
	document.querySelector('.product-gallery-main-wrapper .swiper-button-prev').remove();

	document.querySelector('.product-gallery__main .swiper-wrapper').insertAdjacentHTML('afterend', `<div class='btn-container'><button id="toggleBtn" class="show-btn">Mehr anzeigen </button> <div class='accordion-icon'>${asset.accordianIcon}</div></div>
	`);

	const btnContainer = document.querySelector('.btn-container');
	const imageSlides = document.querySelectorAll('.product-gallery__container .swiper-wrapper .swiper-slide');
	const imagesToToggle = Array.from(imageSlides).slice(4);
	const availableImages = document.querySelectorAll('.product-gallery__container .swiper-wrapper .swiper-slide').length
	console.log('availableImages', availableImages);
	console.log(imagesToToggle, 'imagesToToggle');
	const swiperWrapper = document.querySelector('.swiper-wrapper');

	imagesToToggle.forEach(el => {
		el.classList.add('hidden');
	});

	btnContainer.addEventListener('click', (e) => {
		document.querySelector('.accordion-icon').classList.toggle('close');
		// change text to Weniger anzeigen
		
		toggleBtn.textContent = toggleBtn.textContent.includes('Mehr anzeigen') ? `Weniger anzeigen` : `Mehr anzeigen `;

		const allImages = imagesToToggle[0].classList.contains('hidden');
		imagesToToggle.forEach(el => {
			el.classList.toggle('hidden');
		});
		if (!allImages) {
			swiperWrapper.scrollIntoView({ behavior: 'smooth' });
		}
	});

	if (availableImages <= 4) {
		console.log('lesst than 4');
		toggleBtn.classList.add('hidden');
	}

	mainCss();

	console.log(`Test Name - Variant Name`);
}

waitForElem('.PageContainer', mainJs);
