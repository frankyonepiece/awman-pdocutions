let app = {
    didLouad:function () {
        const loader = $( ".cssload-loader-container" );
        setTimeout(()=>{
            loader.fadeOut('200',()=>{
              loader.remove();
            });
        },120)
    },
    headerClick:function () {
        if($('.burger-menu').length){
            $('.burger-menu').on('click', function (e) {
                $('.main-navbar').toggleClass('open-menu');
            })
        }
    },
    sliders: function () {
        var swiper = new Swiper('.mainHomeSlider', {
            lazy: true,
            preloadImages: true,
            speed: 700,
            autoplay: true,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },
    pageScroll: function(){
        if ($(window).scrollTop()) {
			$(".main-navbar").addClass('navbar-fixed-bg');
		} else {
			$(".main-navbar").removeClass('navbar-fixed-bg');
		}
    },
    gotoSection: function() {
    	/*-----------------scrolling script------------------------------*/
        $(document).on('click', '.fy-goto', function(event){
            event.preventDefault();
            let section = $( $.attr(this, 'href') );
    
            if(section.offset() === undefined){
                let parentDropdown = $(this).closest('.dropdown').find('a.dropdown-toggle');
                window.location.href = $(parentDropdown).attr('href')+$.attr(this, 'href');
            }else {
                $('html, body').animate({
        			scrollTop: $($.attr(this, 'href')).offset().top - 90
        		}, 700);
            }
        });
    
        if( window.location.hash ){
            $(window).scrollTop(0);
            setTimeout(()=>{
                $('html, body').animate({
        			scrollTop: $(window.location.hash).offset().top - 90
        		}, 800);
            }, 500)
        }
    },
    img_parallax:function () {
        if ($('.img-parallax').length) {
            $('.img-parallax').parallax();
        }
    },
    init: function () {
        this.sliders();
        this.pageScroll();
        this.headerClick();
        this.img_parallax();
        this.gotoSection();
        
        var rellax = new Rellax('.rellax');
        return this.didLouad();
    },
}

jQuery(document).ready(function($) {
    app.init();
});

$(window).on('scroll', function () {
    app.pageScroll();
});