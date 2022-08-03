const cats = document.querySelector('#categories');
const catList = cats.querySelectorAll('.item');
const categoriesQty = catList.length;

const message = `Number of categories: ${categoriesQty}`;
console.log(message);

catList.forEach(el => {
  const catName = el.firstElementChild.textContent;
  const catQty = el.lastElementChild.childElementCount;

  console.log(`Category: ${catName} \nElements: ${catQty}`);
});
