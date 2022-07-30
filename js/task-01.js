const cats = document.querySelector('#categories');
const catList = cats.querySelectorAll('.item');
const catNames = cats.querySelectorAll('h2');

const animals = catList[0].querySelectorAll('li');
const products = catList[1].querySelectorAll('li');
const technologies = catList[2].querySelectorAll('li');

const message = `Number of categories: ${catList.length}`;
const animalsMessage = `Category: ${catNames[0].textContent} \nElements: ${animals.length}`;
const productsMessage = `Category: ${catNames[1].textContent} \nElements: ${products.length}`;
const technologiesMessage = `Category: ${catNames[2].textContent} \nElements: ${technologies.length}`;

console.log(message);
console.log(animalsMessage);
console.log(productsMessage);
console.log(technologiesMessage);

// ----------------------Варіант №2

// const animalTech = catList[0].firstElementChild.textContent;
// const productsTech = catList[1].firstElementChild.textContent;
// const technologiesTech = catList[2].firstElementChild.textContent;

// const message = `Number of categories: ${catList.length}`;
// const animalsMessage = `Category: ${animalTech} \nElements: ${animals.length}`;
// const productsMessage = `Category: ${productsTech} \nElements: ${products.length}`;
// const technologiesMessage = `Category: ${technologiesTech} \nElements: ${technologies.length}`;
