// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (this.head) {
      newNode.next = this.tail;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function(){
    var result = this.head;
    if (result) {
      var current = this.tail;
      while (current.next && current.next !== this.head) {
        current = current.next;
      }
      this.head = current;
      this.head.next = null;
      return result.value;
    } else {
      return null;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
