import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */

var productDetailPageWithBenefits  = {
    init: function () {
        this.mainCss();
        this.mainJS();
        // this.goalJS();
    },
    mainCss: function() {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '' +
            /* CSS will be imported here */
            '';
    },
    mainJS: function () {
		 function detectNetworkCall__method_2() {
			var send = XMLHttpRequest.prototype.send;
				
			XMLHttpRequest.prototype.send = function () {
				
			this.addEventListener("load", function (e) {
			
            
           if (this.responseURL.includes("update.js") && this.status === 200 &&this.readyState === 4) {	
			      console.log("Detected cartSummary network call.");
            
            var shippingLimit = 100;
            var price = document.querySelector('strong.slidecart-subtotal') ? document.querySelector('strong.slidecart-subtotal').textContent.replace(/[^\d.]/, ''): 0;
            !document.querySelector('body').classList.contains('cart_text_ref') && newElement();
             document.querySelector('strong.slidecart-subtotal') && progress();  
         

            function newElement(){
                let dollar = "$";
            	document.querySelector('body').classList.add("cart_text_ref")
                document.querySelector("#slidecarthq > div.slidecarthq.right.light.open > header").insertAdjacentHTML("afterend", `
                <div class="cart-text">
                <p class="freeShipping_await">You're ${dollar} <span class="shipping_price"><span class="s_price">100</span></span> <br>away from free shipping </p>
             <p class="qualify_text">You qualify for free shipping!</p>
                <div class="progress_bar">
                    <div class="progress">
                </div>
                </div>
                `); 
               
            }
	
            function progress(){
            
                document.querySelector('.progress').classList.remove('percantage_bar');
			    price = document.querySelector('strong.slidecart-subtotal').textContent.replace(/[^\d.]/, '');
                price = isNaN(price) ? 0: price;
                var awayPrice = shippingLimit - price;
                var percantage = (100 * price)/ shippingLimit;
                console.log(percantage);
                document.querySelector('.progress').style.width = `${percantage}%`;
              
                if(awayPrice < 1){
                    document.querySelector('.qualify_text').style.display = "block";
                    document.querySelector('.freeShipping_await').style.display = "none";
                }else{
                    console.log("Siam bhai",awayPrice);
                    document.querySelector('.shipping_price').textContent = awayPrice;
                    document.querySelector('.qualify_text').style.display = "none";
                    document.querySelector('.freeShipping_await').style.display = "block";
                }

            }


            const targetNode = document.querySelector('#slidecarthq');

            // Options for the observer (which mutations to observe)
            const config = { attributes: true, childList: true, subtree: true };
            
            // Callback function to execute when mutations are observed
            const callback = (mutationList, observer) => {
              for (const mutation of mutationList) {
                if (mutation.type === 'childList') {
                    function priceUpdate(){
                       
                        document.querySelector('.progress').classList.add('percantage_bar');
                        
                         
                          var updatedPrice = document.querySelector('strong.slidecart-subtotal').textContent.replace(/[^\d.]/, '');
                          updatedPrice = isNaN(updatedPrice) ? 0: updatedPrice;
                          if( updatedPrice !==price){
                            price = updatedPrice;
                            console.log(price, updatedPrice)
                             progress();
                        } 
                    }
                    document.querySelector('strong.slidecart-subtotal') && priceUpdate();
                    if(document.querySelector("#slidecarthq > div.slidecarthq.right.light.open").classList.contains('cartEmpty')){
                        document.querySelector('.cart-text') &&    document.querySelector('.cart-text').remove();
                        document.querySelector('body').classList.remove('cart_text_ref');
                        
                }
                  console.log('A child node has been added or removed.');
                } else if (mutation.type === 'attributes') {
                  console.log(`The ${mutation.attributeName} attribute was modified.`);
                }
              }
            };
            
            // Create an observer instance linked to the callback function
            const observer = new MutationObserver(callback);
            
            // Start observing the target node for configured mutations
            observer.observe(targetNode, config);

				     }
				
				   });
				
		    	return send.apply(this, arguments);
		 };
		
		}
		detectNetworkCall__method_2();
    }

};

(function pollForWithBenefits() {
    if (document.getElementById('PageContainer')) {
        try {
            productDetailPageWithBenefits.init();
			console.log("Variation- A: 01");
		} catch (error) {
		  console.log("Initialization error:", error);
		}
    } else {
        setTimeout(pollForWithBenefits, 25);
    }
})();