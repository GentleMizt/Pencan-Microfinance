'use strict';

const savingClick = document.querySelector('.saving');
const loanClick = document.querySelector('.loan');
let opener = document.querySelector('.opener');

// const plusOpen = document.querySelector('.plus-open');

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


const toggleOpener = () => {
    let opener = document.querySelector('.opener');
    if (opener.src.match('./dist/Cimg/open-plus.png')) {
        opener.src = './dist/Cimg/close-times.png';
    } else {
        opener.src = './dist/Cimg/open-plus.png';
    }
};


opener.addEventListener('click', toggleOpener);
