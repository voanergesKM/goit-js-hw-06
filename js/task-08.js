const formFieldEl = document.querySelector('.login-form');

formFieldEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (!email || !password) {
    window.alert('Please, fill in all fields!');
  }

  // ---------------- Var 1 --------------

  const formData = {
    email,
    password,
  };

  console.log(formData);

  // ----------------- Var 2 ----------------

  // const formData = new FormData(e.currentTarget);
  // formData.forEach((value, name) => {
  //   console.log(`${name}: ${value}`);
  // });

  if (email && password) {
    e.currentTarget.reset();
  }
}
