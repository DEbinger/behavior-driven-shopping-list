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
  shoppingListNew.addItem(new_shopping_list_item);
  let itemList = shoppingListNew.render();
  contentContainer.innerHTML = '';
  for (var i = 0; i < itemList.length; i++) {
    contentContainer.appendChild(itemList[i]);
  }
}

function changeCheckedStatus(idx, checkbox){
  document.getElementById('checkbox').addEventListener('onchange', changeCheckedStatus);
  if(checkbox.checked === true){
    shoppingListNew.items[idx].check();
  } else if(checkbox.checked === false){
    shoppingListNew.items[idx].uncheck();
  }
}

function removeItemButtonClicked(idx){
  shoppingListNew.removeItem(shoppingListNew.items[idx]);
  document.getElementById("content").innerHTML = shoppingListNew.render();
}