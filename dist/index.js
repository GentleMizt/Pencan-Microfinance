'use strict';
AOS.init();
console.log('hello About Us');

let preloader = document.getElementById('preloader');
let loader = true;

console.log(loader);
if (loader === true) {
  setTimeout(() => {
    preloader.style.display = 'none';
    loader = false;
  }, 7500);
}

// let bannerImages = ['./dist/Cimg/banner1.png', './dist/Cimg/scnd-main-img.png'];

// let currentImageIndex = 0;
// let bannerImage = document.querySelector('.banner img');

// function changeBannerImage() {
//   currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
//   bannerImage.src = bannerImages[currentImageIndex];
// }

// setInterval(changeBannerImage, 2500);



