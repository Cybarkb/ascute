// JavaScript Document
/*********************/
//<![CDATA[
    jQuery(window).load(function() { // makes sure the whole site is loaded
        jQuery('.loader-container').delay(4000).fadeOut(); // will first fade out the loading animation
        jQuery('#loader-circle').delay(20).fadeOut('slow'); // will fade out the white DIV that covers the website.
        jQuery('body').delay(4000).css({'overflow':'visible'});
    })
//]]>
//endLoader Animation

//Check to see if the window is top if not then display button
jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.scrollToTop').fadeIn();
    } else {
        jQuery('.scrollToTop').fadeOut();
    }
    });
    jQuery('.scrollToTop').click(function(){
        jQuery('html, body').animate({scrollTop : 0},700);
    return false;
});
//endScrollToTop



jQuery(document).ready(function() {
    //on hover Menu
    jQuery('#nav_bg .dropdown').hover(function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(0);
    },
    function() {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(0);
    });
    //Sticky Menu
    jQuery('#nav_bg').stickit({scope: StickScope.Document, zIndex: 101});
    jQuery('#nav_media').stickit({scope: StickScope.Document, zIndex: 101});

    //Side Menu
    $('#dismiss, .overlay').on('click', function () {
        $("body").removeClass("nav_open");
        $("#sidebarCollapse").removeClass("nOpen");
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $('#nav_media').removeClass('stick_bg');
    });
    $('#sidebarCollapse, #showhide_mob').on('click', function () {
        $("body").toggleClass("nav_open");
        // $("#sidebarCollapse").toggleClass("nOpen");
        // $('#sidebar').addClass('active');
        // $('.overlay').addClass('active');
        $('.mob_view_search').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $("#sidebarCollapse").on('click', function () {
        $("#sidebarCollapse").toggleClass("nOpen");
        $('#sidebar').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('#nav_media').toggleClass('stick_bg');
        $('.mob_view_search').removeClass('active');
    });
    $('.src_close').on('click', function () {
        $('.mob_view_search').removeClass('active');
    });

    //on Click Sub Menu
    $(".has-submenu > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
            .parent()
            .hasClass("active")
        ) {
            $(".has-submenu").removeClass("active");
            $(this)
            .parent()
            .removeClass("active");
        } else {
            $(".has-submenu").removeClass("active");
            $(this)
            .next(".sidebar-submenu")
            .slideDown(200);
            $(this)
            .parent()
            .addClass("active");
        }
    });
    // 1st child
    $(".has_third_menu").each(function(){
        $(this).append('<span class="tigger_icon"></span>');
    });
    // $('#append_item').each(function() {
    //     //var count = ul;
    //     if( $("#append_item").find("ul")){
    //         $( this ).append('<span>Learn More</span>');
    //     }
    // });

    $(".has_third_menu span").on("click", function(){
        //$(this).siblings("ul").addClass("showinMedia");
        //$(".sidebar-submenu").slideUp(200);
        if (
            $(this).parent().hasClass("active")
        ) {
            $(".has_third_menu").removeClass("active");
            $(this).parent().removeClass("active");
            //$(this).find("ul").removeClass("showinMedia").css({'height': '0px'});
        } else {
            $(".has_third_menu").removeClass("active");
            //$(this).next(".showinMedia").slideDown(200);
            $(this).parent().addClass("active");
            //$(this).siblings("ul").addClass("showinMedia").css({'height': 'auto'});
        }
    });
    // 2nd child

    //endMobile menu

    //testimonial Slider
    var owl = jQuery('.testimone_list .owl-carousel');
    owl.owlCarousel({
        items: 2,
        center: true,
        stagePadding: 100,
        // animateIn: 'fadeIn',
        // animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause:true,
        navRewind: true,
        dots: false,
        nav: true,
        navText : ["&#xe875","&#xe876"],
        responsive: {
            0: {
                items: 1,
                center: false,
                stagePadding: 0,
            },
            480: {
                items: 1,
                center: false,
                stagePadding: 0,
            },
            568: {
                items: 2,
                center: true,
                stagePadding: 0,
            },
            768: {
                items: 2,
                center: true,
                stagePadding: 0,
            },
            1024: {
                items: 2,
                center: true,
            }
        }
    })
	var block = false;
	jQuery(".owl-item").mouseenter(function() {
		if (!block) {
			block = true;
			owl.trigger('stop.owl.autoplay')
			block = false;
		}
	});
	jQuery(".owl-item").mouseleave(function() {
		if (!block) {
			block = true;
			owl.trigger('play.owl.autoplay', [3000])
			block = false;
		}
	});
    //end owl

    //Animation
    new WOW().init();
    //end all Animation


})










