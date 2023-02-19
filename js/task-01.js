const liCategoriesElements = document.querySelectorAll('.item');

console.log(`Number of categories: ${liCategoriesElements.length}`)



liCategoriesElements.forEach((element)=>{

console.log(`Category: ${element.firstElementChild.textContent}`)

console.log(`Elements: ${element.lastElementChild.children.length}`)

});



