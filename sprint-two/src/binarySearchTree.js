var makeBinarySearchTree = function(val) {
  return {
    value: val,
    parent: null,
    left: null,
    right: null,
    depth: 0,
    insert: function (toAdd) {
      var direction = (toAdd <= this.value ? "left" : "right");
      if (this[direction]) {
        // Call insert recursively.
        this[direction].insert(toAdd);
      } else {
        // Add a new node as a leaf.
        this[direction] = makeBinarySearchTree(toAdd);
        this[direction].parent = this;
        this[direction].depth = this.depth + 1;
      }
      if (!this.parent) {
          var minDepth = this.minDepth();
          var maxDepth = this.maxDepth();
          if (maxDepth > minDepth*2) {
            this.rebalance();
          }
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
    },
    minDepth: function(){
      var minL = (this.left ? this.left.minDepth() : 0);
      var minR = (this.right ? this.right.minDepth() : 0);
      return 1 + Math.min(minL, minR);
    },
    maxDepth: function(){
      var maxL = (this.left ? this.left.maxDepth() : 0);
      var maxR = (this.right ? this.right.maxDepth() : 0);
      return 1 + Math.max(maxL, maxR);
    },
    rebalance: function() {
      console.log("this tree needs to rebalance!");
    }
  };
};
