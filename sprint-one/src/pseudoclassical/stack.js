var Stack = function() {
  this.storage = {};
  this.len = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.len] = value;
  this.len++;
};

Stack.prototype.pop = function() {
  if (this.len) {
    var value = this.storage[(this.len - 1)];
    this.storage[this.len - 1] = undefined;
    this.len--;
    return value;
  }
};
Stack.prototype.size = function() {
  return this.len;
};