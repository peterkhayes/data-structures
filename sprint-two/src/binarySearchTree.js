var makeBinarySearchTree = function(val) {
  return {
    value: val,
    parent: null,
    left: null,
    right: null,
    depth: 0,
    rebalancingCheck: 1, // Counter so we don't check for rebalancing with every node. A tree would never need rebalancing on the first insert.
    
    // Inserts a value into the tree recursively.  The head node checks if there needs rebalancing.
    insert: function (toAdd, noRebalance) {
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
      if (!this.parent && noRebalance !== true) {
        if (this.rebalancingCheck) {
          this.rebalancingCheck--;
        } else {
          var minDepth = this.minDepth();
          var maxDepth = this.maxDepth();
          if (maxDepth > minDepth*2) {
            console.log("Rebalancing!");
            this.rebalancingCheck = this.rebalance(); // We won't need to check again until at least as many elements as the max depth have been added.
          } else {
            this.rebalancingCheck = (minDepth*2 - maxDepth);
          }
        }
      }
    },

    // Checks if a tree contains a value.
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

    // Runs an interator for each value in the tree, depth first.
    depthFirstLog: function (iterator) {
      iterator(this.value);
      if (this.left) {
        this.left.depthFirstLog(iterator);
      }
      if (this.right) {
        this.right.depthFirstLog(iterator);
      }
    },

    // Runs an iterator for each value in the tree, breadth first.
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

    // Runs an iterator for each value in the tree, in sorted order.
    inOrderLog: function (iterator) {
      if (this.left) {
        this.left.inOrderLog(iterator);
      }
      iterator(this.value);
      if (this.right) {
        this.right.inOrderLog(iterator);
      }
    },

    // Calculates the minimum depth of the tree (O(n), unfortunatley).
    minDepth: function(){
      var minL = (this.left ? 1 + this.left.minDepth() : 0);
      var minR = (this.right ? 1 + this.right.minDepth() : 0);
      return Math.min(minL, minR);
    },

    // Calculates the maximum depth of the tree (O(n), unfortunatley).
    maxDepth: function(){
      var maxL = (this.left ? 1 + this.left.maxDepth() : 0);
      var maxR = (this.right ? 1 + this.right.maxDepth() : 0);
      return Math.max(maxL, maxR);
    },

    // Rebalances a tree to have minimum depth.
    rebalance: function() {
      // Make an in-order sorted list of all arrays ()
      var inOrder = [];
      this.inOrderLog(function(value) {
        inOrder.push(value);
      });

      // Reset the tree.  The middle of the sorted array becomes the new head.
      var midpoint = Math.floor((inOrder.length - 1)/2);
      this.value = inOrder[midpoint];
      this.left = null;
      this.right = null;

      // Re-add all values in an order that balances the tree.
      var workingQueue = [inOrder.slice(0,midpoint), inOrder.slice(midpoint+1)]; // Split on either side of the midpoint.
      while (workingQueue.length) {
        var currentList = workingQueue.shift(); // Pop off the current sublist.
        if (currentList.length === 1) { // Single items we add directly.
          this.insert(currentList[0], true); // True is "noRebalance" flag - our tree is already in order.
        } else if (currentList.length === 2) { // Two items we also add directly.
          this.insert(currentList[0], true);
          this.insert((currentList[1]), true);
        } else {  // Otherwise, split again.
          midpoint = Math.floor(currentList.length/2 - 1);
          this.insert(currentList[midpoint], true);
          var left = currentList.slice(0,midpoint);
          if (left.length) workingQueue.push(left);
          var right = currentList.slice(midpoint+1);
          if (right.length) workingQueue.push(right);
        }
      }

      return Math.ceil(Math.log(inOrder.length)/Math.log(2)); // Returns the new max depth, to avoid having to rebalance again later.
    }
  };
};
