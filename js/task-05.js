const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const defaultOutputEl = 'Anonymous';

inputEl.addEventListener('input', changeOutputName);

function changeOutputName(e) {
  outputEl.textContent = e.currentTarget.value;

  if (!e.currentTarget.value) {
    outputEl.textContent = defaultOutputEl;
  }
}
