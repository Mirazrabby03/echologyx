import "./styles/index.scss";
/* DO NOT IMPORT ANYTHING */function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
    if (timer <= 0) return;
    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}
let echoVariation = {
    init: function () {
        this.mainCss();
        this.mainJs();
    },
    mainCss: function () {
        var styles = document.createElement("style");
        styles.setAttribute("type", "text/css");
        document.head.appendChild(styles).textContent =
            "" +
            /* CSS will be imported here */

            "";
    },
    mainJs: function () { 
        let products = {
            "Force 10": "https://www.fred.com/on/demandware.static/-/Sites-fred-master-catalog/default/dwd7eff549/product_images/0B0153-6B0211-A.png",
            "Chance Infinie": "https://www.fred.com/on/demandware.static/-/Sites-fred-master-catalog/default/dwd822b1ca/product_images/4B0871-A.png",
            "Pretty Woman": "https://www.fred.com/on/demandware.static/-/Sites-fred-master-catalog/default/dw694a40bd/product_images/7B0259-A.png",
            "Pain de Sucre": "https://www.fred.com/on/demandware.static/-/Sites-fred-master-catalog/default/dw1b0dc40d/product_images/4B0769-4B0754-A.png",
            "Success": "https://www.fred.com/on/demandware.static/-/Sites-fred-master-catalog/default/dw2c2fdd20/product_images/4B0313-A.png",
            "Ombre Féline": "https://www.fred.com/on/demandware.static/-/Sites-fred-master-catalog/default/dwc2498ada/product_images/4B0942-A.png"
          };


        //   document.querySelectorAll('.dropdown-menu [aria-labelledby="all-collections-collections"] li.list-item').forEach(elm=>{
        //     const productTitle = elm.innerText.trim();
        //     console.log('Miraz', products[productTitle]);
        //     elm.insertAdjacentHTML('afterbegin', `
        //     <div class='image-container'>
        //     <img class='img-tiles' src= "${products[productTitle]}" />
        //     </div>
        //     `);
        
            
        //     console.log('Miraz', productTitle);

            

            
        
        // })


        document.querySelector("body > div.page.page-edito.page-edito-detail.header-fixed.hasCover").insertAdjacentHTML('afterend', `
      
        <div class="container-box">
        <div class="image">
          <img src="https://www.fred.com/on/demandware.static/-/Sites-fred-master-catalog/default/dwd7eff549/product_images/0B0153-6B0211-A.png" alt="Your Image">
        </div>
        <div class="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada euismod lectus, sit amet fringilla urna dapibus vel. Ut in mi a sapien ullamcorper interdum sed eu nulla. Proin malesuada erat eget lectus ullamcorper, at malesuada lectus euismod. Aenean lobortis purus nunc, et lacinia velit mollis et. Duis vel nulla libero

          
        </div>
      </div>
        `)
    },
};
waitForElem("body", (elements) => {
    if (elements) {
        console.log(`Test Name - Variant Name`);
        echoVariation.init();
    }
});
