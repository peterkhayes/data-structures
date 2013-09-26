describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.children).toEqual(jasmine.any(Function));
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
    var list = [11, 9, 13, 7, 15, 17, 19, 3, 5, 1];
    for (var i = 0; i < list.length; i++) {
      binarySearchTree.insert(list[i]);
    }
    var count = 0;
    binarySearchTree.depthFirstLog(function(value) {
      if (value % 3 === 0) count++;
    });
    expect(count).toEqual(3);
  });
  // add more tests here to test the functionality of binarySearchTree
});