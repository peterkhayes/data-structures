describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should not have value or children if not set", function() {
    expect(tree.value).toEqual(undefined);
    expect(tree.children).toEqual(undefined);
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

  // Add more tests here to test the functionality of tree.
});