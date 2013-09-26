var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);
  if (slot) {
    slot.push([k,v]); // slot stores two-object arrays, which are key-value pairs.  using objects is cheating?
  } else {
    this._storage.set(i, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);
  for (var j = 0; j < slot.length; j++) {
    if (slot[j][0] === k) { // again, slot[a][0] is the key in the a'th place of slot, slot[a][1] is the value for that key.
      return slot[j][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);
  for (var j = 0; j < slot.length; j++) {
    if (slot[j][0] === k) {
      console.log(slot);
      slot.splice(j, 1);
    }
  }

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
