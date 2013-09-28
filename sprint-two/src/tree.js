var makeTree = function(){
  var newTree = Object.create(treeMethods);
  newTree.value = undefined;
  newTree.children = [];
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (child){
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  var childArray = this.parent.children;
  for (var i = 0; i < childArray.length; i++) {
    if (childArray[i] === this) {
      childArray.splice(i, 1);
    }
  }
  this.parent = null;
};

treeMethods.traverse = function (iterator) {
  iterator(this.value);

  if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(iterator);
    }
  }
};
