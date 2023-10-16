import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {

    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

    if (timer <= 0) return;

    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);

}
const Category = [
	{
		brandName: 'CAPS & MÜTZEN',
		link: 'https://www.kickz.com/de/l/accessoires-and-more/unisex/caps-and-m%C3%BCtzen/',
		indices: [
			{
				index: 1,
                name:'Fitted Caps',
				subCategoryLink: 'https://www.kickz.com/de/l/accessoires-and-more/unisex/caps-and-m%C3%BCtzen/fitted-caps/',
				imageLink: 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwf6ca99a0/images/large/new_era-MLB_5950_AC_PERF_NY_YANKEES-navy-1.jpg?sw=448&q=95'
			},
            {
				index: 2,
                name:'Trucker Caps',
				subCategoryLink: 'https://www.kickz.com/de/l/accessoires-and-more/unisex/caps-and-m%C3%BCtzen/trucker-caps/',
				imageLink: 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwf1c5a7c8/images/large/Von_Dutch-TRUCKER_BOSTON_CAP-BLACK_BLACK_RED-1.jpg?sw=448&q=95'
			},
            {
				index: 3,
                name:'Snapback Caps',
				subCategoryLink: 'https://www.kickz.com/de/l/accessoires-and-more/unisex/caps-and-m%C3%BCtzen/snapbacks/',
				imageLink: 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwb2cf1c2f/images/large/new_era-MLB_9FIFTY_LA_DODGERS_SNAPBACK-Blue-1.jpg?sw=448&q=95'
			},
            {
				index: 4,
                name:'Curved Visor Caps',
				subCategoryLink: 'https://www.kickz.com/de/l/accessoires-and-more/unisex/caps-and-m%C3%BCtzen/curved-visor-caps/',
				imageLink: 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dwe00f68bc/images/large/nike-NSW_H86_FUTURA_WASHED_CAP-BLACK_BLACK_WHITE-1.jpg?sw=448&q=95'
			},
            {
				index: 5,
                name:'Bucket Hats',
				subCategoryLink: 'https://www.kickz.com/de/l/accessoires-and-more/unisex/caps-and-m%C3%BCtzen/bucket-hats/',
				imageLink: 'https://www.kickz.com/dw/image/v2/BGQV_PRD/on/demandware.static/-/Sites-kickz-master-catalog/default/dw4c3c0008/images/large/carhartt_WIP-Script_Bucket_Hat-BLACK_WHITE-1.jpg?sw=448&q=95'
			},
        ]
    }
]

function mainJs(body) {



    console.log(`Test Name - Variant Name`);

}

waitForElem("body", mainJs);