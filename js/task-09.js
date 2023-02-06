function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackgroundRef = document.body;
bodyBackgroundRef.setAttribute('style', 'background-color:#FFFAFA');
const colorValue = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');

const changeColor = () => {
  const color = getRandomHexColor();
  bodyBackgroundRef.style.backgroundColor = color;
  colorValue.textContent = color;
};
colorChangeBtn.addEventListener('click', changeColor);
