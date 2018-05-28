$(document).ready(function () {

    $(document).ready(function(){
        $('.top-slider__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    });

    $('.clients__tabs-wrapper--box').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.clients__tabs a', function (event) {
        event.preventDefault();
        var tabId = $(this).attr('href');
        $('.clients__tabs a').removeClass('active');
        $(this).addClass('active');
        $('.clients__tabs-wrapper--box').hide(0);
        $(tabId).fadeIn();
    });

    $('.stone__tabs-wrapper--box').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.stone__tabs a', function (event) {
        event.preventDefault();
        var tabId = $(this).attr('href');
        $('.stone__tabs a').removeClass('active');
        $(this).addClass('active');
        $('.stone__tabs-wrapper--box').hide(0);
        $(tabId).fadeIn();
    });


})
