var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.firstIndex = 0;
  instance.lastIndex = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.lastIndex++] = value;
};
queueMethods.dequeue = function () {
  if(this.lastIndex - this.firstIndex) {
    var value = this.storage[this.firstIndex];
    this.storage[this.firstIndex] = undefined;
    this.firstIndex++;
    return value;
  }
  return undefined;
};
queueMethods.size = function () {
  return (this.lastIndex - this.firstIndex);
};