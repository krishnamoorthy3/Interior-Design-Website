
(function ($) {
    'use strict';
    let device_width = window.innerWidth;
    gsap.registerPlugin(ScrollTrigger, TweenMax, ScrollToPlugin);

    var rtsJs = {
        m: function (e) {
            rtsJs.d();
            rtsJs.methods();
        },
        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html')
        },
        methods: function (e) {
            rtsJs.swiperActivation();
        },
        swiperActivation: function () {
            $(document).ready(function () {
                var sliderOne = new Swiper(".mySwiper-product-two-showcase", {
                    loop: true,
                    slidesPerView: 1,
                    // effect:"fade",
                    speed: 1500,
                    /* mousewheel: true, */
                    /* autoplay: {
                        delay: 3000,
                    }, */
                    spaceBetween: 100,
                });
                var sliderTwo = new Swiper(".mySwiper-product-OuterText-2", {
                    loop: true,
                    slidesPerView: 1,
                    speed: 1500,
                    spaceBetween: 100,
                   /*  mousewheel: true, */
                    /* autoplay: {
                        delay: 3000,
                    }, */
                    pagination: {
                        el: ".swiper-paginations",
                        clickable: true,
                        type: 'progressbar',
                    },
                });

                sliderTwo.on('slideChange', function () {
                    console.log('slider moved');
                    var activeslide = sliderTwo.realIndex;
                    var totalslide = sliderTwo.slides.length;
                    console.log(activeslide);
                    $(".activeslide").html('0' + (activeslide + 1));
                    $(".totalslide").html('0' + (totalslide - 2));
                });

                sliderOne.controller.control = sliderTwo;
                sliderTwo.controller.control = sliderOne;
            });
        },
    }
    rtsJs.m();
})(jQuery, window)