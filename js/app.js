/* jshint esversion: 6 */

console.log("3. app.js test");

let shoppingListNew = new ShoppingList();
let itemName = document.getElementById("itemName").value;
let descriptionValue = document.getElementById("descriptionId").value;

document.getElementById("add_shopping_list_item_button").addEventListener('click', shoppingListNew.addItem());
document.getElementById("content").innerHTML = shoppingListNew.render();


function addToShoppingList(){

  let new_shopping_list_item = new ShoppingListItem(titleValue, descriptionValue);
  shoppingListNew.addItem(new_shopping_list_item);
  document.getElementById("content").innerHTML = shoppingListNew.render();

  var test = document.getElementsByClassName(descriptionValue);

  test.addEventListener("click", ()=>{
    removeItemButtonClicked(shoppingListNew.items.indexOf(new_shopping_list_item));
  });
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