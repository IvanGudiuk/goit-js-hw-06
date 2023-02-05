function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  bodyBackgroundRef.style.backgroundColor = color;
  colorValue.textContent = color;
}
const bodyBackgroundRef = document.body;
bodyBackgroundRef.setAttribute('style', 'background-color:#FFFAFA');
const colorValue = document.querySelector('.color');
const colorChangeBtn = document.querySelector('.change-color');
colorChangeBtn.addEventListener('click', getRandomHexColor);
