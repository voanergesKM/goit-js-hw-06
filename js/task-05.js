const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', changeOutputName);

function changeOutputName(e) {
  outputEl.textContent = e.currentTarget.value || 'Anonymous';
}
