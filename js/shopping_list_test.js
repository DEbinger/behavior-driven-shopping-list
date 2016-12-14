/*jshint esversion: 6*/

const should = chai.should();
const expect = chai.expect;


describe('ShoppingListItem', ()=>{

  let sli = new ShoppingListItem('dildo', 'phallic');

  //ShoppingListItem should be a class

  it('should be a class', ()=>{
    ShoppingListItem.should.be.a.function;
  });

  //ShoppingListItem has a property named name

  it('should have a property named "name"', ()=>{
    expect (sli).to.have.property('name');
  });

  //ShoppingListItem has a property named description

  it('should have a property named "description"', ()=>{
    expect(sli).to.have.property('description');
  });

  //ShoppingListItem has a property named is_done

  it('should have a property named "is_done"', ()=>{
    expect(sli).to.have.property('is_done');
  });

  //ShoppingListItem has a constructor method that accepts 2 arguments, name and description

    //shoppingListItem.should.have.property('name', 'description');

    //the constructor method sets the new instances name and description properties using the arguments passed in

  it('should have a constructor method that accepts two arguments: "name" and "description"', ()=>{
    expect(sli).to.have.property('name');
    expect(sli).to.have.property('description');
  });

  //ShoppingListItem has a method named check

    //calling the instance's check method will set it's is_done property to true

  describe('check', ()=>{
    it('should have a method named "check"', ()=>{
      expect(sli.check).to.be.a('function');
    });
    it('should set "is_done" property to "true"', ()=>{
      sli.check();
      expect(sli.is_done).to.equal(true);
    });
  });

  //ShoppingListItem has a method named uncheck

      //calling the instance's uncheck method will set it's is_done property to false

  describe('uncheck', ()=>{
    it('should have a method named "uncheck"', ()=>{
      expect(sli.uncheck).to.be.a('function');
    });
    it('should set "is_done" property to "false"', ()=>{
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

  describe('render', ()=>{
    it('should have a method named "render"', ()=>{
      let newLi = document.createElement('li');
      let newSpan = document.createElement('span');
      newLi.appendChild(newSpan);

      let currentDiv = document.getElementById('content');
      document.body.insertBefore(newLi, currentDiv);
    });
  });

});





describe('ShoppingList', ()=>{

  let sl = new ShoppingList();

  beforeEach(() =>{
    shoppingList = new ShoppingList();
  });

  it('should be a class', ()=>{
    ShoppingList.should.be.a.function;
  });

  it('should have a property named items',()=>{
    shoppingList.should.have.a.property('items');
  });

//ShoppingList has a method named addItem that accepts a single ShoppingListItem argument

  describe('addItem', ()=>{
    it('should have a method named "addItem" that accepts a single ShoppingListItem as an argument', ()=>{
      expect(sl.addItem).to.be.a('function');
    });
    it('should contain an empty array', ()=> {
      shoppingList.items.should.be.an('array');
    });

    it('should have a method named addItem', ()=>{
      shoppingList.addItem.should.be.a('function');
    });

    it('should add Shopping List Item to the array', ()=>{
      let slItem = new ShoppingListItem('SLItem', 'Item to add to shopping list');
      shoppingList.addItem(slItem);
      shoppingList.items.should.contain(slItem);
    });
  });

  describe('removeItem', ()=>{
    it('should have a method named removeItem',()=>{
      shoppingList.removeItem.should.be.a('function');
    });
  });

  describe('render', ()=>{
    it('should have a method named render', ()=>{
      shoppingList.render.should.be.a('function');
    });
  });

//invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array

//invoking the removeItem method with no parameters should remove the last item in the items list, if there are any items, else it does nothing

//invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (that exists in the items array) should immediately throw an error

//ShoppingList has a method named render

//calling the instance's render method will concatenate the result of calling render() on each item in this object's items array, wrapping it in a <ul> tags, and returning an html formatted string. ex: <ul>...[all the li elements from ShoppingListItem.render()]...</ul>

});