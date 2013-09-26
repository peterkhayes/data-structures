var makeBinarySearchTree = function(val) {
  return {
    value: val,
    parent: null,
    left: null,
    right: null,
    insert: function (toAdd) {
      var direction = (toAdd <= this.value ? "left" : "right");
      if (this[direction]) {
        this[direction].insert(toAdd);
      } else {
        this[direction] = makeBinarySearchTree(toAdd);
      }
    },
    contains: function (target) {
      if (target === this.value) {
        return true;
      }
      var direction = (target < this.value ? "left" : "right");
      if (this[direction]) {
        return this[direction].contains(target);
      } else {
        return false;
      }
    },
    depthFirstLog: function (iterator) {
      if (this.left) {
        this.left.depthFirstLog(iterator);
      }
      iterator(this.value);
      if (this.right) {
        this.right.depthFirstLog(iterator);
      }
    }
  };
};
