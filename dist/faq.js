'use strict';

const savingClick = document.querySelector('.saving');
const loanClick = document.querySelector('.loan');
// const plusOpen = document.querySelector('.plus-open');
const opener = document.querySelector('.opener');
let plusOpenSrc = './dist/Cimg/open-plus.png';
let closeTimesSrc = './dist/Cimg/close-times.png';

loanClick.addEventListener('click', e => {
  loanClick.style.backgroundColor = 'rgba(217, 217, 217, 0.9)';
  loanClick.style.borderRadius = '1rem';
  savingClick.style.backgroundColor = '#1C9FF3';
});

savingClick.addEventListener('click', () => {
  savingClick.style.backgroundColor = 'rgba(217, 217, 217, 0.9)';
  savingClick.style.borderRadius = '1rem';
  loanClick.style.backgroundColor = '#1C9FF3';
});

opener.addEventListener('click', (e) => {
    // console.log(opener.src);

  if (opener.src === plusOpenSrc) {
    opener.src = './dist/Cimg/close-times.png';
  } else {
    opener.src = './dist/Cimg/open-plus.png';
  }
});

const toggleOpener = () => {};
