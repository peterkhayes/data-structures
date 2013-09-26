describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });
  /**
  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should be able to insert, retrieve, and remove items", function() {
    hashTable.insert("a", 1);
    hashTable.insert("b", 2);
    expect(hashTable.retrieve("a")).toEqual(1);
    expect(hashTable.retrieve("b")).toEqual(2);
    hashTable.remove("b");
    expect(hashTable.retrieve("a")).toEqual(1);
    expect(hashTable.retrieve("b")).toEqual(undefined);
  });
  */

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  // add more tests!
});
