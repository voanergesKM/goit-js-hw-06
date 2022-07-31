const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onEnoughCharacters);

function onEnoughCharacters(e) {
  if (e.currentTarget.value.length < inputEl.dataset.length) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}
