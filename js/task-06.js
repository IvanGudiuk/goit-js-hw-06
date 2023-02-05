const validationInputRef = document.querySelector('#validation-input');
const dataLengthAttribute = validationInputRef.getAttribute('data-length');
const handleValidationInputRef = () => {
  if (validationInputRef.value.length == dataLengthAttribute) {
    validationInputRef.classList.add('valid');
    validationInputRef.classList.remove('invalid');
  } else {
    validationInputRef.classList.add('invalid');
  }
};
validationInputRef.addEventListener('blur', handleValidationInputRef);
