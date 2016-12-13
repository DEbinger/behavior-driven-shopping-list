/*jshint esversion: 6*/

const should = chai.should();
const expect = chai.expect;


describe('ShoppingListItem', function(){

  //ShoppingListItem should be a class

  it('should be a class', function(){
    ShoppingListItem.should.be.a.function;
  });

  //ShoppingListItem has a property named name

  it('should have a property named "name"', function(){
    expect(ShoppingListItem).to.have.property('name');
  });

  //DON'T REMOVE
  it('setting ShoppingList.name should set instance\'s name', function (){
    let nickItem = new ShoppingListItem("nick");
    expect (nickItem.name).to.equal("nick");
  });

  //ShoppingListItem has a property named description

  //ShoppingListItem has a property named is_done

  //ShoppingListItem has a constructor method that accepts 2 arguments, name and description

    //shoppingListItem.should.have.property('name', 'description');

    //the constructor method sets the new instances name and description properties using the arguments passed in

  //ShoppingListItem has a method named check

      //calling the instance's check method will set it's is_done property to true

  //ShoppingListItem has a method named uncheck

      //calling the instance's uncheck method will set it's is_done property to false

  //ShoppingListItem has a method named render

      //calling the instance's render method will construct and return an html formatted string. the string content will be wrapped in <li> tags. <li class="completed_[is_done]"><span>[name]</span> <span>[description]</span></li>. example: <li class="completed_false"><span>Avocado</span> <span>Must be eaten immediately.</span></li>

    //hint: Use ES6 string templates for your render method

});





//ShoppingListItem is a class

//ShoppingList has a property named items

//ShoppingList has a constructor method that initializes items as an empty Array

//ShoppingList has a method named addItem that accepts a single ShoppingListItem argument

//invoking the addItem method by passing in a ShoppingListItem object should add that object to the items array

//invoking the addItem method by passing in anything else that is not a ShoppingListItem object should immediately throw an error

//ShoppingList has a method named removeItem that accepts a single ShoppingListItem argument

//invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array

//invoking the removeItem method with no parameters should remove the last item in the items list, if there are any items, else it does nothing

//invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (that exists in the items array) should immediately throw an error

//ShoppingList has a method named render

//calling the instance's render method will concatenate the result of calling render() on each item in this object's items array, wrapping it in a <ul> tags, and returning an html formatted string. ex: <ul>...[all the li elements from ShoppingListItem.render()]...</ul>