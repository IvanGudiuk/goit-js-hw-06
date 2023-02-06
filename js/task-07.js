const textSizeSwitch = document.querySelector('#font-size-control');
const word = document.querySelector('#text');
word.setAttribute('style', 'font-size: 16px');
const handleSizeSwitch = () => {
  word.style.fontSize = textSizeSwitch.value + 'px';
};
textSizeSwitch.addEventListener('input', handleSizeSwitch);
