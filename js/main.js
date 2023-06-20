function closeAd() {
    document.querySelector(".banner__body").classList.add("banner__body--close");
} 

let swiper1 = new Swiper('.slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
}); 