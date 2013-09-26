var makeSet = function(){
  var set = Object.create(setMethods);
  set._storage = {};
  return set;
};

var setMethods = {};

setMethods.add = function (element) {
  this._storage[JSON.stringify(element)] = true;
};

setMethods.contains = function (target) {
  for (var key in this._storage) {
    if (this._storage[key] && key === JSON.stringify(target)) {
      return true;
    }
  }
  return false;
};

setMethods.remove = function (element) {
  this._storage[JSON.stringify(element)] = undefined;
};
