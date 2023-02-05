const nameInputRef = document.querySelector('#name-input');
const greetingText = document.querySelector('#name-output');
const handleNameInputRef = () => {
  if (nameInputRef.value === '') {
    greetingText.textContent = 'Anonymous';
  } else {
    greetingText.textContent = nameInputRef.value;
  }
};
nameInputRef.addEventListener('input', handleNameInputRef);
