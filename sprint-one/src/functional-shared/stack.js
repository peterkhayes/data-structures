var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};
  instance.storage = {};
  instance.len = 0;

  _.extend(instance, stackMethods);
  
  return instance;
};
var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.len] = value;
  this.len++;
};
stackMethods.pop = function(){
    if (this.len) {
      var value = this.storage[this.len - 1];
      this.storage[this.len - 1] = undefined;
      this.len--;
      return value;
    }
    return undefined;
};
stackMethods.size = function() {
  return this.len;
};