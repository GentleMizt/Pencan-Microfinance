'use strict';
const loanSection = document.querySelector('.loan-div')
const savingSection = document.querySelector('.savings-div')
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

let opener1 = document.querySelector('.opener1');
const toggleOpener1 = () => {
  if (opener1.src.match('./dist/Cimg/open-plus.png')) {
    opener1.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden').style.display = 'block';
    document.querySelector('.apply').style.border = '1px solid #F17829';
    document.querySelector('.apply').style.borderRadius = '1rem';

  } else {
    opener1.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden').style.display = 'none';
    document.querySelector('.apply').style.border = 'none';
  }
};

// opener2.addEventListener('click', toggleOpener2);
let opener2 = document.querySelector('.opener2');
const toggleOpener2 = () => {
  if (opener2.src.match('./dist/Cimg/open-plus.png')) {
    opener2.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-b').style.display = 'block';
    document.querySelector('.borrow').style.border = '1px solid #F17829';
    document.querySelector('.borrow').style.borderRadius = '1rem';

  } else {
    opener2.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-b').style.display = 'none';
    document.querySelector('.borrow').style.border = 'none';
  }
};

// opener3.addEventListener('click', toggleOpener3);
let opener3 = document.querySelector('.opener3');
const toggleOpener3 = () => {
  if (opener3.src.match('./dist/Cimg/open-plus.png')) {
    opener3.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-r').style.display = 'block';
    document.querySelector('.apply').style.border = '1px solid #F17829';
    document.querySelector('.apply').style.borderRadius = '1rem';

  } else {
    opener3.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-r').style.display = 'none';
    document.querySelector('.apply').style.border = 'none';
  }
};

// opener4.addEventListener('click', toggleOpener4);
let opener4 = document.querySelector('.opener4');
const toggleOpener4 = () => {
  if (opener4.src.match('./dist/Cimg/open-plus.png')) {
    opener4.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-m').style.display = 'block';
    document.querySelector('.apply').style.border = '1px solid #F17829';
    document.querySelector('.apply').style.borderRadius = '1rem';

  } else {
    opener4.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-m').style.display = 'none';
    document.querySelector('.apply').style.border = 'none';
  }
};

// opener5.addEventListener('click', toggleOpener5);
let opener5 = document.querySelector('.opener5');
const toggleOpener5 = () => {
  if (opener5.src.match('./dist/Cimg/open-plus.png')) {
    opener5.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-c').style.display = 'block';
    document.querySelector('.apply').style.border = '1px solid #F17829';
    document.querySelector('.apply').style.borderRadius = '1rem';

  } else {
    opener5.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-c').style.display = 'none';
    document.querySelector('.apply').style.border = 'none';
  }
};

opener1.addEventListener('click', toggleOpener1);
opener2.addEventListener('click', toggleOpener2);
opener3.addEventListener('click', toggleOpener3);
opener4.addEventListener('click', toggleOpener4);
opener5.addEventListener('click', toggleOpener5);


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
