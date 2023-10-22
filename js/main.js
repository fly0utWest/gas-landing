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

function closeBurger() {
    let burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.remove("burger-menu--active");
    burgerMenu.classList.add("burger-menu--close");
}

function openMenu() {
    let burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.remove("burger-menu--close");
    burgerMenu.classList.add("burger-menu--active");
}

let date = new Date();
let dateDay = date.getUTCDate();
let dateMonth = date.getUTCMonth();
let dateYear = date.getUTCFullYear();
console.log();
document.getElementById("fuel-price-date").textContent = dateDay + "." + (dateMonth + 1) + "." + dateYear;

tablePrice = document.querySelectorAll(".fuel__type__element--date");

for (let i = 0; i < tablePrice.length; i++) {
    tablePrice[i].textContent = dateDay + "." + (dateMonth + 1) + "." + dateYear;
}