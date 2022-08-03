const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onEnoughCharacters);

function onEnoughCharacters(e) {
  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');

  if (e.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
}
