import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 console.log('outside');

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}

const assets = {
    firstImage : 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/first_image+(2).jpg',
    secondImage : 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/second_image.jpg',
    thirdImage : 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/third_image.jpg',
    fourthImage : 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fourth_image.jpg',
    fifthImage : 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fifth_image.jpg',
    sixthImage : 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/sixth_image.jpg',
    seventhImage : 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/seventh_image.jpg',
    eithImage : 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/eighth_image.jpg'
}

function mainJs(body) {

    const firstElementDiv = document.querySelector('.woocommerce-product-gallery__wrapper > div');
    const firstELementImage =  document.querySelector('.woocommerce-product-gallery__wrapper > div > a img');
    const firstElementAnchor = document.querySelector('.woocommerce-product-gallery__wrapper > div > a');
    
    const secondElementDiv =document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(2)');
    const secondElementImage = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(2) > a img')
    const secondElementAnchor = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(2) > a');

    const thirdElementDiv = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(3)');
    const thirdElementImage = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(3) > a img')
    const thirdElementAnchor = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(3) > a');

    const fourthElementDiv = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(4)');
    const fourthElementImage = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(4) > a img')
    const fourthElementAnchor = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(4) > a');

    const fifthElementDiv = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(5)');
    const fifthElementImage = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(5) > a img')
    const fifthElementAnchor = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(5) > a');

    const sixthElementDiv = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(6)');
    const sixthElementImage = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(6) > a img');
    const sixthElementAnchor = document.querySelector('.woocommerce-product-gallery__wrapper > div:nth-child(6) > a');


    
    firstElementDiv.setAttribute('data-thumb', assets.firstImage);
    secondElementDiv.setAttribute('data-thumb', assets.secondImage);
    thirdElementDiv.setAttribute('data-thumb', assets.thirdImage);
    fourthElementDiv.setAttribute('data-thumb', assets.fourthImage);
    fifthElementDiv.setAttribute('data-thumb', assets.fifthImage);
    sixthElementDiv.setAttribute('data-thumb', assets.sixthImage);

    
    // set new src to the image
    firstELementImage.setAttribute('src', assets.firstImage);
    firstELementImage.setAttribute('data-src', assets.firstImage);
    firstELementImage.setAttribute('data-large_image', assets.firstImage);
    firstElementAnchor.setAttribute('href', assets.firstImage);
    firstELementImage.setAttribute('srcset', assets.firstImage);

    secondElementImage.setAttribute('srcset', assets.secondImage);
    secondElementImage.setAttribute('data-src', assets.secondImage);
    secondElementImage.setAttribute('data-large_image', assets.secondImage);
    secondElementImage.setAttribute('src', assets.secondImage);
    secondElementAnchor.setAttribute('href', assets.secondImage);

    thirdElementImage.setAttribute('srcset', assets.thirdImage);
    thirdElementImage.setAttribute('data-src', assets.thirdImage);
    thirdElementImage.setAttribute('data-large_image', assets.thirdImage);
    thirdElementImage.setAttribute('src', assets.thirdImage);
    thirdElementAnchor.setAttribute('href', assets.thirdImage);

    fourthElementImage.setAttribute('srcset', assets.fourthImage);
    fourthElementImage.setAttribute('data-src', assets.fourthImage);
    fourthElementImage.setAttribute('data-large_image', assets.fourthImage);
    fourthElementImage.setAttribute('src', assets.fourthImage);
    fourthElementAnchor.setAttribute('href', assets.fourthImage);

    fifthElementImage.setAttribute('srcset', assets.fifthImage);
    fifthElementImage.setAttribute('data-src', assets.fifthImage);
    fifthElementImage.setAttribute('data-large_image', assets.fifthImage);
    fifthElementImage.setAttribute('src', assets.fifthImage);
    fifthElementAnchor.setAttribute('href', assets.fifthImage);

    sixthElementImage.setAttribute('srcset', assets.sixthImage);
    sixthElementImage.setAttribute('data-src', assets.sixthImage);
    sixthElementImage.setAttribute('data-large_image', assets.sixthImage);
    sixthElementImage.setAttribute('src', assets.sixthImage);
    sixthElementAnchor.setAttribute('href', assets.sixthImage);


    
    document.querySelector('.woocommerce-product-gallery__wrapper .zoomImg').remove();
    document.querySelector('.flex-video.widescreen').remove();

    document.querySelector('.woocommerce-product-gallery__wrapper').insertAdjacentHTML('beforeend', `
    <div data-thumb=${assets.seventhImage} data-thumb-alt="" class="woocommerce-product-gallery__image__clone">
    <a href=${assets.seventhImage}><img width="600" height="600" src=${assets.seventhImage} class="" alt="Glow25 Pulver Vergleich" decoding="async" title="" data-caption="" data-src=${assets.seventhImage} data-large_image=${assets.seventhImage} data-large_image_width="1500" data-large_image_height="1500" loading="lazy" srcset=${assets.seventhImage} sizes="(max-width: 600px) 100vw, 600px"></a>
    </div>

    <div data-thumb=${assets.eithImage} data-thumb-alt="" class="woocommerce-product-gallery__image__clone">
    <a href=${assets.eithImage}><img width="600" height="600" src=${assets.eithImage} class="" alt="Glow25 Pulver Vergleich" decoding="async" title="" data-caption="" data-src=${assets.eithImage} data-large_image=${assets.eithImage} data-large_image_width="1500" data-large_image_height="1500" loading="lazy" srcset=${assets.eithImage} sizes="(max-width: 600px) 100vw, 600px"></a>
    </div>
    `)
    
    // document.querySelector('.woocommerce-product-gallery--with-images').insertAdjacentHTML('beforeend', `
    
    // <div class="woocommerce-product-gallery__wrapper-clone">
	// 	<div data-thumb="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/first_image+(2).jpg" data-thumb-alt="" class="woocommerce-product-gallery__image__clone" style="position: relative; overflow: hidden;"><a href="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/first_image+(2).jpg?adb_sid=b25bb453-f951-4eca-80b5-7505c4664d03"><img width="600" height="600" src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/first_image+(2).jpg" class="wp-post-image" alt="Glow25 Kollagen Pulver 09 23" decoding="async" title="Glow25_Kollagen-Pulver_09-23" data-caption="" data-src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/first_image+(2).jpg" data-large_image="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/first_image+(2).jpg" data-large_image_width="1500" data-large_image_height="1500" loading="lazy" srcset="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/first_image+(2).jpg" sizes="(max-width: 600px) 100vw, 600px"></a></div><div data-thumb="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/second_image.jpg" data-thumb-alt="" class="woocommerce-product-gallery__image__clone"><a href="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/second_image.jpg?adb_sid=b25bb453-f951-4eca-80b5-7505c4664d03"><img width="600" height="600" src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/second_image.jpg" class="" alt="Kollagen Pulver Model Glow25" decoding="async" title="Kollagen Pulver Model Glow25" data-caption="" data-src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/second_image.jpg" data-large_image="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/second_image.jpg" data-large_image_width="1500" data-large_image_height="1500" loading="lazy" srcset="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/second_image.jpg" sizes="(max-width: 600px) 100vw, 600px"></a></div><div data-thumb="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/third_image.jpg" data-thumb-alt="" class="woocommerce-product-gallery__image__clone"><a href="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/third_image.jpg?adb_sid=b25bb453-f951-4eca-80b5-7505c4664d03"><img width="600" height="600" src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/third_image.jpg" class="" alt="Kollagen Pulver Einnahme" decoding="async" title="Kollagen Pulver Einnahme" data-caption="" data-src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/third_image.jpg" data-large_image="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/third_image.jpg" data-large_image_width="1500" data-large_image_height="1500" loading="lazy" srcset="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/third_image.jpg" sizes="(max-width: 600px) 100vw, 600px"></a></div><div data-thumb="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fourth_image.jpg" data-thumb-alt="" class="woocommerce-product-gallery__image__clone"><a href="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fourth_image.jpg?adb_sid=b25bb453-f951-4eca-80b5-7505c4664d03"><img width="600" height="600" src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fourth_image.jpg" class="" alt="Glow25 Pulver Peptidgrössen" decoding="async" title="Glow25 Pulver_Peptidgrößen" data-caption="" data-src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fourth_image.jpg" data-large_image="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fourth_image.jpg" data-large_image_width="1500" data-large_image_height="1500" loading="lazy" srcset="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fourth_image.jpg" sizes="(max-width: 600px) 100vw, 600px"></a></div><div data-thumb="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fifth_image.jpg" data-thumb-alt="" class="woocommerce-product-gallery__image__clone"><a href="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fifth_image.jpg?adb_sid=b25bb453-f951-4eca-80b5-7505c4664d03"><img width="600" height="600" src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fifth_image.jpg" class="" alt="Glow25 Funnel Karussell Pulver v2" decoding="async" title="Glow25_Funnel_Karussell_Pulver_v2" data-caption="" data-src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fifth_image.jpg" data-large_image="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fifth_image.jpg" data-large_image_width="750" data-large_image_height="750" loading="lazy" srcset="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/fifth_image.jpg" sizes="(max-width: 600px) 100vw, 600px"></a></div><div data-thumb="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/sixth_image.jpg" data-thumb-alt="" class="woocommerce-product-gallery__image__clone"><a href="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/sixth_image.jpg?adb_sid=b25bb453-f951-4eca-80b5-7505c4664d03"><img width="600" height="600" src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/sixth_image.jpg" class="" alt="Glow25 Pulver Vergleich" decoding="async" title="Glow25_Pulver-Vergleich" data-caption="" data-src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/sixth_image.jpg" data-large_image="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/sixth_image.jpg" data-large_image_width="1500" data-large_image_height="1500" loading="lazy" srcset="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/sixth_image.jpg" sizes="(max-width: 600px) 100vw, 600px"></a></div>	
		
    // <div data-thumb="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/seventh_image.jpg" data-thumb-alt="" class="woocommerce-product-gallery__image__clone">
    // <a href="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/seventh_image.jpg?adb_sid=b25bb453-f951-4eca-80b5-7505c4664d03"><img width="600" height="600" src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/seventh_image.jpg" class="" alt="Glow25 Pulver Vergleich" decoding="async" title="" data-caption="" data-src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/seventh_image.jpg" data-large_image="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/seventh_image.jpg" data-large_image_width="1500" data-large_image_height="1500" loading="lazy" srcset="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/seventh_image.jpg" sizes="(max-width: 600px) 100vw, 600px"></a>
    // </div>

    // <div data-thumb="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/eighth_image.jpg" data-thumb-alt="" class="woocommerce-product-gallery__image__clone">
    // <a href="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/eighth_image.jpg?adb_sid=b25bb453-f951-4eca-80b5-7505c4664d03"><img width="600" height="600" src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/eighth_image.jpg" class="" alt="Glow25 Pulver Vergleich" decoding="async" title="" data-caption="" data-src="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/eighth_image.jpg" data-large_image="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/eighth_image.jpg" data-large_image_width="1500" data-large_image_height="1500" loading="lazy" srcset="https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Glow25/eighth_image.jpg" sizes="(max-width: 600px) 100vw, 600px"></a>
    // </div>
    // </div>

    // `);
      
      
    // var initPhotoSwipeFromDOM = function (gallerySelector) {
    //     var gallery;
      
    //     // Parse slide data (url, title, size...) from DOM elements (children of gallerySelector)
    //     var parseThumbnailElements = function (el) {
    //       var galleryItems = document.querySelectorAll(gallerySelector);
    //       var items = [];
      
    //       galleryItems.forEach(function (galleryItem, index) {
    //         var item = {
    //           src: galleryItem.querySelector('a').getAttribute('href'),
    //           w: parseInt(galleryItem.querySelector('img').getAttribute('data-large_image_width')),
    //           h: parseInt(galleryItem.querySelector('img').getAttribute('data-large_image_height'))
    //         };
      
    //         var caption = galleryItem.querySelector('img').getAttribute('alt');
    //         if (caption) {
    //           item.title = caption;
    //         }
      
    //         var thumbnail = galleryItem.querySelector('img').getAttribute('src');
    //         if (thumbnail) {
    //           item.msrc = thumbnail;
    //         }
      
    //         item.el = galleryItem;
    //         items.push(item);
    //       });
      
    //       return items;
    //     };
      
    //     var closest = function closest(el, fn) {
    //       return el && (fn(el) ? el : closest(el.parentNode, fn));
    //     };
      
    //     var onThumbnailsClick = function (e) {
    //       e = e || window.event;
    //       e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      
    //       var eTarget = e.target || e.srcElement;
      
    //       var clickedListItem = closest(eTarget, function (el) {
    //         return el.tagName && el.tagName.toUpperCase() === 'DIV';
    //       });
      
    //       if (!clickedListItem) {
    //         return;
    //       }
      
    //       var clickedGallery = clickedListItem.parentNode,
    //         galleryItems = document.querySelectorAll(gallerySelector),
    //         index;
      
    //       galleryItems.forEach(function (galleryItem, i) {
    //         if (galleryItem === clickedListItem) {
    //           index = i;
    //         }
    //       });
      
    //       if (index >= 0) {
    //         destroyPhotoSwipe();
    //         openPhotoSwipe(index, galleryItems);
    //       }
    //       return false;
    //     };
      
    //     var photoswipeParseHash = function () {
    //       var hash = window.location.hash.substring(1),
    //         params = {};
      
    //       if (hash.length < 5) {
    //         return params;
    //       }
      
    //       var vars = hash.split('&');
    //       for (var i = 0; i < vars.length; i++) {
    //         if (!vars[i]) {
    //           continue;
    //         }
    //         var pair = vars[i].split('=');
    //         if (pair.length < 2) {
    //           continue;
    //         }
    //         params[pair[0]] = pair[1];
    //       }
      
    //       if (params.gid) {
    //         params.gid = parseInt(params.gid, 10);
    //       }
      
    //       return params;
    //     };
      
    //     var destroyPhotoSwipe = function () {
    //       var pswpElement = document.querySelectorAll('.pswp')[0];
    //       if (pswpElement && gallery) {
    //         gallery.close();
    //       }
      
    //       if (gallery) {
    //         gallery = null;
    //       }
    //     };
      
    //     var openPhotoSwipe = function (index, galleryItems) {
    //       var items = parseThumbnailElements(galleryItems);
      
    //       var options = {
    //         galleryUID: gallerySelector,
    //         getThumbBoundsFn: function (index) {
    //           var thumbnail = items[index].el.querySelector('img'),
    //             pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
    //             rect = thumbnail.getBoundingClientRect();
      
    //           return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
    //         }
    //       };
      
    //       gallery = new PhotoSwipe(
    //         document.querySelectorAll('.pswp')[0],
    //         PhotoSwipeUI_Default,
    //         items,
    //         options
    //       );
      
    //       // Set the correct initial index
    //       gallery.options.index = index;
      
    //       gallery.init();
    //     };
      
    //     // ... Your existing code ...
      
    //     // Loop through all gallery elements and bind events
    //     var galleryElements = document.querySelectorAll(gallerySelector);
      
    //     for (var i = 0, l = galleryElements.length; i < l; i++) {
    //       galleryElements[i].onclick = onThumbnailsClick;
    //     }
      
    //     // Parse URL and open gallery if it contains #&pid=3&gid=1
    //     var hashData = photoswipeParseHash();
    //     if (hashData.pid && hashData.gid) {
    //       openPhotoSwipe(hashData.pid, galleryElements);
    //     }
    //   };
      
      // Execute the function with your specific gallery selector
    //   initPhotoSwipeFromDOM('.woocommerce-product-gallery__image__clone');
      
      
      
   
    console.log(`Test Name - Variant Name`);
    
}

waitForElem(".woocommerce-product-gallery__wrapper", mainJs);