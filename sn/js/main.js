$(function () {
     new Swiper ('.swiper-container', {
        // direction: 'vertical',
        loop: true,
         autoplay:3000,
         autoplayDisableOnInteraction:false,

         // 如果需要分页,
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    })
})