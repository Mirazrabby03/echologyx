const q = (s, o) => (o ? s.querySelector(o) : document.querySelector(s));
const qq = (s, o) => (o ? s.querySelectorAll(o) : document.querySelectorAll(s));
const insert = (target, position, element) => {
    if (typeof element === 'string') {
        target.insertAdjacentHTML(position, element);
    } else {
        target.insertAdjacentElement(position, element);
    }
};

function waitFor(t,i,o=!1,a=1e4,e=25){a<0||(t()?i():setTimeout(()=>{o&&waitFor(t,i,o,a,e);o||waitFor(t,i,o,a-e,e)},e))}

waitFor(
  ()=>q('body') && q('.elementor-section[data-id="2b6129e"]'),
  ()=>{
    let variation = {
      mainJs: function () {
        q('body').classList.add('GLO-38-V-01');
        const renderSection = `
    <div class="slider-section-parent">
        <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://diebestencoupons.b-cdn.net/wp-content/uploads/2023/02/Hero-Image@2x.png" />
            </div>
            <div class="swiper-slide">
                <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Kollagen-Pulver-Model-Glow25-600x600.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Kollagen-Pulver-Einnahme-600x600.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Glow25-Pulver_Peptidgro%CC%88ssen-600x600.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Glow25_Funnel_Karussell_Pulver_v2-600x600.png" />
            </div>
            <div class="swiper-slide">
            <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Glow25_Pulver-Vergleich-600x600.jpg" />
            </div>       
            </div>
            <div class="next-btn"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <g filter="url(#filter0_b_2215_717)">
            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z" fill="black" fill-opacity="0.35"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22C6.49 22 2 17.51 2 12ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.26 16.06L14.79 12.53C15.09 12.24 15.09 11.76 14.79 11.47L11.26 7.94C10.97 7.65 10.49 7.65 10.2 7.94C9.91 8.23 9.91 8.71 10.2 9L13.2 12L10.2 15C9.91 15.29 9.91 15.77 10.2 16.06C10.35 16.21 10.54 16.28 10.73 16.28C10.92 16.28 11.11 16.21 11.26 16.06Z" fill="white"/>
            <defs>
            <filter id="filter0_b_2215_717" x="-2" y="-2" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2215_717"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2215_717" result="shape"/>
            </filter>
            </defs>
            </svg></div>
            <div class="prev-btn">    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <g filter="url(#filter0_b_2215_855)">
            <path d="M12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2ZM9.21 12.53L12.74 16.06C12.89 16.21 13.08 16.28 13.27 16.28C13.46 16.28 13.65 16.21 13.8 16.06C14.09 15.77 14.09 15.29 13.8 15L10.8 12L13.8 9C14.09 8.71 14.09 8.23 13.8 7.94C13.51 7.65 13.03 7.65 12.74 7.94L9.21 11.47C8.91 11.76 8.91 12.24 9.21 12.53Z" fill="black" fill-opacity="0.35"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12ZM22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM12.74 16.06L9.21 12.53C8.91 12.24 8.91 11.76 9.21 11.47L12.74 7.94C13.03 7.65 13.51 7.65 13.8 7.94C14.09 8.23 14.09 8.71 13.8 9L10.8 12L13.8 15C14.09 15.29 14.09 15.77 13.8 16.06C13.65 16.21 13.46 16.28 13.27 16.28C13.08 16.28 12.89 16.21 12.74 16.06Z" fill="white"/>
            <defs>
            <filter id="filter0_b_2215_855" x="-2" y="-2" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2215_855"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2215_855" result="shape"/>
            </filter>
            </defs>
            </svg>    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
            <g filter="url(#filter0_b_2215_855)">
            <path d="M12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2ZM9.21 12.53L12.74 16.06C12.89 16.21 13.08 16.28 13.27 16.28C13.46 16.28 13.65 16.21 13.8 16.06C14.09 15.77 14.09 15.29 13.8 15L10.8 12L13.8 9C14.09 8.71 14.09 8.23 13.8 7.94C13.51 7.65 13.03 7.65 12.74 7.94L9.21 11.47C8.91 11.76 8.91 12.24 9.21 12.53Z" fill="black" fill-opacity="0.35"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12ZM22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12ZM12.74 16.06L9.21 12.53C8.91 12.24 8.91 11.76 9.21 11.47L12.74 7.94C13.03 7.65 13.51 7.65 13.8 7.94C14.09 8.23 14.09 8.71 13.8 9L10.8 12L13.8 15C14.09 15.29 14.09 15.77 13.8 16.06C13.65 16.21 13.46 16.28 13.27 16.28C13.08 16.28 12.89 16.21 12.74 16.06Z" fill="white"/>
            <defs>
            <filter id="filter0_b_2215_855" x="-2" y="-2" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2215_855"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2215_855" result="shape"/>
            </filter>
            </defs>
            </svg></div>
        </div>
        <div thumbsSlider="" class="swiper mySwiper">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="https://diebestencoupons.b-cdn.net/wp-content/uploads/2023/02/Hero-Image@2x.png" />
            </div>
            <div class="swiper-slide">
                <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Kollagen-Pulver-Model-Glow25-600x600.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Kollagen-Pulver-Einnahme-600x600.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Glow25-Pulver_Peptidgro%CC%88ssen-600x600.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Glow25_Funnel_Karussell_Pulver_v2-600x600.png" />
            </div>
            <div class="swiper-slide">
            <img src="https://glow25.b-cdn.net/wp-content/uploads/2020/12/Glow25_Pulver-Vergleich-600x600.jpg" />
            </div>       
            </div>
        </div>
    </div>
    `
	

  if(window.innerWidth < 768) {
    const headerContent = document.querySelector('[data-id="2988a175"]');
    const subHeaderContent = document.querySelector('[data-id="ae2d99b"]');

    const headerContentClone = headerContent.cloneNode(true);
    const subHeaderContentClone = subHeaderContent.cloneNode(true);

    document.querySelector('[data-id="61611dfc"]').insertAdjacentElement('afterbegin', subHeaderContentClone);
    document.querySelector('[data-id="61611dfc"]').insertAdjacentElement('afterbegin', headerContentClone);

    //remove header and subheader from the original place
    headerContent.remove();
    subHeaderContent.remove();

    document.querySelector('[data-id="8cdb5de"]').innerHTML = '';
    document.querySelector('[data-id="8cdb5de"]').innerHTML = renderSection;

    swiperJs();

  }else{
    document.querySelector('.elementor-section[data-id="2b6129e"] > div > div:first-child').innerHTML = '';
    document.querySelector('.elementor-section[data-id="2b6129e"] > div > div:first-child').innerHTML = renderSection;
    swiperJs();
  }
	console.log(`GLO-38.......V-01`);

        
      },

      swiperJs: function () {
        waitForElem(
            'Swiper',
            swipers => {
                var swiper = new Swiper('.mySwiper', {
                    loop: false,
                    spaceBetween: 10,
                    slidesPerView: 4,
                    freeMode: true,
                    watchSlidesProgress: true,
                    });
                var swiper2 = new Swiper('.mySwiper2', {
                    loop: false,
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.next-btn',
                        prevEl: '.prev-btn'
                    },
                    thumbs: {
                        swiper: swiper
                    }
                });
            },
            1,
            true
        );
    }
      
    }
    
  variation.mainJs();
   
  }
)