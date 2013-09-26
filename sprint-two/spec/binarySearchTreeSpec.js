describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should return undefined when looking for nodes that have not been added", function() {
    expect(binarySearchTree.contains(0)).toEqual(false);
  });

  it("should find nodes that have been added", function() {
    var list = [11, 9, 13, 7, 15, 17, 19, 3, 5, 1];
    for (var i = 0; i < list.length; i++) {
      binarySearchTree.insert(list[i]);
    }
    for (var j = 0; j < 20; j++) {
      var isOdd = (j % 2 === 1);
      expect(binarySearchTree.contains(j)).toEqual(isOdd);
    }
  });

  it("should execute a depth-first log with callback function", function() {
    binarySearchTree.value = 4;
    var list = [2,6,1,3,5,7];
    for (var i = 0; i < list.length; i++) {
      binarySearchTree.insert(list[i]);
    }
    var result = [];
    binarySearchTree.depthFirstLog(function(value) {
      result.push(value);
    });
    expect(result).toEqual([4, 2, 1, 3, 6, 5, 7]);
  });

  it("should execute a breadth-first log with callback function", function() {
    binarySearchTree.value = 4;
    var list = [2,6,1,3,5,7];
    for (var i = 0; i < list.length; i++) {
      binarySearchTree.insert(list[i]);
    }
    var result = [];
    binarySearchTree.breadthFirstLog(function(value) {
      result.push(value);
    });
    expect(result).toEqual([4,2,6,1,3,5,7]);
  });
  // add more tests here to test the functionality of binarySearchTree
});