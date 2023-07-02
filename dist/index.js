'use strict';
AOS.init();
console.log('hello About Us');

const menuBar = document.querySelector('.fa-bars');
const navMenu = document.querySelector('#navbar')
const navMenu2 = document.querySelector('#navbar2')



let preloader = document.getElementById('preloader');
let loader = true;

console.log(loader);
if (loader === true) {
  setTimeout(() => {
    preloader.style.display = 'none';
    loader = false;
  }, 8500);
}

menuBar.addEventListener('click', (e)=>{
  menuBar.classList.toggle('fa-times')
})

// let bannerImages = ['./dist/Cimg/banner1.png', './dist/Cimg/scnd-main-img.png'];

// let currentImageIndex = 0;
// let bannerImage = document.querySelector('.banner img');

// function changeBannerImage() {
//   currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
//   bannerImage.src = bannerImages[currentImageIndex];
// }

// setInterval(changeBannerImage, 2500);



