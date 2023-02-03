const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const itemsRefs = ingredients.map(item => {
  const listItemRef = document.createElement('li');
  listItemRef.classList.add('item');
  listItemRef.textContent = `${item}`;
  return listItemRef;
});
ingredientsListRef.append(...itemsRefs);
