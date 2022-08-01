function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesElements = document.querySelector('#boxes');
const amountEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const clearBtn = document.querySelector('[data-destroy]');
const markupTable = [];

createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);

amountEl.addEventListener('input', e => {
  e.currentTarget.value;
});

function createBoxes() {
  for (let i = 1; i <= amountEl.value; i += 1) {
    const markupEl = `<div style="background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px"></div>`;
    markupTable.push(markupEl);
  }

  amountEl.value = 0;
  boxesElements.innerHTML = markupTable.join('');
}

function destroyBoxes() {
  boxesElements.innerHTML = '';
}
