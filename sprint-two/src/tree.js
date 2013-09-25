var makeTree = function(){
  var newTree = Object.create(treeMethods);
  newTree.value = undefined;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (child){
  this.children.push(child);
};

treeMethods.contains = function(target){
  var result = (this.value === target);
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      result = true;
    }
  }
  return result;
};
