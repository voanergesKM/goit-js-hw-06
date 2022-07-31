const formFieldEl = document.querySelector('.login-form');

formFieldEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (!email || !password) {
    window.alert('Please, fill in all fields!');
  }

  const formData = {
    email,
    password,
  };

  e.currentTarget.reset();

  //   const formData = new FormData(e.currentTarget);
}
