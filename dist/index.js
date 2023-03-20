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
  }, 5000);
}

let bannerImages = ['./dist/Cimg/banner1.png', './dist/Cimg/scnd-main-img.png'];

let currentImageIndex = 0;
let bannerImage = document.querySelector('.banner img');

function changeBannerImage() {
  currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
  bannerImage.src = bannerImages[currentImageIndex];
}

setInterval(changeBannerImage, 2500);

const savingClick = document.querySelector('.saving');
const loanClick = document.querySelector('.loan').textContent;

console.log(loanClick);

// loanClick.addEventListener('click', () =>{
//   loanClick.style.backgroundColour = 'rgba(217, 217, 217, 0.9)';
//   loanClick.style.borderRadius = '1rem';
//   savingClick.style.backgroundColour = '#1C9FF3'
// })

// savingClick.addEventListener('click', () =>{
  
// })
