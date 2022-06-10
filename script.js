const previewHeader = document.querySelector(".preview");
const headerText = document.querySelector(".header-text");
const summaryText = document.querySelector(".summary-text");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-nav-menu");
const mobileOverlay = document.querySelector(".mobile-overlay");

var titles = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
];

var summary = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];

var images;
var position = 0;
var title;
var summaryTxt;
var image;

// Determine which images to use on desktop/mobile
var windowWidth = document.body.clientWidth;
if (windowWidth < 768) {
    images = [
        "images/mobile-image-hero-1.jpg",
        "images/mobile-image-hero-2.jpg",
        "images/mobile-image-hero-3.jpg"
    ];
} else {
    images = [
        "images/desktop-image-hero-1.jpg",
        "images/desktop-image-hero-2.jpg",
        "images/desktop-image-hero-3.jpg"
    ];
}

function swipeLeft() {
    if (position == 0) {
        position += 2;
        title = titles[position];
        summaryTxt = summary[position];
        image = images[position];
    } else {
        --position;
        title = titles[position];
        summaryTxt = summary[position];
        image = images[position];
    }

    headerText.innerText = title;
    summaryText.innerText = summaryTxt;
    previewHeader.style.backgroundImage = `url(${image})`;
}

function swipeRight() {
    if (position == 2) {
        position = 0;
        title = titles[position];
        summaryTxt = summary[position];
        image = images[position];
    } else {
        ++position;
        title = titles[position];
        summaryTxt = summary[position];
        image = images[position];
    }

    headerText.innerText = title;
    summaryText.innerText = summaryTxt;
    previewHeader.style.backgroundImage = `url(${image})`;
}

function slideInMobileMenu() {
    mobileMenu.classList.remove("mobile-menu-slide-out-anim");
    mobileMenu.classList.add("mobile-menu-slide-in-anim");
    mobileOverlay.classList.remove("hidden");
    document.body.classList.toggle("overflow");
}

function slideOutMobileMenu() {
    mobileMenu.classList.remove("mobile-menu-slide-in-anim");
    mobileMenu.classList.add("mobile-menu-slide-out-anim");
    mobileOverlay.classList.add("hidden");
    document.body.classList.toggle("overflow");
}

prevBtn.addEventListener("click", swipeLeft);
nextBtn.addEventListener("click", swipeRight);
openBtn.addEventListener("click", slideInMobileMenu);
closeBtn.addEventListener("click", slideOutMobileMenu);