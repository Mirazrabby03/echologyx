import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */


function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}


function setItemsInStorage(items) {  
    localStorage.setItem("farbeClassNames", JSON.stringify(items));         
}

function setItemsInMobileStorage(items) {
    localStorage.setItem("farbeClassNamesMobile", JSON.stringify(items));
}

function getItemsFromStorage() {
    return JSON.parse(localStorage.getItem("farbeClassNames"));
}

function getItemsFromStorageMobile() {
    return JSON.parse(localStorage.getItem("farbeClassNamesMobile"));
}

function addGold(){
    localStorage.removeItem('gold-removed');
}

function removeGold(){
    localStorage.setItem('gold-removed', 'true');
}

function mainJs(body) {

    const currentItem = getItemsFromStorage();
    const currentItemMobile = getItemsFromStorageMobile();

    if(window.innerWidth > 768) {
    	waitForElem('.LUA-28__gold-farbe.LUA-28__selected', () => {
    		removeGold();
    	})
        if(currentItem) {       
                currentItem.forEach((el) => {
                    if(document.querySelector(`.${el}`) && !document.querySelector(`.${el}`).classList.contains("LUA-28__selected")) {

                        document.querySelector(`.${el}`).click();
                    }              
                });
        }

        const target = document.querySelector('.active-facets.active-facets-desktop')
        const config = { attributes: false, childList: true, subtree: true };
        const callback = function() {
            setTimeout(() => {
                updateDesktopItems();
            }, 100);    
        };
        const observer = new MutationObserver(callback);
        observer.observe(target, config);

        function updateDesktopItems(){
            const item = [...document.querySelectorAll(".LUA-28__farbe-wrapper > div")].map((el) => {
                if(el.classList.contains("LUA-28__selected")) {
                    return  el.classList[1] === "LUA-28__selected" ? el.classList[0] : el.classList[1];
                }
            }).filter((el) => el !== undefined);
            setItemsInStorage(item);
        }
    } else{
      waitForElem('.LUA-17__gold-farbe.LUA-17__selected', () => {
    		removeGold();
    	})
        if(currentItemMobile) {
            currentItemMobile.forEach((el) => {
                if(document.querySelector(`.${el}`) && !document.querySelector(`.${el}`).classList.contains("LUA-17__selected")) {
                    document.querySelector(`.${el}`).click();
                }
            });
        }

        const target = document.querySelector('.active-facets.active-facets-mobile')
        const config = { attributes: false, childList: true, subtree: true };
        const callback = function() {
                updateMobileItems();
        };
        const observer = new MutationObserver(callback);
        observer.observe(target, config);   

        function updateMobileItems(){
            const item = [...document.querySelectorAll(".LUA-17__farbe-wrapper > div")].map((el) => {
                if(el.classList.contains("LUA-17__selected")) {

                    return  el.classList[0];
                }
            }).filter((el) => el !== undefined);
            setItemsInMobileStorage(item);
        }
    }
  console.log('LUA_156.........test-01  .Variation-01')

}

waitForElem(".active-facets.active-facets-desktop", ()=>{
     setTimeout(() => {
        mainJs();
     }, 1500);
});