'use strict';

describe('ShoppingListItem', function(){
  var myItems;
  beforeEach(function(){
    myItems = new ShoppingListItem('Clothing', 'Shirts');
  });

  it('exists', function(){
    expect (ShoppingListItem).to.exist;
  });

  it('is a function', function(){
    expect(ShoppingListItem).to.be.a('function');
  });

  it('has a name', function (){
    myItems.name.should.equal('Clothing');
  });
  it('has a description', function (){
    myItems.description.should.equal('Shirts');
  });
  it('has the property, is_done', function(){
    expect(myItems.is_done).should.exist;
    myItems.is_done.should.equal(false);
  });
  it('has a check function', function(){
    expect(myItems.check).to.be.a('function');
    myItems.check();
    myItems.is_done.should.equal(true);
  });
  it('has a uncheck function', function(){
    expect(myItems.check).to.be.a('function');
    myItems.uncheck();
    myItems.is_done.should.equal(false);
  });
  it('has a render function', function(){
    expect(myItems.render).to.be.a('function');
  });
});

/*describe('ShoppingListItem', function(){
  var myItems;
  beforeEach(function(){
    myItems = new ShoppingListItem('Clothing', 'Shirts');
  });

  it('exists', function(){
    expect (ShoppingListItem).to.exist;
  });

  it('is a function', function(){
    expect(ShoppingListItem).to.be.a('function');
  });

  it('has a name', function (){
    myItems.name.should.equal('Clothing');
  });
  it('has a description', function (){
    myItems.description.should.equal('Shirts');
  });
  it('has the property, is_done', function(){
    expect(myItems.is_done).should.exist;
    myItems.is_done.should.equal(false);
  });
  it('has a check function', function(){
    expect(myItems.check).to.be.a('function');
    myItems.check();
    myItems.is_done.should.equal(true);
  });
  it('has a uncheck function', function(){
    expect(myItems.check).to.be.a('function');
    myItems.uncheck();
    myItems.is_done.should.equal(false);
  });
  it('has a render function', function(){
    expect(myItems.render).to.be.a('function');
  });
});*/