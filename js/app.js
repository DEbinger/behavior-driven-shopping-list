/* jshint esversion: 6 */

console.log("3. app.js test");

let shoppingListNew = new ShoppingList();
const contentContainer = document.getElementById('content');

document.getElementById("add_shopping_list_item_button").addEventListener('click', addToShoppingList);

document.getElementById("content").innerHTML = shoppingListNew.render();


function addToShoppingList(){
  let titleValue = document.getElementById("titleId").value;
let descriptionValue = document.getElementById("descriptionId").value;
  let new_shopping_list_item = new ShoppingListItem(titleValue, descriptionValue);
console.log(new_shopping_list_item);

  shoppingListNew.addItem(new_shopping_list_item);

let itemList = shoppingListNew.render();
console.log(itemList);

contentContainer.innerHTML = '';

for (var i = 0; i < itemList.length; i++) {
  contentContainer.appendChild(itemList[i]);
}
//contentContainer.appendChild(itemList);
/*
  var test = document.getElementsByClassName(descriptionValue);

  test.addEventListener("click", ()=>{
    removeItemButtonClicked(shoppingListNew.items.indexOf(new_shopping_list_item));
  });
*/
}

function changeCheckedStatus(idx, checkbox){

  if(checkbox.checked === true){

    shoppingListNew.items[idx].checked();
  } else if(checkbox.checked === false){
    shoppingListNew.items[idx].uncheck();
  }
}


function removeItemButtonClicked(idx){

  shoppingListNew.removeItem(shoppingListNew.items[idx]);
  document.getElementById("content").innerHTML = shoppingListNew.render();

}