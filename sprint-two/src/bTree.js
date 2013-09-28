var makeBTree = function() {
  return {
    size: 0,
    head: null,
    insert: function(val) {
      if (this.head === null) {
        this.head = this.makeNode();
      }
      this.size++;
      var current = this.head;
      while (current.values.length === 2) { // If our current node is full, move down the tree.
        if (val < current.values[0]) {
          current = current.children[0]; // Left.
        } else if (val > current.values[1]) {
          current = current.children[2]; // Right.
        } else {
          current = current.children[1]; // Center.
        }
      }

      // Now we've found a node that exists, but is not full.
      // If we're at a node that's empty, we need to give it children.  This makes several algorithms easier.
      if (current.values.length === 0) {
        this.giveChildren(current);
      }

      // Put the value in, then sort to make sure the values are in order.
      current.values.push(val);
      current.values.sort();
    },
    traverse: function(node, iterator) {

    },
    contains: function() {

    },
    remove: function() {

    },
    makeNode: function() {
      return {
        values: [],
        parent: null,
        children: []
      };
    },
    giveChildren: function(node) {
      for (var i = 0; i < 3; i++) {
        var child = this.makeNode();
        child.parent = node;
        node.children.push(child);
      }
    }
  };
};