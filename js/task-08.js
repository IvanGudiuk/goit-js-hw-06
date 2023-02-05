const registrationForm = document.querySelector('.login-form');
const onFormSubmit = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const formData = { email: email.value, password: password.value };

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  } else {
    console.log(`email: ${formData.email}, Password: ${formData.password}`);
    event.currentTarget.reset();
  }
};
registrationForm.addEventListener('submit', onFormSubmit);
