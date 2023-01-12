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

	renderCounter: function (selector, position, timerType) {
		document.querySelector(selector).insertAdjacentHTML(
			position,
			`<div class="main-container ${timerType}">
			<div class="hero-container ${timerType}">
				<div class="hero-title">
					<h1>Expert Plumbing Cover From 50p a month*</h1>
				</div>
				<div class="date-countdown-container">
					<div class="limited-offer-text">
						<p> Limited offer ends in </p>
					</div>  
					<div class="date-countdown">
						<div class="sw__hero">
							<div class="sw__hero__background">
							</div>
							<div class="sw__hero__content">
								<div class="sw__hero__countdown">
									<div class="sw__hero__countdown__wrapper" style="display: inline-block; ">
										<div style="display: flex;">
											<div class="wrap" style="margin-right: 5px;">
												<div class="sw__hero__countdown__date_container links">
													<div class="sw__hero__countdown__dates" id="days1"></div>
												</div>
											</div>
											<div class="wrap">
												<div class="sw__hero__countdown__date_container links">
													<div class="sw__hero__countdown__dates" id="days2"></div>
												</div>
											</div>
										</div>
										<p class="sw__hero__countdown__date_label">Days</p>
									</div>
									<div class="dot_diveider"><span>:</span></div>
									<div class="sw__hero__countdown__wrapper" style="display: inline-block;">
										<div style="display: flex;">
											<div class="wrap" style="margin-right: 5px;">
												<div class="sw__hero__countdown__date_container links">

													<div class="sw__hero__countdown__dates" id="hours1"></div>
												</div>
											</div>
											<div class="wrap">
												<div class="sw__hero__countdown__date_container links">
													<div class="sw__hero__countdown__dates" id="hours2"></div>
												</div>
											</div>
										</div>
										<p class="sw__hero__countdown__date_label">Hours</p>
									</div>
									<div class="dot_diveider"><span>:</span></div>
									<div class="sw__hero__countdown__wrapper" style="display: inline-block;">
										<div style="display: flex;">
											<div class="wrap" style="margin-right: 5px;">
												<div class="sw__hero__countdown__date_container links">
													<div class="sw__hero__countdown__dates" id="minutes1"></div>
												</div>
											</div>
											<div class="wrap">
												<div class="sw__hero__countdown__date_container links">
													<div class="sw__hero__countdown__dates" id="minutes2"></div>
												</div>
											</div>
										</div>
										<p class="sw__hero__countdown__date_label">Minutes</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<div class="offer-note">
				<p>* Offer ends 18th January 2023. New customer offer. Homeowners only. T&Cs apply.
			</div>           
		`
		);
		echoVariation.countDown();
	},

	countDown: function () {
		var countDownDate = new Date("Jan 18, 2023 10:00:00").getTime();
		var x = setInterval(function () {
			var now = new Date().getTime();
			var distance = countDownDate - now;
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

			function prependZero(number) {
				if (number <= 9)
					if (number < 0) {
						return "00";
					} else {
						return "0" + number;
					}
				else return number;
			}

			days = prependZero(days);
			hours = prependZero(hours);
			minutes = prependZero(minutes);

			document.getElementById("days1").innerHTML = days.toString().slice(0, 1);
			document.getElementById("days2").innerHTML = days.toString().slice(1, 2);
			document.getElementById("hours1").innerHTML = hours.toString().slice(0, 1);
			document.getElementById("hours2").innerHTML = hours.toString().slice(1, 2);
			document.getElementById("minutes1").innerHTML = minutes.toString().slice(0, 1);
			document.getElementById("minutes2").innerHTML = minutes.toString().slice(1, 2);

		}, 1000);
	},

	mainJs: function () {
		if (window.location.href == "https://www.homeserve.com/uk") {
			var image = 'https://dd558xhlw1iyt.cloudfront.net/AdobeStock_new.jpg';
			document.querySelector('#heroBannerContent #heroBannerHouse > picture').remove();
			document.querySelector('#heroBannerHouse').insertAdjacentHTML(
				'afterbegin',
				`
				<picture>
				<source srcset="${image}" type="image/webp">
				<source srcset="${image}" type="image/jpeg">
				<img class="heroMask" src="${image}" title="HomeServe engineer arrives at house" alt="Engineer arriving at house">
				</picture>
				`
			);
			document.querySelector("#heroBanner").insertAdjacentHTML('afterbegin', `
			<svg class="gray-svg" xmlns="http://www.w3.org/2000/svg" width="1140" height="134.32" viewBox="0 0 1140 134.32">
			<path id="Subtraction_2" data-name="Subtraction 2" d="M1140,565H0V430.682c135.842,77.728,343.6,122.307,570,122.307s434.158-44.58,570-122.308V565Z" transform="translate(0 -430.681)" fill="#f0f0f0"></path>
			</svg>
			`)

			echoVariation.renderCounter('#heroBannerCopy', "afterbegin", "half__width__timer");

			document.querySelector('#heroBannerCta .btn-solid').innerText = "View plumbing cover";
			document.querySelector("#heroBannerCta .btn-solid").setAttribute("href", "https://www.homeserve.com/uk/insurance-cover/plumbing-and-drainage-comparison");

			document.querySelector('.offer-note').insertAdjacentElement('afterend', document.querySelector('#heroBannerCta'));
		} else if (window.location.href == "https://www.homeserve.com/uk/insurance-cover/plumbing-and-drainage-comparison") {
			echoVariation.renderCounter(".row.category-items .h3", "afterend", "full__width__timer");
			document.querySelector("div.hero-container.full__width__timer > div.date-countdown-container").insertAdjacentHTML('afterend', `
				<div class="button">
					<a href="https://www.homeserve.com/uk/insurance/plumbing-drainage-cover?aboutyou=true" class="offer-btn">View offer</a>
				</div>
			
			`)

		}

		else if (window.location.href == "https://www.homeserve.com/uk/insurance/plumbing-drainage-cover?aboutyou=true") {
			echoVariation.renderCounter("div.page.page--product.page--plumbing > div.row.hero-banner.is-black > div.hero-banner__content.with-sticky", "beforeend", "quarter__width__timer");
			document.querySelector("#content-block div.page.page--product.page--plumbing > div.row.hero-banner.is-black > div.hero-banner__side.with-sticky > div.bubble.bubble--left.with-sticky > div.price-info.with-sticky > div").textContent = "50p";
		}
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


