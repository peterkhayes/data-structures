var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstIndex = 0;
  var lastIndex = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[lastIndex++] = value;
  };

  instance.dequeue = function(){
    if (lastIndex - firstIndex) {
      var value = storage[firstIndex];
      storage[firstIndex++] = undefined;
      return value;
    }
    return undefined;
  };

  instance.size = function(){
    return lastIndex - firstIndex;
  };

  return instance;
};