function closeAd() {
    document.querySelector(".banner__body").classList.add("banner__body--close");
} 

let swiper1 = new Swiper('.slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
});

let swiper2 = new Swiper('.slider2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    autoplay: {
        delay: 7000,
        disableOnInteraction: false
    },
});