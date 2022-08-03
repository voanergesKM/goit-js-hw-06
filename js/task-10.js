function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesElements = document.querySelector('#boxes');
const amountEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const clearBtn = document.querySelector('[data-destroy]');
let markupTable = [];

createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);

function createMarkup() {
  let markupEl = '';

  for (let i = 1; i <= amountEl.value; i += 1) {
    markupEl += `<div style="background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px"></div>`;
  }

  markupTable.push(markupEl);

  boxesElements.innerHTML = markupTable.join('');
}

function createBoxes() {
  createMarkup();

  amountEl.value = 0;
}

function destroyBoxes() {
  boxesElements.innerHTML = '';
  amountEl.value = 0;

  markupTable = [];
}
