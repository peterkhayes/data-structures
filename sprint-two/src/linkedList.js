// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
      if (this.tail) {
        this.tail.next = newNode;
      } else {
        this.head = newNode;
      }
    this.tail = newNode;
  };

  list.removeHead = function(){
    if (list.head) {
      var result = list.head;
      list.head = list.head.next;
      return result.value;
    }
  };

  list.contains = function(target){
    var current = this.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
