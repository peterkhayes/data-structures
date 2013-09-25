var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.len = 0;
  
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
};
stackMethods.size = function() {
  return this.len;
};