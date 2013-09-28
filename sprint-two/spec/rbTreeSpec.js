describe("rbTree", function() {
  var tree;

  beforeEach(function() {
    tree = makeRBTree();
  });

  it("should have properties head, size, and functions insert, contains, remove, and traverse", function() {
    expect(tree.insert).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect(tree.remove).toEqual(jasmine.any(Function));
    expect(tree.traverse).toEqual(jasmine.any(Function));
    expect('head' in tree).toBe(true);
    expect('size' in tree).toBe(true);
  });

  it("should have nodes with properties blackness and value", function() {
    tree.insert(1);
    expect('blackness' in tree.head).toBe(true);
    expect('value' in tree.head).toBe(true);
  });

  it("should insert nodes into the tree and have the size adjust", function() {
    expect(tree.size).toBe(0);
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    expect(tree.size).toBe(3);
  });

  it("should insert a LOT of nodes into the tree with no problems", function() {
    for (var i = 0; i < 10000; i++) {
      tree.insert(i);
    }
    expect(tree.size).toBe(10000);
  });

  it("should insert and find nodes", function() {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    expect(tree.contains(2)).toBe(true);
    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(4)).toBe(false);
  });

  it("should remove easy nodes", function() {
    tree.insert(1);
    expect(tree.contains(1)).toBe(true);
    tree.remove(1);
    expect(tree.contains(1)).toBe(false);
    expect(tree.size).toBe();

    // Once more, with feeling!
    tree.insert(1);
    tree.insert(2);
    tree.remove(1);
    expect(tree.contains(1)).toBe(false);
    expect(tree.contains(2)).toBe(true);
  });


  it("should traverse the tree", function() {
    var list = [4,2,6,1,3,5,7];
    for (var i = 0; i < list.length; i++) {
      tree.insert(list[i]);
    }
    var result = [];
    tree.traverse(tree.head, function(value) {
      result.push(value);
    });
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});