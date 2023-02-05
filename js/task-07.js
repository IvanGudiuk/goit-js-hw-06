const textSizeSwitch = document.querySelector('#font-size-control');
const wordOnChange = document.querySelector('#text');
wordOnChange.setAttribute('style', 'font-size: 16px');
const handleSizeSwitch = () => {
  wordOnChange.style.fontSize = textSizeSwitch.value + 'px';
};
textSizeSwitch.addEventListener('input', handleSizeSwitch);
