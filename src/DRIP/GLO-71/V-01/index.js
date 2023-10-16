import "./styles/index.scss";

/* DO NOT IMPORT ANYTHING */

 

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
    let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
    if (timer <= 0) return;
    (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}

const assets = {
    closeIcone : `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.113852 0.235194L0.170072 0.170072C0.376209 -0.0360731 0.698792 -0.0548154 0.926102 0.113852L0.991224 0.170072L6 5.1786L11.0088 0.170072C11.2355 -0.0566906 11.6032 -0.0566906 11.8299 0.170072C12.0567 0.396827 12.0567 0.764469 11.8299 0.991224L6.8214 6L11.8299 11.0088C12.0361 11.2149 12.0548 11.5375 11.8862 11.7648L11.8299 11.8299C11.6238 12.0361 11.3012 12.0548 11.0739 11.8862L11.0088 11.8299L6 6.8214L0.991224 11.8299C0.764469 12.0567 0.396827 12.0567 0.170072 11.8299C-0.0566906 11.6032 -0.0566906 11.2355 0.170072 11.0088L5.1786 6L0.170072 0.991224C-0.0360731 0.785087 -0.0548154 0.462504 0.113852 0.235194Z" fill="white"/>
    </svg>    
    `
}


function mainJs(body) {
    const targetElement = document.querySelector('.GLO-7__form');
    // targetElement.style.height = targetElement.getBoundingClientRect().height + "px";

    // document.querySelector('body').classList.add('GLO-71__sticky-atc');
    document.querySelector('.footer').insertAdjacentHTML('beforeend',`
    <div class="GLO-71__sticky-atc--show">
        <div class="atc__container">
            <button class='atc__button'>Kaufoptionen anzeigen</button>
        </div>
    </div>
    `);

    document.querySelector('.GLO-7__form .wcsatt-options-prompt-radios').insertAdjacentHTML('afterbegin', `
    <button class="ab--cross-button"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.113852 0.235194L0.170072 0.170072C0.376209 -0.0360731 0.698792 -0.0548154 0.926102 0.113852L0.991224 0.170072L6 5.1786L11.0088 0.170072C11.2355 -0.0566906 11.6032 -0.0566906 11.8299 0.170072C12.0567 0.396827 12.0567 0.764469 11.8299 0.991224L6.8214 6L11.8299 11.0088C12.0361 11.2149 12.0548 11.5375 11.8862 11.7648L11.8299 11.8299C11.6238 12.0361 11.3012 12.0548 11.0739 11.8862L11.0088 11.8299L6 6.8214L0.991224 11.8299C0.764469 12.0567 0.396827 12.0567 0.170072 11.8299C-0.0566906 11.6032 -0.0566906 11.2355 0.170072 11.0088L5.1786 6L0.170072 0.991224C-0.0360731 0.785087 -0.0548154 0.462504 0.113852 0.235194Z" fill="white"></path>
    </svg>
    </button>
    `)

    const atcButton = document.querySelector('.atc__button');
    atcButton.addEventListener('click', function() {
     targetElement.style.height = targetElement.getBoundingClientRect().height + "px";

        document.body.classList.add("ab--sticky-atc");
        document.body.classList.remove("ab--sticky-mini-atc");
    });
    document.querySelector('.ab--cross-button').style.display = "block";


    // on click of cross button, remove class from body
    document.querySelector('.ab--cross-button').addEventListener('click', function() {
        document.body.classList.remove("ab--sticky-atc");
        document.body.classList.add("ab--sticky-mini-atc");
    });

    function checkScroll() {
        const targetElementRect = targetElement.getBoundingClientRect();
        if (targetElementRect.bottom <= 0 ) {
            document.body.classList.add("ab--sticky-mini-atc");           
        }else{
            document.body.classList.remove("ab--sticky-mini-atc");
            document.body.classList.remove("ab--sticky-atc");
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();

    console.log(`GLO-71............V-01`);
}

waitForElem('.GLO-7__form', mainJs);



// function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
//     let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
//     if (timer <= 0) return;
//     (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== "undefined") ? callback(elements) : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
//     }
    
//     function triggeringEvent(){
//         const targetElements = document.querySelector('.GLO-7__form');
//     function checkScroll() {
//         const targetElementRect = targetElements.getBoundingClientRect();
//         if (targetElementRect.bottom <= 0 ) {
//           console.log('targetted--------------')
//             activate()         
//         }
//     }

//     window.addEventListener('scroll', checkScroll);
//     }
    

//     waitForElem('.GLO-7__form', triggeringEvent);