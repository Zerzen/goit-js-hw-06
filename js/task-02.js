const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ulIngredientsElement = document.querySelector('#ingredients');

const liArrey = [];

const addLiItemsAndText = ingredients.forEach(element => {
  const liItem = document.createElement('li');
  liItem.classList.add('item');
  liItem.textContent = element;
  liArrey.push(liItem);
});
ulIngredientsElement.append(...liArrey);
