import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */

var productDetailPageWithBenefits = {
	init: function() {
		this.mainCss();
		this.mainJS();
	},
	mainCss: function() {
		var styles = document.createElement('style');
		styles.setAttribute('type', 'text/css');
		document.head.appendChild(styles).textContent =
			'' +
			/* CSS will be imported here */
			'';
	},
	mainJS: function() {
		document.querySelectorAll('.card-information > div').forEach(e => {
			e.style.display = 'none';
		});
		var dollar = '$';
		document.querySelectorAll('#product-grid li.grid__item').forEach(e => {
			console.log(
				e
					.querySelector('div[data-oke-reviews-product-id]')
					.getAttribute('data-oke-reviews-product-id')
					.replace(/[^\d.]/g, '')
			);
			var shopifyId = e
				.querySelector('div[data-oke-reviews-product-id]')
				.getAttribute('data-oke-reviews-product-id')
				.replace(/[^\d.]/g, '');

			var valueId = meta.products.find(el => el.id == shopifyId).variants[0].id;

			// console.log(e);
			var regularPrice = e.querySelector('.price-item.price-item--regular').textContent;
			var newPrice = regularPrice.replace(/[^\d.]/g, '');
			e.querySelector('.card-information > div').insertAdjacentHTML(
				'afterend',
				`
                    
					<div id="fixed--cart">
						<product-form class="product-form">
							<div class="product-form__error-message-wrapper" role="alert" hidden="">
								<span class="product-form__error-message"></span>
							</div>
							<form method="post" action="/cart/add" id="product-form-template--14987123261580__main" accept-charset="UTF-8"
								class="form" enctype="multipart/form-data" novalidate="novalidate" data-type="add-to-cart-form"><input
									type="hidden" name="form_type" value="product"><input type="hidden" name="utf8" value="✓">
								<input type="hidden" name="id" value="${valueId}">
								<!-- <input type="hidden" name="id[]" value="40408247664780" disabled> -->
								<div class="product-form__buttons" id="dawn-AddToCart">
									<button type="submit" name="add"
										class="product-form__submit prev-primary-btn-bg-color rev-primary-btn-text-color !rounded-[25px] button button--full-width   button--primary">
										<span class="capitalize">Add to cart ${dollar} ${newPrice}
										</span>
									</button>
								</div>
							</form>
						</product-form>
					</div>
                    `
			);
		});
	}
};

function pollForWithBenefits() {
	if (document.querySelector('#product-grid')) {
		try {
			console.log('GOOOTTTTT YOUUUUUU!!!!');
			productDetailPageWithBenefits.init();
			console.log('Variation- A: 01');
		} catch (error) {
			console.log('Initialization error:', error);
		}
	} else {
		setTimeout(pollForWithBenefits, 10);
	}
}
pollForWithBenefits();

console.log('Running................');


