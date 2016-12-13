/*jshint esversion: 6*/

const should = chai.should();
const expect = chai.expect;


describe('ShoppingListItem', function(){

  let sli = new ShoppingListItem('dildo', 'phallic');

  //ShoppingListItem should be a class

  it('should be a class', function(){
    ShoppingListItem.should.be.a.function;
  });

  //ShoppingListItem has a property named name

  it('should have a property named "name"', function(){
    expect (sli).to.have.property('name');
  });

  //ShoppingListItem has a property named description

  it('should have a property named "description"', function(){
    expect(sli).to.have.property('description');
  });

  //ShoppingListItem has a property named is_done

  it('should have a property named "is_done"', function(){
    expect(sli).to.have.property('is_done');
  });

  //ShoppingListItem has a constructor method that accepts 2 arguments, name and description

    //shoppingListItem.should.have.property('name', 'description');

    //the constructor method sets the new instances name and description properties using the arguments passed in

  it('should have a constructor method that accepts two arguments: "name" and "description"', function(){
    expect(sli).to.have.property('name');
    expect(sli).to.have.property('description');
  });

  //ShoppingListItem has a method named check

    //calling the instance's check method will set it's is_done property to true

  describe('check', function(){
    it('should have a method named "check"', function(){
      expect(sli.check).to.be.a('function');
    });
    it('should set "is_done" property to "true"', function(){
      sli.check();
      expect(sli.is_done).to.equal(true);
    });
  });

  //ShoppingListItem has a method named uncheck

      //calling the instance's uncheck method will set it's is_done property to false

  describe('uncheck', function(){
    it('should have a method named "uncheck"', function(){
      expect(sli.uncheck).to.be.a('function');
    });
    it('should set "is_done" property to "false"', function(){
      sli.uncheck();
      expect(sli.is_done).to.equal(false);
    });
  });

  //ShoppingListItem has a method named render

      /*calling the instance's render method will construct and return an html formatted string. the string content will be wrapped in <li> tags.
      example:
      <li class="completed_false">
        <span>Avocado</span>
        <span>Must be eaten immediately.</span>
      </li>;*/

    //hint: Use ES6 string templates for your render method

  describe('render', function(){
    it('should have a method named "render"', function(){
/*      let newLi = document.createElement('li');
      let newSpan = document.createElement('span');
      newLi.appendChild(newSpan);

      let currentDiv = document.getElementById('');
      document.body.insertBefore(newLi, currentDiv);*/
    });
  });

});

//ShoppingList is a class

describe('ShoppingList', ()=>{

//ShoppingList is a class

  it('should be a class', ()=>{
    ShoppingList.should.be.a.function;
  });

  it('should have a property named items',()=>{
    ShoppingList.should.have.a.property('items');
  });

  it('should contain an empty array', ()=> {
    ShoppingList.items.should.be.an('array');
  });
//ShoppingList has a property named items

//ShoppingList has a constructor method that initializes items as an empty Array

/*  it('should have a property named "items" to be an empty "array"',()=>{
    expect(ShoppingList).to.have.property('items').to.be.a('array');
  });
*/
//ShoppingList has a method named addItem that accepts a single ShoppingListItem argument

/*  it('should have a "addItem" method that accepts single ShoppingListItem as an argument', ()=>{
   ShoppingList.addItem.should.be.a('function');
  });*/
/*  it('should be an instance of ShoppingListItem', () => {
  item.should.be.an.instanceof(ShoppingListItem);
  });*/
/*
  it('should have a method "addItem" that accepts a single ShoppingListItem as an argument', function(){
    expect(addItem).to.have.property('');
  });
*/
//invoking the addItem method by passing in a ShoppingListItem object should add that object to the items array
/*  it('should have a method named "addItem" that accepts a single ShoppingListItem argument');
  expect(sl).to.have.property('ShoppingListItem');

//invoking the addItem method by passing in anything else that is not a ShoppingListItem object should immediately throw an error
  it('should throw an error when invoking the "addItem method',()=>{
    if('this.item')
    expect(sl).to.throw(Error);
  });
*/
//ShoppingList has a method named removeItem that accepts a single ShoppingListItem argument

//invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array

//invoking the removeItem method with no parameters should remove the last item in the items list, if there are any items, else it does nothing

//invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (that exists in the items array) should immediately throw an error

//ShoppingList has a method named render

//calling the instance's render method will concatenate the result of calling render() on each item in this object's items array, wrapping it in a <ul> tags, and returning an html formatted string. ex: <ul>...[all the li elements from ShoppingListItem.render()]...</ul>
});