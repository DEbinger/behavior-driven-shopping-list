/*jshint esversion: 6*/

console.log("2. list test");

class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem(item) {
    if(item instanceof ShoppingListItem){
      this.items.push(item);
    }else{
      throw new Error('Item added is not valid for the shopping list, please try again');
    }
    console.log(this.items);
  }

  removeItem(item) {
    if(this.items.indexOf(item) > -1 && item instanceof ShoppingListItem){
      this.items.splice(this.items.indexOf(item), 1);
    }else if(item === undefined && this.items.length > 0){
      this.items.pop();
    }else if(this.items.indexOf(item) === -1){
      throw new Error('Item is invalid, please try again');
    }
  }

  render(){
    let renderList = [];
    for (var i = 0; i < this.items.length; i++) {
    renderList.push (this.items[i].render());
    }

    return renderList;
  }

}