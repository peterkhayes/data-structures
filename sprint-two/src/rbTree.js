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
        this.head.red = false;
      }
      this.size++;
    },
    fix: function (node) { // After inserting as in a standard BST, fix any problems.
      var parent = node.parent;
      if (parent && node.red && parent.red) {
        var uncle = node.uncle();
        var gramps = node.parent.parent;

        if (uncle && uncle.red) {
          parent.red = !parent.red;
          uncle.red = !uncle.red;
          gramps.red = !gramps.red;
          this.fix(gramps);
        } else if (uncle && uncle.direction === node.direction) {
          this.rotate(node);
          this.fix(parent);
        } else {
          parent.red = !parent.red;
          gramps.red = !gramps.red;
          this.rotate(parent);
        }
      }
    },
    contains: function (target) {
      debugger;
      var result = false;
      this.traverse(this.head, function (value) {
        console.log("value: " + value);
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
    rotate: function(node) {
      var parent = node.parent;
      var temp;
      if (node === node.parent.right) {
        // Rotate right.
        temp = node.left;

        parent.right = temp;
        node.left = parent;
      } else {
        // Rotate left.
        temp = node.right;

        parent.left = temp;
        node.right = parent;
      }
      parent.parent = node;
      if (temp) {
        temp.parent = parent;
      }

      if (this.head.parent) {
        this.head = this.head.parent;
      }
    },
    predecesor: function(node) {
      if (node.direction)
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
        },
        direction: function() {
          if (this.parent === null) {
            return null;
          } else if (this.parent.left === this) {
            return "left";
          } else {
            return "right";
          }
        }
      };
    }
  };
};


