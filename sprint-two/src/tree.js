var makeTree = function(){
  var newTree = Object.create(treeMethods);
  newTree.value = undefined;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(child){
  this.children.push(child);
};

treeMethods.contains = function(){
};
