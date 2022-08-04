function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesElements = document.querySelector('#boxes');
const amountEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const clearBtn = document.querySelector('[data-destroy]');
let markupEl = '';

createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  createMarkup();

  amountEl.value = 0;
}

function destroyBoxes() {
  boxesElements.innerHTML = '';
  amountEl.value = 0;

  markupEl = '';
}

function createMarkup() {
  let markupEl = '';

  if (!boxesElements.childElementCount) {
    for (let i = 1; i <= amountEl.value; i += 1) {
      markupEl += `<div style="background-color: ${getRandomHexColor()}; width: ${
        20 + i * 10
      }px; height: ${20 + i * 10}px"></div>`;
    }

    boxesElements.insertAdjacentHTML('beforeend', markupEl);
  } else {
    for (let i = 1; i <= amountEl.value; i += 1) {
      markupEl += `<div style="background-color: ${getRandomHexColor()}; width: ${
        Number.parseInt(boxesElements.lastElementChild.style.width) + i * 10
      }px; height: ${
        Number.parseInt(boxesElements.lastElementChild.style.height) + i * 10
      }px"></div>`;
    }

    boxesElements.insertAdjacentHTML('beforeend', markupEl);
  }
}
