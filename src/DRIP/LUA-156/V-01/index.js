import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

function mainCss() {

    var styles = document.createElement("style");

    styles.setAttribute("type", "text/css");

    document.head.appendChild(styles).textContent =

        "" +

        /* CSS will be imported here */

        "";

};

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

function mainJs(body) {
  
    const currentItem = getItemsFromStorage();
    const currentItemMobile = getItemsFromStorageMobile();
    
    if(window.innerWidth > 768) {
        if(currentItem) {
           // if LUA-28__farbe-V2 class exists in body then remove it
            // if(document.querySelector("body").classList.contains("LUA-28__farbe-V2", "LUA-28__farbe-filter", 'LUA-56', 'LUA-68')) {
            //     console.log('class removed')
            //     document.querySelector("body").classList.remove("LUA-28__farbe-V2", "LUA-28__farbe-filter", 'LUA-56', 'LUA-68');
            // }
            if(document.querySelector(".LUA-28__gold-farbe.LUA-28__selected")){
                console.log('clicking on gold')
                document.querySelector(".LUA-28__gold-farbe.LUA-28__selected").click();
            }
            setTimeout(() => {
                console.log(JSON.parse(localStorage.getItem("farbeClassNames")),'currentItem');
                currentItem.forEach((el) => {
                    console.log('document.querySelector(`.${el}`)', document.querySelector(`.${el}`))
                    if(document.querySelector(`.${el}`) && !document.querySelector(`.${el}`).classList.contains("LUA-28__selected")) {
                        console.log('clicking item')
                        document.querySelector(`.${el}`).click();
                    }
                  
                });
            }, 2000);
          
        }
        
        const target = document.querySelector('.active-facets.active-facets-desktop')
        const config = { attributes: false, childList: true, subtree: true };
        const callback = function() {
            setTimeout(() => {
                updateDesktopItems();
            }, 0);    
        };
        const observer = new MutationObserver(callback);
        observer.observe(target, config);   
    
        updateDesktopItems();
        function updateDesktopItems(){
            const item = [...document.querySelectorAll(".LUA-28__farbe-wrapper > div")].map((el) => {
                if(el.classList.contains("LUA-28__selected")) {
                    return  el.classList[1] === "LUA-28__selected" ? el.classList[0] : el.classList[1];
                }
            }).filter((el) => el !== undefined);
            setItemsInStorage(item);
        }
    } else{
        console.log('I am mobile')
        if(currentItemMobile) {
            if(document.querySelector(".LUA-17__gold-farbe.LUA-17__farbe.LUA-17__selected")){
                document.querySelector(".LUA-17__gold-farbe.LUA-17__farbe.LUA-17__selected").click();
            }

            console.log(currentItemMobile,'currentItemMobile');
            currentItemMobile.forEach((el) => {
                if(document.querySelector(`.${el}`) && !document.querySelector(`.${el}`).classList.contains("LUA-17__selected")) {
                    console.log(document.querySelector(`.${el}`),'document.querySelector(`.${el}`)');
                    document.querySelector(`.${el}`).click();
                }
            });
            // }, 500);
        }
        
        const target = document.querySelector('.active-facets.active-facets-mobile')
        const config = { attributes: false, childList: true, subtree: true };
        const callback = function() {
            setTimeout(() => {
                updateMobileItems();
            }, 0);    
        };
        const observer = new MutationObserver(callback);
        observer.observe(target, config);   
    
        updateMobileItems();
        function updateMobileItems(){
            const item = [...document.querySelectorAll(".LUA-17__farbe-wrapper > div")].map((el) => {
                if(el.classList.contains("LUA-17__selected")) {

                    return  el.classList[0];
                }
            }).filter((el) => el !== undefined);
            setItemsInMobileStorage(item);
        }
    }

    mainCss();

    console.log(`LUA-156---- V-01`);

}

waitForElem(".active-facets.active-facets-desktop", ()=>{
    setTimeout(() => {
        mainJs();
    }, 2000);
});

// waitForElem(".active-facets.active-facets-desktop",mainJs);