function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesContainer = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const amountInput = document.querySelector('#controls input');
const createBoxes = () => {
  const createdBoxes = [];
  const sum = amountInput.value * 10 + 30;
  for (let k = 30; k < sum; k += 10) {
    let data = `<div style="background-color: ${getRandomHexColor()}; width: ${k}px; height: ${k}px"></div>`;
    createdBoxes.push(data);
  }
  const string = createdBoxes.join('');
  boxesContainer.innerHTML = '';
  boxesContainer.insertAdjacentHTML('afterbegin', string);
};
const destroyBoxes = () => {
  boxesContainer.innerHTML = '';
  amountInput.value = null;
};
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
