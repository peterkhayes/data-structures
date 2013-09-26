describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild', 'removeFromParent', and 'contains', and properties named 'value' and 'parent'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
    expect('parent' in tree).toBe(true);
  });

  it("should not have value, parent, children if not set", function() {
    expect(tree.value).toEqual(undefined);
    expect(tree.parent).toEqual(null);
    expect(tree.children).toEqual([]);
  });

  it("should be able to add children", function() {
    var child1 = makeTree();
    var child2 = makeTree();
    tree.addChild(child1);
    tree.addChild(child2);
    expect(tree.children.length).toEqual(2);
  });

  it("should be able to search subchildren with contains", function() {
    tree.value = 1;
    var child1 = makeTree();
    child1.value = 2;
    var child2 = makeTree();
    child2.value = 3;
    tree.addChild(child1);
    child1.addChild(child2);
    expect(tree.contains(1)).toEqual(true);
    expect(tree.contains(2)).toEqual(true);
    expect(tree.contains(3)).toEqual(true);
    expect(tree.contains(4)).toEqual(false);
    expect(tree.contains(null)).toEqual(false);
    expect(tree.contains(undefined)).toEqual(false);
  });

  it("should be able to reference its parent, and grandparent", function() {
    tree.value = 1;
    var child1 = makeTree();
    var child2 = makeTree();
    tree.addChild(child1);
    child1.addChild(child2);
    expect(child1.parent.value).toEqual(1);
    expect(child2.parent.parent.value).toEqual(1);
  });

  it("should be able to detatch a tree from its parent", function() {
    var child1 = makeTree();
    var child2 = makeTree();
    child2.value = 1;
    tree.addChild(child1);
    child1.addChild(child2);

    child1.removeFromParent();
    
    expect(child1.parent).toEqual(null);
    expect(tree.contains(1)).toEqual(false);
    expect(child1.contains(1)).toEqual(true);
  });

  var generateFullTree = function() {
    var head = makeTree();
    var c1 = makeTree();
    var c2 = makeTree();
    var g1 = makeTree();
    var g2 = makeTree();
    var g3 = makeTree();
    var g4 = makeTree();

    head.value = 1;
    c1.value = 2;
    c2.value = 3;
    g1.value = 4;
    g2.value = 5;
    g3.value = 6;
    g4.value = 7;

    head.addChild(c1);
    head.addChild(c2);
    c1.addChild(g1);
    c1.addChild(g2);
    c2.addChild(g3);
    c2.addChild(g4);

    return head;
  };

  it("should be able to traverse, depth first", function() {
    tree = generateFullTree();

    var result = [];
    tree.DFTraverse(function (value) {
      result.push(value);
    });

    expect(result).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  it("should be able to traverse, breadth first", function() {
    tree = generateFullTree();

    var result = [];
    tree.BFTraverse(function (value) {
      result.push(value);
    });

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  // Add more tests here to test the functionality of tree.
});