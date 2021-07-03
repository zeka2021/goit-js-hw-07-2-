const navEl = document.querySelector('ul');
console.log(navEl);
const categoriesFirstLi = Array.from(
  document.querySelectorAll(".categories > li")
);
const categoriesUl = Array.from(
  document.querySelectorAll(".categories  li ul")
);

const categoriesList = [];

categoriesFirstLi.forEach(element => {
  categoriesList.push(
    `Категория: ${element.firstChild.textContent.trim()} / Количество: ${
      element.firstElementChild.children.length
    }`
  );
});

console.log(categoriesList);