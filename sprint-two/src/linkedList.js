// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
      } else {
        this.head = newNode;
      }
    this.tail = newNode;
  };

  list.addToHead = function(value) {
    var newNode = makeNode(value);
      if (this.head) {
        this.head.prev = newNode;
        newNode.next = this.head;
      } else {
        this.tail = newNode;
      }
    this.head = newNode;
  };

  list.removeTail = function() {
    if (list.tail) {
      var result = list.tail;
      list.tail = list.tail.prev;
      return result.value;
    }
    return undefined;
  };

  list.removeHead = function(){
    if (list.head) {
      var result = list.head;
      list.head = list.head.next;
      return result.value;
    }
    return undefined;
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
  node.prev = null;

  return node;
};
