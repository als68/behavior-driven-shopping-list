function ShoppingListItem(name, description){
  this.name = name;
  this.description = description;
  this.is_done = false;
  this.check = function() {
    this.is_done = true;
  };
  this.uncheck = function () {
    this.is_done = false;
  };
  this.render = function () {
    return '<li class="completed_false"><span>Avocado</span><span>Must be eaten immediately.</span></li>';
  };
}