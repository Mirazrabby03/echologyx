window.waitForElem =
  window.waitForElem ||
  ((waitFor, callback, minElements = 1, variable = false) => {
    function checkElements() {
      if (variable) {
        return waitFor;
      } else {
        return window.document.querySelectorAll(waitFor);
      }
    }

    var thisElem = checkElements(),
      timeOut;
    if ((!variable && thisElem.length >= minElements) || (variable && typeof thisElem !== "undefined")) {
      return callback(thisElem);
    } else {
      var interval = setInterval(function() {
        thisElem = checkElements();
        if ((!variable && thisElem.length >= minElements) || (variable && typeof thisElem !== "undefined")) {
          clearInterval(interval);
          clearTimeout(timeOut);
          return callback(thisElem);
        }
      }, 20);
      timeOut = setTimeout(function() {
        // Fallback
        clearInterval(interval);
        return callback(false);
      }, 10000);
    }
  });

function mmt20jscondition() {

  // search basket
  return waitForElem(
    window.dataLayer,
    (layer) => {
      if (layer) {
        for (let data of layer) {
          if (data.hasOwnProperty("basketProducts")) {
            let basketProducts = data.basketProducts;
            if (basketProducts.hasOwnProperty("basketSKUs")) {
              if (basketProducts.basketSKUs.length === 1) {
                for (let i = 0; i < accessoriesList.length; i++) {
                  if (accessoriesList[i].includedWith.includes(basketProducts.basketSKUs[0])) {
                    return true;
                  }
                }
              }
            }
          }
        }
      }
    },
    1,
    true
  );
}

return mmt20jscondition() || false;