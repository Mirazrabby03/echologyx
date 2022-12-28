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
		// //add new class in header
		// document.querySelector(".cartHeader").classList.add('welcomeCart');
		// document.querySelector('.welcomeCart').insertAdjacentHTML('afterend', `You have 2 items in your cart`);
		// //ads text in class
		// document.querySelector('.welcomeCart').textContent='Welcome back';
		// document.querySelectorAll('.free__shipping--bar').forEach(e=>{e.classList.add('hidden')});
		// document.querySelector('.offer-wrapper').classList.add('hidden');
		// document.querySelector('.sample__top--section').classList.add('hidden');
		// document.querySelector("#page > div.side-cart.active > div > div.wrap > div:nth-child(5)").classList.add('hidden');
		// document.querySelector("#page > div.side-cart.active > div > div.footer > div > div > div.side__cart--totalSection.subtotal__data--section").classList.add('hidden');
		// document.querySelector("#page > div.side-cart.active > div > div.footer > div > div > p").classList.add('hidden');
        var itemCount = cartJson.item_count;
        var dollar = "$";
        document.querySelector('#header').insertAdjacentHTML('afterend', `
            <div class = 'cart_item_container'>
                <div class = 'welcome_header'>
                    <p class="header_text">Welcome back </p> </br> 
                    <p> You have ${itemCount} items in your cart </p>
                </div>
            </div>`);
        cartJson.items.forEach(el=> {
            var key = el.key;
            var title = el.product_title;
            var price = (el.final_price)/100;
            var quantity = el.quantity;
            var sku = el.sku;
            var vendor = el.vendor;
            var image = el.image;
            var totalPrice = (el.line_price)/100;
            var url = el.url;
            var variant_id = el.variant_id;
            

            document.querySelector('.cart_item_container').insertAdjacentHTML('beforeend', `
           
    

        <div class='cart_image_item_container' 
            data-item-key='${key}'    
            data-product-title='${title}'
            data-variant-title='Default Title'
            data-variant-price='${price}'
            data-quantity='${quantity}'
            data-type='tools'
            data-sku='${sku}'
            data-vendor='${vendor}'>

            <div class='cart_item-image'>
                <img
                    src='${image}'
                    alt='h<em>air</em> | blow dryer brush 2.0'
                />
            </div>
            <div class='cart_item--info'>
            <div class="cross ">
                <img src="https://cdn.shopify.com/s/files/1/0495/0596/0091/files/Vector_2.svg?v=1629899010"/>
                </div>
                <div class='cart_item--details'>
                    <a href='${url}'>
                        <p class='text'>
                             <span> ${title}</span>
                        </p>
                    </a>
                </div>
                
                <div class='cart_item--priceDetails'>
                    <div class='deal '>
                        <span>${dollar}${totalPrice}</span>
                    </div>
                </div>

                <div class='cart_item--action'>
                <div class='cart_item--actionQuantity'>
                   
                    <div class="counter_area >
                    <span class="minus">-</span>
                    <span class="currentItem">${quantity}</span>
                    <span class="pluse">+</span>
                </div>
                    
                </div>
            </div>
            </div>
            </div>
          
        
        </div>
       
            `);
           
                document.querySelectorAll('.pluse').forEach(elm=>{
                    elm.addEventListener('click', function(e){
                        e.preventDefault();
                        // var p_id = document.querySelector("#shopify-section-1516311580520 > div.cart_item_container > div").getAttribute('data-quantity');
                        // p_id = parseInt(p_id) + 1;
    
                        // console.log('i am clicked', e.target.closest('.cart_image_item_container'));
                        var informationData = e.target.closest('.cart_image_item_container')
                        console.log(informationData)
                        var plusCount = e.target.closest('.currentItem');
                        console.log("This is a plus count", plusCount)
                      
                        var currentQuantity =  informationData.getAttribute("data-quantity");
                        var body = "%5B" + informationData.getAttribute('data-item-key').replace(":","%3A") + "%5D=" + (+currentQuantity + 1) ;
                        console.log(body);
    
                        fetch("https://loveamika.com/cart/update.js", {
                                "headers": {
                                
                                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                                    "x-requested-with": "XMLHttpRequest"
                                },
                                "referrer": "https://loveamika.com/",
                                "referrerPolicy": "strict-origin-when-cross-origin",
                                "body": `"updates${body}"`,
                                                  
                                "method": "POST",
                                "mode": "cors",
                                "credentials": "include"
                                }).then((response) => response.json())
                                .then((data) => {
                                   var newCount = document.querySelectorAll('.currentItem').forEach(el=>{
                                    el.textContent = +currentQuantity + 1;
                                    console.log('This is new value', newCount)
                                   })
                                    
                                    //  informationData.setAttribute("data-quantity") = +currentQuantity + 1;
                                    +itemCount +1;
                                  console.log('Success:', data);
                                })
                                .catch((error) => {
                                  console.error('Error:', error);
                                });
                                
                                
                               
                        
                    })
                })
                


           
            
        })
        
       
		
	}
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



{/* <select name='updates[${variant_id}]: '>
                        <option value='${quantity}'>${quantity} </option>
    
                    </select>
                 <a class='remove-from-cart animation remove' data-lineitem='${variant_id}'>
                        Remove
                    </a>
                <input readonly value = ${quantity} />
                */}