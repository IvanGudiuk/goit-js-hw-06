const catagoriesListRef = document.querySelector('#categories');
const catagoriesItemsRefs = document.querySelectorAll('.item');
console.log(`Number of catagories: ${catagoriesItemsRefs.length}`);

catagoriesItemsRefs.forEach(catagory => {
  const catagoryTitle = catagory.firstElementChild.textContent;
  const catagoryList = catagory.lastElementChild;
  console.log(
    `Catagory: ${catagoryTitle} 
Elements: ${catagoryList.children.length}`
  );
});
