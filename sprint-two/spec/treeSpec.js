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

  // Add more tests here to test the functionality of tree.
});