var makeRBTree = function () {
  return {
    head: null,
    size: 0,
    insert: function (value) { // The standard BST insert.
      if (this.size) { // Tree already contains nodes.
        var toInsert = this.makeNode(value);
        var currentNode = this.head;
        while (true) { // Until we find the right place in the tree...
          var direction = (toInsert.value > currentNode.value ? "right" : "left");
            if (currentNode[direction]) {
              currentNode = currentNode[direction];
            } else { // Go left.
              toInsert.parent = currentNode;
              currentNode[direction] = toInsert;
              break;
            }
        }
        this.fix(toInsert);
      } else { // Tree does not contain nodes.
        this.head = this.makeNode(value);
      }
      this.size++;
    },
    fix: function (node) { // After inserting as in a standard BST, fix any problems.
      
    },
    contains: function (target) {
      var result = false;
      this.traverse(this.head, function (value) {
        if (value === target) {
          result = true;
        }
      });
      return result;
    },
    remove: function () {

    },
    traverse: function (node, iterator) { // Uses in-order; we are a BST, after all.
      if (node.left) {
        this.traverse(node.left, iterator);
      }
      iterator(node.value);
      if (node.right) {
        this.traverse(node.right, iterator);
      }
    },
    rotateLeft: function(top, lower) {
      if (bottom === top.right) {
        var temp = bottom.left;

        top.right = temp;
        temp.parent = top;
        bottom.left = top;
        top.parent = bottom;
      } else {
        console.log("unsuitable for rotate right.");
      }
    },
    rotateRight: function(parent, child) {
      if (bottom === top.left) {
        var temp = bottom.right;

        top.left = temp;
        temp.parent = top;
        bottom.right = top;
        top.parent = bottom;
      } else {
        console.log("unsuitable for rotate right.");
      }
    },
    makeNode:function (v) { // parent, value.
      return {
        red: true,
        value: (v === undefined ? null : v),
        parent: null,
        left: null,
        right: null,
        sibling: function() {
          if (this.parent) {
            return (this === this.parent.left ? this.parent.right : this.parent.left);
          } else {
            return null;
          }
        },
        uncle: function() {
          if (this.parent) {
            return this.parent.sibling();
          } else {
            return null;
          }
        }
      };
    }
  };
};


