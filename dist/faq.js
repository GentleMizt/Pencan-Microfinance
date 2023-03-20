'use strict';

const savingClick = document.querySelector('.saving');
const loanClick = document.querySelector('.loan');

console.log(loanClick);

loanClick.addEventListener('click', (e) =>{
    loanClick.style.backgroundColor = 'rgba(217, 217, 217, 0.9)';
    loanClick.style.borderRadius = '1rem';
    savingClick.style.backgroundColor = '#1C9FF3'
  })
  
  savingClick.addEventListener('click', () =>{
    savingClick.style.backgroundColor = 'rgba(217, 217, 217, 0.9)';
    savingClick.style.borderRadius = '1rem';
    loanClick.style.backgroundColor = '#1C9FF3'
  })