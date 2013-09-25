var makeSet = function(){
  var set = Object.create(setMethods);
  set._storage = {};
  return set;
};

var setMethods = {};

setMethods.add = function (element) {
  this._storage[element] = true;
};

setMethods.contains = function (target) {
  var result = false;
  for (var key in this._storage) {
    if (this._storage[key] && key === target) {
      result = true;
    }
  }
  return result;
};

setMethods.remove = function (element) {
  this._storage[element] = undefined;
};
