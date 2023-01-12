import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */
var echoVariation = {
	init: function() {
		this.mainCss();
		this.mainJs();
		this.goals();
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
		var image = 'https://dd558xhlw1iyt.cloudfront.net/AdobeStock_new.jpg';
		document.querySelector('#heroBannerHouse > picture').remove();
		  document.querySelector('#heroBannerCopy').remove();
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
		document.querySelector('#heroBannerContent').insertAdjacentHTML(
			'afterbegin',
			`
            <div class="hero-title">
            <h1>Expert Plumbing Cover For 50p a month*</h1>
            
			
			<div class="date-countdown-container">
			<div class = "text-container">
			<p>Limited odder ends in </p>
			</div>
			<div class="date-count-container">	
				<h2 id="day">0</h2>
				<p>:</p>
				<h2 id="hour">0</h2>
				<p>:</p>
				<h2 id="minute">0</h2>
			</div>
    			</div>
				</div>
        `
		);


		// Set results
		let dayField = document.getElementById('day');
		let hourField = document.getElementById('hour');
		let minuteField = document.getElementById('minute');
		// let secondField = document.getElementById('second');

		var countDownFn = () => {
			let interval;
			var eventDay = new Date('01/07/2023');

			var second = 1000;
			var minute = second * 60;
			var hour = minute * 60;
			var day = hour * 24;

			// All logic goes in
			
			let now = new Date();
			let timeSpan = eventDay - now;

			if (timeSpan <= -now) {
				console.log('Unfortunately we have past the event day');
				clearInterval(interval);
			} else if (timeSpan <= 0) {
				console.log('Today is the event day');
				clearInterval(interval);
				return;
			} else {
				var days = Math.floor(timeSpan / day);
				var hours = Math.floor((timeSpan % day) / hour);
				var minutes = Math.floor((timeSpan % hour) / minute);
				// var seconds = Math.floor((timeSpan % minute) / second);

				console.log(days + ':' + hours + ':' + minutes );
			}
            dayField.innerHTML = days;
		hourField.innerHTML = hours;
		minuteField.innerHTML = minutes;
		// secondField.innerHTML = seconds;
		};
		

        // everySecond = setInterval(countDownFn, second);
			everyMinute = setInterval(countDownFn, minute);
			everyHour = setInterval(countDownFn, hour);
	},
	goals: function() {}
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
