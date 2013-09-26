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
      var stack = [this];
      while (stack.length) {
        var current = stack.pop();
        if (current && current.right) {
          stack.push(current.right);
        }
        if (current && current.left) {
          stack.push(current.left);
        }
        iterator(current.value);
      }
    },
    breadthFirstLog: function (iterator) {
      var queue = [this];
      while (queue.length) {
        var current = queue.shift();
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        iterator(current.value);
      }
    }
  };
};
