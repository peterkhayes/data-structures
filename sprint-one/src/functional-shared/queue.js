var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};
  instance.storage = {};
  instance.firstIndex = 0;
  instance.lastIndex = 0;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.lastIndex] = value;
	this.lastIndex++;
};
queueMethods.dequeue = function () {
	if(this.lastIndex - this.firstIndex) {
		var value = this.storage[this.firstIndex];
		this.storage[this.firstIndex] = undefined;
		this.firstIndex++;
		return value;
	}
};
queueMethods.size = function () {
	return (this.lastIndex - this.firstIndex);
};