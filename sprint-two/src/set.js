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
  console.log("-----");
  console.log("target is " + JSON.stringify(target));
  for (var key in this._storage) {
    console.log("key is " + key);
    if (this._storage[key] && key === JSON.stringify(target)) {
      console.log("Match!");
      return true;
    }
  }
  console.log("No Match!");
  return false;
};

setMethods.remove = function (element) {
  this._storage[JSON.stringify(element)] = undefined;
};
