function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeCollorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.widget span');

changeCollorBtn.addEventListener('click', () => {
  colorValue.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
