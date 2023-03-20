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

// const toggleOpener = () => {
//   let opener = document.querySelector('.opener');
//   if (opener.src.match('./dist/Cimg/open-plus.png')) {
//     opener.src = './dist/Cimg/close-times.png';
//     document.querySelector('.hidden').style.display = 'block';
//     document.querySelector('.apply').style.border = '1px solid #F17829';
//     document.querySelector('.apply').style.borderRadius = '1rem';

//   } else {
//     opener.src = './dist/Cimg/open-plus.png';
//     document.querySelector('.hidden').style.display = 'none';
//     document.querySelector('.apply').style.border = 'none';
//   }
// };


// let hidden = document.querySelectorAll('.hidden');
// for (let hI = 0; hI < hidden.length; hI++) {
//   //   console.log((hidden[hI].style.display = 'block'));
// }


// let openers = document.querySelectorAll('.opener');
// for (let i = 0; i < openers.length; i++) {
//   openers[i].addEventListener('click', () => {
//     if (openers[i].src.match('./dist/Cimg/open-plus.png')) {
//       openers[i].src = './dist/Cimg/close-times.png';
//       for (let hI = 0; hI < hidden.length; hI++) {
//         console.log((hidden[hI].style.display = 'block'));
//       }
//       //   document.querySelectorAll('.apply').style.border = '1px solid #F17829';
//       //   document.querySelectorAll('.apply').style.borderRadius = '1rem';
//     } else {
//       openers[i].src = './dist/Cimg/open-plus.png';
//       for (let hI = 0; hI < hidden.length; hI++) {
//         console.log((hidden[hI].style.display = 'none'));
//       }
//       //   document.querySelectorAll('.apply').style.border = 'none';
//     }
//   });
// }
