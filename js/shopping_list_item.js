/*jshint esversion: 6*/

console.log("1. item test");

class ShoppingListItem {
  
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
    this.is_done = true;
  }

  uncheck(){
    this.is_done = false;
  }

  render(){
    let newLi = document.createElement('li');
    newLi.innerHTML = this.name + ' ' + '(' + this.description + ')';
    let newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = 'checkbox';
    newCheckbox.addEventListener('onchange', changeCheckedStatus);
    newLi.appendChild(newCheckbox);
    let newRemoveBtn = document.createElement('button');
    newRemoveBtn.type = 'button';
    newRemoveBtn.addEventListener('click', removeItemButtonClicked);
    newRemoveBtn.innerHTML = 'x';
    newLi.appendChild(newRemoveBtn);
    return newLi;
  }
}