$(function() {
    function initJcasrousel(){
        $('.jcarousel').jcarousel({
            wrap: 'circular'
        }).on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this),
                width = carousel.innerWidth();
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        }).jcarouselAutoscroll({
            interval: 8000,
            target: '+=1',
            autostart: true
        });
        $('.jcarousel-prev').click(function() {
            $('.jcarousel').jcarousel('scroll', '-=1');
        });
        $('.jcarousel-next').click(function() {
            $('.jcarousel').jcarousel('scroll', '+=1');
        });
    }

    initJcasrousel();

    $('.more').click(function(e){
        e.stopPropagation();
        $(this).find('.inner-nav').toggleClass('display-none');

    });
    $('.menu').click(function(){
        $(this).siblings('li').toggleClass('display-none');
        $(this).toogleClass('hide-submenu');
    })
});