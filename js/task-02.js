const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

// --------------------- #1 ---------------

const makeElement = element => {
  const el = document.createElement('li');
  el.classList.add('item');
  el.textContent = element;

  return el;
};

const elementsMarkUp = ingredients.map(makeElement);

ingredientsList.append(...elementsMarkUp);

// -------------------- #2 ---------------------

// const makeElements = ingredients => {
//   return ingredients.map(ingredient => {
//     const el = document.createElement('li');
//     el.classList.add('item');
//     el.textContent = ingredient;

//     return el;
//   });
// };

// const markUp = makeElements(ingredients);

// ingredientsList.append(...markUp);
