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
    newLi.appendChild(newCheckbox);
    return newLi;

    /*
    let newSpan = document.createElement('span');
    newLi.appendChild(newSpan);

    let currentDiv = document.getElementById('content');
    document.body.insertBefore(newLi, currentDiv)*/
/*    console.log('item');
    return item;*/
}

}