import './styles/index.scss';

/* DO NOT IMPORT ANYTHING */

function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
	let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);

	if (timer <= 0) return;

	(!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
		? callback(elements)
		: setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
}

const brandsArray = [
	{
		brandName: 'nike',
		link: 'nike',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/AP1+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+2.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/AURORA_BA5971-014_PHSFM001-2000+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/FL1+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+2.png'
			},
			{
				index: 4,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/137173022_2_1080x1350+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			},
			{
				index: 5,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/ACP+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+2.png'
			},
			{
				index: 6,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/FP1+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+2.png'
			}
		]
	},
	{
		brandName: 'adidas',
		link: 'adidas',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+4.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/layer1+(1).png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+5.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/layer1.png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+6.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/layer1+(1).png'
			},
			{
				index: 4,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+7.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/layer1+(1).png'
			},
			{
				index: 5,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+8.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/layer1.png'
			}
		]
	},
	{
		brandName: 'Birkenstock',
		link: 'Birkenstock',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+9.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Fill-1.png'
			},
		]
	},
	{
		brandName: 'carhartt WIP',
		link: 'carhartt-wip',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+10.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Vector+(2).png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+11.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Vector+(2).png'
			}
		]
	},

	{
		brandName: 'converse',
		link: 'converse',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/AL1+3.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Converse_(shoe_company)-Converse2-Logo.wine+1+(1).png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+12.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Converse_(shoe_company)-Converse2-Logo.wine+1+(1).png'
			}
		]
	},

	{
		brandName: 'jordan',
		link: 'jordan',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/16x9_AIR+JORDAN+2+RETRO+LOW_122055003+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/jordan_jumpman_blk+1+(1).png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+13.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/jordan_jumpman_blk+1+(1).png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+14.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/brand+logo/jordan_jumpman_blk+1.png'
			},
			{
				index: 4,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+3.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/jordan_jumpman_blk+1+(1).png'
			}
		]
	},

	{
		brandName: 'kickz',
		link: 'kickz',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/1x1_LEAGUE+FITS-50+(1)+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Group+1.png'
			},
		]
	},

	{
		brandName: 'Mister Tee',
		link: 'mister-tee',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+15.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Mister-Tee-Logo+1.png'
			},
		]
	},

	{
		brandName: 'mitchell and ness',
		link: 'mitchell-and-ness',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/AL2+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mitchell_ness+2.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/131040012_3_1080x1350+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mitchell_ness+2.png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/MN_Desktop_2650x1440_4-min_5__8+2+3.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mitchell_ness+2.png'
			}
		]
	},

	{
		brandName: 'new balance',
		link: 'new-balance',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/AL3+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/layer1+(2).png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/MN_Desktop_2650x1440_4-min_5__8+2+2.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/layer1+(2).png'
			}
		]
	},

	{
		brandName: 'new era',
		link: 'new-era',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/201549001_2_1080x1080+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/New_Era.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+16.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/New_Era.png'
			}
		]
	},

	{
		brandName: 'nike kids',
		link: 'nike-kids',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/AL1_800x800_Grey+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/AP1_800x800_Grey+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			}
		]
	},

	{
		brandName: 'puma',
		link: 'puma',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/23SS_SOCIAL_SP_SELECT_CLYDE_Dennis-Schroeder_391962_01_2954_1x1+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Puma+1.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+17.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Puma+1.png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+2.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Puma+1.png'
			}
		]
	},

	{
		brandName: 'spalding',
		link: 'spalding',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/ACP+(2)+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Spalding_logo_black+1.png'
			},
		]
	},

	{
		brandName: 'wilson',
		link: 'wilson',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/air-max-dawn-womens-shoes-224mWf+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/layer1+(3).png'
			}
		]
	}
];

const brandsArrayMobile = [
	{
		brandName: 'nike',
		link: 'nike',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/137173022_2_1080x1350+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/ACP+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/NSW_Logo_schwarz+%5BKonvertiert%5D+3.png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/AURORA_BA5971-014_PHSFM001-2000+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			},
			{
				index: 4,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/AP1+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/NSW_Logo_schwarz+%5BKonvertiert%5D+3.png'
			},
			{
				index: 5,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/FL1+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			},
			{
				index: 6,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/FP1+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			},
			
		]
	},
	{
		brandName: 'adidas',
		link: 'adidas',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Adidas_Logo+1.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+13.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/layer1-1.png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+14.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Adidas_Logo+1.png'
			},
			{
				index: 4,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+15.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Adidas_Logo+1.png'
			},
			{
				index: 5,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+16.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/layer1-1.png'
			},
			
		
		]
	},
	{
		brandName: 'Birkenstock',
		link: 'Birkenstock',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+12.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Birkenstock_2021_logo+2.png'
			},
		]
	},
	{
		brandName: 'carhartt WIP',
		link: 'carhartt-wip',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+11.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/carhartt-wip-logo_WHITE+2.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+2.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/carhartt-wip-logo_WHITE+2.png'
			},
		]
	},

	{
		brandName: 'converse',
		link: 'converse',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+10.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Converse_(shoe_company)-Converse2-Logo.wine+2.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/AL1+3.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Converse_(shoe_company)-Converse2-Logo.wine+2.png'
			},
		]
	},

	{
		brandName: 'jordan',
		link: 'jordan',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/16x9_AIR+JORDAN+2+RETRO+LOW_122055003+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/jordan_jumpman_blk+2.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+7.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/jordan_jumpman_blk+2.png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+8.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/jordan_jumpman_blk+2.png'
			},
			{
				index: 4,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+9.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/jordan_jumpman_blk+2.png'
			},
		]
	},

	{
		brandName: 'kickz',
		link: 'kickz',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/1x1_LEAGUE+FITS-50+(1)+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Group+2.png'
			},
		]
	},

	{
		brandName: 'Mister Tee',
		link: 'mister-tee',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+6.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/Mister-Tee-Logo+1.png'
			},
		]
	},

	{
		brandName: 'mitchell and ness',
		link: 'mitchell-and-ness',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/131040012_3_1000X500+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/mitchell_ness+1.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/AL2+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/mitchell_ness+1.png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/MN_Desktop_2650x1440_4-min_5__8+2+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/mitchell_ness+1.png'
			},
		]
	},

	{
		brandName: 'new balance',
		link: 'new-balance',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/AL3+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/New_Balance_logo+2.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/MN_Desktop_2650x1440_4-min_5__8+2+2.jpg', 
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/New_Balance_logo+2.png'
			},
		]
	},

	{
		brandName: 'new era',
		link: 'new-era',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/201549001_2_1080x1080+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/New_Era.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+5.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/New_Era.png'
			},
		]
	},

	{
		brandName: 'nike kids',
		link: 'nike-kids',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/AL1_800x800_Grey+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/AP1_800x800_Grey+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/NSW_Logo_schwarz+%5BKonvertiert%5D+1.png'
			},
	
		]
	},

	{
		brandName: 'puma',
		link: 'puma',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/23SS_SOCIAL_SP_SELECT_CLYDE_Dennis-Schroeder_391962_01_2954_1x1+1.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Puma+2.png'
			},
			{
				index: 2,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+3.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Puma+2.png'
			},
			{
				index: 3,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/air-max-dawn-womens-shoes-224mWf+4.jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Puma+2.png'
			},
		]
	},

	{
		brandName: 'spalding',
		link: 'spalding',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/Hero+Section+(1).jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/Spalding_logo_black+2.png'
			},
		]
	},

	{
		brandName: 'wilson',
		link: 'wilson',
		indices: [
			{
				index: 1,
				url: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/Hero+Section+(2).jpg',
				brandLogo: 'https://abtest-img-upload.s3.eu-west-2.amazonaws.com/Kickz/KIC-78/KIC-78/mobileImages/mobileIcon/layer1.png'
			},
		]
	}
];

function mainJs(body) {
	document.querySelector('body').classList.add('Kic-78');

	const recommendationBrand = document.querySelector('.brand-recommendation_slot');
	const brand = recommendationBrand.getAttribute('data-brand');
	const matchingBrand = brandsArray.find(item => item.brandName === brand);
	const matchingBrandMobile = brandsArrayMobile.find(item => item.brandName === brand);
		
		//FOR DESKTOP

	if (window.innerWidth > 768) {
		if (matchingBrand) {
			let lastShownIndex = parseInt(localStorage.getItem('lastShownIndex')) || 0;
			const currentPath = window.location.pathname;
			const storedPath = localStorage.getItem('lastShownPath');
	
			if (currentPath !== storedPath) {
				lastShownIndex++;
				localStorage.setItem('lastShownPath', currentPath);
			}
	
			if (lastShownIndex >= matchingBrand.indices.length) {
				lastShownIndex = 0;
			}
	
			const nextItem = matchingBrand.indices[lastShownIndex];
			let redirectionURL;
			if (currentPath.startsWith('/en/')) {
				redirectionURL = `https://www.kickz.com/en/l/brands/${matchingBrand.link}`;
			} else if (currentPath.startsWith('/de/')) {
				redirectionURL = `https://www.kickz.com/de/l/marken/${matchingBrand.link}`;
			}
		

			document.querySelector('#cq_recomm_slot-089a85db740941e86a76658823').insertAdjacentHTML(
				'afterbegin',
				`
			<div class="moodshot__container">
				<div class="brand__logo">
				<a href="${redirectionURL}">  
				<img class='brand__logo__image' src="${nextItem.brandLogo}" alt="${matchingBrand.brandName} Logo">
				</div>
				</a>
				<img class='modshoot__image' src="${nextItem.url}" alt="${matchingBrand.brandName} Image">
			</div>
			`
			);
			localStorage.setItem('lastShownIndex', lastShownIndex.toString());

			let recommendationCarousel = document.querySelector('#cq_recomm_slot-089a85db740941e86a76658823 .b-carousel');
			recommendationCarousel.insertAdjacentHTML(
				'afterbegin',
				`
			<div class="recommendation__container">
			<p class="recommendation__text">Mehr Von </br>${brand}:</p>
			</div> `
			);
			recommendationCarousel.insertAdjacentHTML(
				'beforeend',
				`
			<div class="brand__button__container">
			<a href="${redirectionURL}">    
			<button class="brand__button">Alles von ${brand}</button>
			</a>
			</div>
			`
			);
		}
	} 

	// FOR MOBILE
	else {
		if (matchingBrandMobile) {
			let lastShownIndex = parseInt(localStorage.getItem('lastShownIndex')) || 0;
			const currentPath = window.location.pathname;
			const storedPath = localStorage.getItem('lastShownPath');
	
			if (currentPath !== storedPath) {
				lastShownIndex++;
				localStorage.setItem('lastShownPath', currentPath);
			}
	
			if (lastShownIndex >= matchingBrandMobile.indices.length) {
				lastShownIndex = 0;
			}
	
			const nextItem = matchingBrandMobile.indices[lastShownIndex];
			let redirectionURL;
			if (currentPath.startsWith('/en/')) {
				redirectionURL = `https://www.kickz.com/en/l/brands/${matchingBrandMobile.link}`;
			} else if (currentPath.startsWith('/de/')) {
				redirectionURL = `https://www.kickz.com/de/l/marken/${matchingBrandMobile.link}`;
			}
		
		//moodshot container
		let recommendationCarouselMobile = document.querySelector('#cq_recomm_slot-089a85db740941e86a76658823');
		recommendationCarouselMobile.insertAdjacentHTML(
			'afterbegin',
			`
		<div class="recommendation__container">
		<p class="recommendation__text">Mehr Von ${brand}:</p>
		</div> 
		
		<div class="moodshot__container">
			<div class="brand__logo">  
			<img class='brand__logo__image' src="${nextItem.brandLogo}" alt="${matchingBrand.brandName} Logo">
			</div>
			<img class='modshoot__image' src="${nextItem.url}" alt="${matchingBrand.brandName} Image">
			<div class="moodShot__button__container">
			<a href="${redirectionURL}">  
			<button class="moodShot__button">Alle Anzeigen</button>
			</a>
			</div>
		</div>
		`
		);
		localStorage.setItem('lastShownIndex', lastShownIndex.toString());

		recommendationCarouselMobile.insertAdjacentHTML(
			'beforeend',
			`
		<div class="brand__button__container">
		<a href="${redirectionURL}">    
		<button class="brand__button">Alles von ${brand}</button>
		</a>
		</div>`
		);
		
			if(matchingBrand.brandName === 'Mister Tee'){
				document.querySelector('.brand__logo').classList.add('misterTee__logo');
			}
		}
	}
	if(brand === 'mitchell and ness'){
		document.querySelector('.brand__button').textContent = 'Alles von Mitchell & Ness' 
		document.querySelector('.recommendation__text').innerHTML = 'Mehr Von</br> Mitchell & Ness:'
	}
}

waitForElem('#cq_recomm_slot-089a85db740941e86a76658823 .b-carousel', mainJs);
