const counterValue = document.querySelector('#value');
counterValue.textContent = 0;
const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

const handleDecrementBtn = () => {
  const value = parseInt(counterValue.textContent) - 1;
  counterValue.textContent = value;
};
const handleIncrementBtn = () => {
  const value = parseInt(counterValue.textContent) + 1;
  counterValue.textContent = value;
};

decrementBtnRef.addEventListener('click', handleDecrementBtn);
incrementBtnRef.addEventListener('click', handleIncrementBtn);
