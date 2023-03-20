'use strict';
const loanSection = document.querySelector('.loans-div');
const savingSection = document.querySelector('.savings-div');
const savingClick = document.querySelector('.saving');
const loanClick = document.querySelector('.loan');
let opener = document.querySelector('.opener');

// const plusOpen = document.querySelector('.plus-open');

loanClick.addEventListener('click', e => {
  loanClick.style.backgroundColor = 'rgba(217, 217, 217, 0.9)';
  loanClick.style.borderRadius = '1rem';
  savingClick.style.backgroundColor = '#1C9FF3';
  loanSection.style.display = 'none';
  savingSection.style.display = 'block';
});

savingClick.addEventListener('click', () => {
  savingClick.style.backgroundColor = 'rgba(217, 217, 217, 0.9)';
  savingClick.style.borderRadius = '1rem';
  loanClick.style.backgroundColor = '#1C9FF3';
  loanSection.style.display = 'block';
  savingSection.style.display = 'none';
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

let opener3 = document.querySelector('.opener3');
const toggleOpener3 = () => {
  if (opener3.src.match('./dist/Cimg/open-plus.png')) {
    opener3.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-r').style.display = 'block';
    document.querySelector('.repay').style.border = '1px solid #F17829';
    document.querySelector('.repay').style.borderRadius = '1rem';
  } else {
    opener3.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-r').style.display = 'none';
    document.querySelector('.repay').style.border = 'none';
  }
};

let opener4 = document.querySelector('.opener4');
const toggleOpener4 = () => {
  if (opener4.src.match('./dist/Cimg/open-plus.png')) {
    opener4.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-m').style.display = 'block';
    document.querySelector('.max').style.border = '1px solid #F17829';
    document.querySelector('.max').style.borderRadius = '1rem';
  } else {
    opener4.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-m').style.display = 'none';
    document.querySelector('.max').style.border = 'none';
  }
};

let opener5 = document.querySelector('.opener5');
const toggleOpener5 = () => {
  if (opener5.src.match('./dist/Cimg/open-plus.png')) {
    opener5.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-c').style.display = 'block';
    document.querySelector('.check').style.border = '1px solid #F17829';
    document.querySelector('.check').style.borderRadius = '1rem';
  } else {
    opener5.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-c').style.display = 'none';
    document.querySelector('.check').style.border = 'none';
  }
};

let opener6 = document.querySelector('.opener6');
const toggleOpener6 = () => {
  if (opener6.src.match('./dist/Cimg/open-plus.png')) {
    opener6.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden').style.display = 'block';
    document.querySelector('.apply').style.border = '1px solid #F17829';
    document.querySelector('.apply').style.borderRadius = '1rem';
  } else {
    opener6.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden').style.display = 'none';
    document.querySelector('.apply').style.border = 'none';
  }
};

let opener7 = document.querySelector('.opener7');
const toggleOpener7 = () => {
  if (opener7.src.match('./dist/Cimg/open-plus.png')) {
    opener7.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-c').style.display = 'block';
    document.querySelector('.apply').style.border = '1px solid #F17829';
    document.querySelector('.apply').style.borderRadius = '1rem';
  } else {
    opener7.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-c').style.display = 'none';
    document.querySelector('.apply').style.border = 'none';
  }
};

let opener8 = document.querySelector('.opener8');
const toggleOpener8 = () => {
  if (opener8.src.match('./dist/Cimg/open-plus.png')) {
    opener8.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-c').style.display = 'block';
    document.querySelector('.apply').style.border = '1px solid #F17829';
    document.querySelector('.apply').style.borderRadius = '1rem';
  } else {
    opener8.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-c').style.display = 'none';
    document.querySelector('.apply').style.border = 'none';
  }
};

let opener9 = document.querySelector('.opener9');
const toggleOpener9 = () => {
  if (opener9.src.match('./dist/Cimg/open-plus.png')) {
    opener9.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-c').style.display = 'block';
    document.querySelector('.apply').style.border = '1px solid #F17829';
    document.querySelector('.apply').style.borderRadius = '1rem';
  } else {
    opener9.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-c').style.display = 'none';
    document.querySelector('.apply').style.border = 'none';
  }
};

let opener10 = document.querySelector('.opener10');
const toggleOpener10 = () => {
  if (opener10.src.match('./dist/Cimg/open-plus.png')) {
    opener10.src = './dist/Cimg/close-times.png';
    document.querySelector('.hidden-c').style.display = 'block';
    document.querySelector('.apply').style.border = '1px solid #F17829';
    document.querySelector('.apply').style.borderRadius = '1rem';
  } else {
    opener10.src = './dist/Cimg/open-plus.png';
    document.querySelector('.hidden-c').style.display = 'none';
    document.querySelector('.apply').style.border = 'none';
  }
};

opener1.addEventListener('click', toggleOpener1);
opener2.addEventListener('click', toggleOpener2);
opener3.addEventListener('click', toggleOpener3);
opener4.addEventListener('click', toggleOpener4);
opener5.addEventListener('click', toggleOpener5);
opener6.addEventListener('click', toggleOpener6);
opener7.addEventListener('click', toggleOpener7);
opener8.addEventListener('click', toggleOpener8);
opener9.addEventListener('click', toggleOpener9);
opener10.addEventListener('click', toggleOpener10);


