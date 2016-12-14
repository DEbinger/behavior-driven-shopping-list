/* jshint esversion: 6 */
let shoppingListNew = new ShoppingList();
document.getElementById("content").innerHTML = shoppingList.render();


function addToShoppingList(){

  let titleValue = document.getElementById("titleId").value;
  let descriptionValue = document.getElementById("descriptionId").value;

  let new_shopping_list_item = new ShoppingListItem(titleValue, descriptionValue);
  shoppingListNew.addItem(new_shopping_list_item);
  document.getElementById("content").innerHTML = shoppingListNew.render();

  var test = document.getElementsByClassName(descriptionValue);
  console.log(test);
  test.addEventListener("click", () => {
    removeItemButtonClicked(shoppingListNew.items.indexOf(new_shopping_list_item));
  });
}



function changeCheckedStatus(idx, checkbox){

  if(checkbox.checked === true){
    console.log(checkbox.checked);
    shoppingListNew.items[idx].checked();
  } else if(checkbox.checked === false){
    shoppingListNew.items[idx].uncheck();
  }
}

function removeItemButtonClicked(idx){

  shoppingListNew.removeItem(shoppingListNew.items[idx]);
  document.getElementById("content").innerHTML = shoppingListNew.render();

}