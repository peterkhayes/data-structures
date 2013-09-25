var makeSet = function(){
  var set = Object.create(setMethods);
  set._storage = undefined;
  return set;
};

var setMethods = {};

setMethods.add = function (element){
  this._storage[element] = true;
};

setMethods.contains = function (target){
  var result = false;
  for (var key in this._storage) {
    if (key === target) {
      result = true;
    }
  }
  return result;
};

setMethods.remove = function(){
};
