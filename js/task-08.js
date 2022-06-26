const refs = {
  form: document.querySelector('.login-form'),
};

function onSendForm(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;
  const emailEl = formEl.email.value;
  const passwordEl = formEl.password.value;

  if (emailEl !== '' && passwordEl !== '') {
    const formData = { emailEl, passwordEl };
    console.log(formData);
    event.currentTarget.reset();
  } else {
    alert('Please fill in all empty fields.');
  }
}

refs.form.addEventListener('submit', onSendForm);
