$("#header").load("/common/header.html");
$("#scrolltop").load("/common/scroll-top.html");
$("#footer").load("/common/footer.html");

window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY;
    if (scrollTop >= 200) {
        $(".nav-main-b").addClass("sticky-nav-scroll");
        $(".nav-white-bg").addClass("nav-white-fixed");
        $(".sticky-btn-none").addClass("sticky-btn-block");
    } else {
        $(".nav-main-b").removeClass("sticky-nav-scroll");
        $(".sticky-btn-none").removeClass("sticky-btn-block");
        $(".nav-white-bg").removeClass("nav-white-fixed");
    }
});

/*====================================
    Before After
=======================================*/
