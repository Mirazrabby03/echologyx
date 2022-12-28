import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */
var echoVariation = {
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
		if (cartJson.item_count > 0) {
            document.querySelector('.side-cart').classList.add('active');
			document.querySelector('.cartHeader').classList.add('welcomeCart');
			document.querySelector('.welcomeCart').insertAdjacentHTML('afterend', `You have ${cartJson.item_count} items in your cart`);
            document.querySelector('.welcomeCart').insertAdjacentHTML('beforeend', `<div class="close-container">
            <a href="#" class="close"">
              <i class="lnr animation lnr-cross"></i>
            </a>
          </div>`)
			document.querySelector('.welcomeCart').textContent = 'Welcome back';
			document.querySelectorAll('.free__shipping--bar').forEach(e => {
				e.classList.add('hidden');
			});
			document.querySelector('.offer-wrapper').classList.add('hidden');
			document.querySelector(' div.wrap > div:nth-child(4)').remove();
			document.querySelector('.side__cart--totalSection').classList.add('hidden');
			document.querySelector('.promo__hint').classList.add('hidden');
		}
	}
};

(function pollOnload() {
	if (document.querySelector('.side-cart')) {
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

{
	/* <select name='updates[${variant_id}]: '>
                        <option value='${quantity}'>${quantity} </option>
    
                    </select>
                 <a class='remove-from-cart animation remove' data-lineitem='${variant_id}'>
                        Remove
                    </a>
                <input readonly value = ${quantity} />
                */
}
