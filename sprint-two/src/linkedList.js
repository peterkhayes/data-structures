// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
