import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */
var MiniCart = {
    init: function () {
        this.mainCss();
        this.mainJS();
        this.goals();
    },
    mainCss: function() {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '' +
            /* CSS will be imported here */
            '';
    },
    mainJS: function () {
        //For JS

        var $ = convert.$;

        // document.cookie = "miniCartTest=yes";

        pollForCartItem();
        function pollForCartItem() {
            var timesRun = 0;
            var interval = setInterval(function () {
                timesRun += 1;
                console.log("looping")

                if (timesRun < 50) {
                    if (document.querySelector(".side-cart .wrapper")) {
                        addMiniCart();
                        clearInterval(interval);
                    }
                }
                else {
                    clearInterval(interval);
                }


            }, 100);
        }

        function checkIsCartEmpty() {
            var timesRun = 0;
            var interval = setInterval(function () {
                timesRun += 1;
                console.log("looping ", document.querySelectorAll(".items .item").length)

                if (timesRun < 20) {
                    if (document.querySelectorAll(".side-cart .wrapper .item").length < 1) {
                        hideMiniCart();
                        clearInterval(interval);
                    }
                }
                else {
                    clearInterval(interval);
                }

            }, 100);
        }

        function hideMiniCart() {
            $(".mini_cart").hide();
            $("html").addClass("overflow")
        }

        function addMiniCart() {
            console.log("here", document.querySelector(".side-cart .wrapper .item"))

            if (document.querySelector(".side-cart .wrapper .item") == null) {
                $(".mini_cart").hide();
                return;
            }

            $("#header li.cart-wrap").append(`
                <div class="mini_cart">
                    <div class="mini_cart_wp">
                        <div class="top_part">
                            <p class="bag_txt">welcome back</p>
                            <p>You have <span class="c_i_qty">2</span> items in your cart.</p>
                            <img class="close_mini" src="https://cdn.shopify.com/s/files/1/0495/0596/0091/files/Vector_2.svg?v=1629899010" />
                        </div>
                        <div class="item_list">
    
                        </div>
                        <div class="add_bag_wp">
                            <div class="add_bag checkOut"><span class="loader_1 hideEl"></span> CHECKOUT</span></div>
                        </div>
                    </div>
                </div>
            `);

            var totalCartItem = 0;

            console.log("items: ", $(".side-cart .wrapper .item").length)

            $(".side-cart .wrapper .item").each((i, obj) => {
                var name = $(obj).find("p a").html();
                var productUrl = $(obj).find("p a").attr('href');

                var price = $(obj).find(".pri").html();
                var imgUrl = $(obj).find("a img").attr('src');
                var product_id = i;

                var qty = parseInt($(obj).find("input.qty-input").val());

                console.log("name", name)
                console.log("productUrl", productUrl)
                console.log("price", price)
                console.log("imgUrl", imgUrl)
                console.log("qty", qty)

                totalCartItem = totalCartItem + qty;


                $(".item_list").append(`
                    <div class="single_cart_item ${price == "$0.00" ? 'freeItem' : ''}" data-product-id = "${product_id}">
                        <div class="img_area">
                            <img src="${imgUrl}" />
                        </div>
                        <div class="info_area ">
                            <div class="name_wp">
                                <a href="${productUrl}">${name}</a>
                            </div>
                            <div class="counter_area ${price == "$0.00" ? 'hideEl' : ''}">
                                <span class="minus">-</span>
                                <input readonly value = ${qty} />
                                <span class="pluse">+</span>
                            </div>
                            <p class="price ${price == "$0.00" ? 'hideEl' : ''}">${price}</p>
                            <div class="cross ${price == "$0.00" ? 'hideEl' : ''}"><img src="https://cdn.shopify.com/s/files/1/0495/0596/0091/files/Vector_2.svg?v=1629899010"/></div>
                        </div>
                    </div>
                `)

            });

            $(".c_i_qty").html(`${totalCartItem}`);

            function checkForPriceUpdate() {

                var interval = setInterval(function () {


                    if ($(".side-cart").hasClass("active")) {
                        $(".side-cart").removeClass("active")

                        // $("#page").removeClass("hideSideCart");

                        $("html").removeClass("no__overflow")
                        clearInterval(interval);

                        var intervalOverlay = setInterval(function () {


                            if ($(".side__cart--overlay").hasClass("active")) {
                                $(".mini_cart").remove();
                                addMiniCart();

                                $(".side__cart--overlay").removeClass("active")
                                $("#page").removeClass("hideSideCart");
                                clearInterval(intervalOverlay);
                                checkIsCartEmpty();
                            }


                        }, 100);

                        // $(".mini_cart").remove();
                        // addMiniCart();
                    }


                }, 100);


            }


            $(".pluse").on("click", function (e) {

                e.preventDefault();

                // $(".add_bag .loader_1").removeClass("hideEl");

                // $(`.js-qty__num[data-id="${$(this).attr("data-product-id")}"]`).val(0);

                var p_id = $(this).parents(".single_cart_item").attr("data-product-id")

                p_id = parseInt(p_id) + 1;

                $("#page").addClass("hideSideCart");

                console.log(`.side-cart .wrapper form .item:nth-child(${p_id})`);

                window.jQuery(`.side-cart .wrapper form .item:nth-child(${p_id}) .quantity input.plus`).click();

                checkForPriceUpdate();

            })


            $(".minus").on("click", function (e) {

                e.preventDefault();

                var p_id = $(this).parents(".single_cart_item").attr("data-product-id")

                p_id = parseInt(p_id) + 1;

                $("#page").addClass("hideSideCart");

                console.log(`.side-cart .wrapper form .item:nth-child(${p_id})`);

                window.jQuery(`.side-cart .wrapper form .item:nth-child(${p_id}) .quantity input.minus`).click();

                checkForPriceUpdate();



            })

            $(".cross").on("click", function (e) {

                e.preventDefault();

                var p_id = $(this).parents(".single_cart_item").attr("data-product-id")

                p_id = parseInt(p_id) + 1;

                $("#page").addClass("hideSideCart");

                window.jQuery(`.side-cart .wrapper form .item:nth-child(${p_id}) .remove`).click();

                checkForPriceUpdate();


            })


            $(".checkOut").on("click", function () {
                console.log("checkout");
                // window.jQuery(".checkout-button").click();
                window.location.href = "https://loveamika.com/cart";
            })

            $(".close_mini, .cart-wrap a").on('click', function () {
                hideMiniCart();
            })


            if (window.matchMedia('(min-width: 750px)').matches) {
                $("#home").on('click', function () {
                    hideMiniCart();
                })

                var mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
                if (mac) {
                    var safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                    if (safari) {
                        $(".counter_area").addClass("mac")
                    }
                }

            }
            else {
                var mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
                if (mac) {
                    $(".counter_area").addClass("mac")
                    var safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                    if (safari) {
                        $(".counter_area").addClass("mac")
                    }
                }

            }



        }

        sessionStorage.setItem('miniCartTest', 'yes');


    },
    goals: function () {
        // For Goal/Metric JS
    }
};

   
// function pollForLoadVariation() {
//     if (document.querySelector(".side-cart")) {
//         console.log("I am runing................");
//         // for test purpose
//         // MiniCart.init();



//         if (sessionStorage.getItem('miniCartTest') === null && document.querySelector(".side-cart .wrapper .item")) {
//             console.log("I am runnniiinnnggggggggggg................");
//             MiniCart.init();
//         }
//         else {
//             sessionStorage.setItem('miniCartTest', 'yes');
//         }

//         console.log("SB-006DM - MiniCart Test - Returning Customers Variation - A: 01");

//     } else {
//         console.log("polling");
//         setTimeout(pollForLoadVariation, 25);
//     }
// }
// pollForLoadVariation();


(function pollOnload() {
	if (document.querySelector('body')) {
		try {
			MiniCart.init();
			console.log(`This is a EchoLogyx variation -- running on ${new Date().toLocaleDateString()}`);
		} catch (error) {
			console.log('Initialization error:', error);
		}
	} else {
		setTimeout(pollOnload, 25);
	}
})();



   
