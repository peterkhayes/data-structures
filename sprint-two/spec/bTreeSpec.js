describe("bTree", function() {
  it("should have methods 'insert', 'traverse', 'contains', and 'remove', and property 'size'", function() {
    var b = makeBTree();
    expect(b.insert).toEqual(jasmine.any(Function));
    expect(b.contains).toEqual(jasmine.any(Function));
    expect(b.remove).toEqual(jasmine.any(Function));
    expect('size' in b).toEqual(true);
  });

  it("should insert items", function() {
    var b = makeBTree();
    b.insert(5);
    b.insert(3);
    b.insert(7);
    b.insert(4);
    b.insert(1);
    b.insert(10);
    b.insert(0);
    b.insert(2);
    expect(b.size).toEqual(8);
  });

  it('Should traverse the tree', function() {
    var b = makeBTree();
    b.insert(5);
    b.insert(3);
    b.insert(7);
    b.insert(4);
    b.insert(1);
    b.insert(10);
    b.insert(0);
    b.insert(2);

    var result = [];
    b.traverse(b.head, function (value) {
      result.push(value);
    });
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 7, 10]);
  });

  it("should find items", function() {
    var b = makeBTree();
    b.insert(5);
    expect(b.contains(5)).toEqual(true);
    expect(b.contains(1)).toEqual(false);

    b.insert(3);
    b.insert(7);
    b.insert(4);
    b.insert(1);
    b.insert(10);
    b.insert(0);
    b.insert(2);
    expect(b.contains(3)).toEqual(true);
    expect(b.contains(10)).toEqual(true);
    expect(b.contains(11)).toEqual(false);
    expect(b.contains(6)).toEqual(false);
  });

  it("should handle removing nonexistent elements", function() {
    var b = makeBTree();
    b.remove(5);
    b.insert(5);
    b.insert(2);
    b.insert(4);
    b.insert(6);

    b.remove(1);
    b.remove(3);
  });

  it("should remove items", function() {
    var b = makeBTree();
    b.insert(5);
    b.remove(5);
    expect(b.contains(5)).toEqual(false);

    b.insert(5);
    b.insert(3);
    b.insert(7);
    b.insert(4);
    b.insert(1);
    b.insert(10);
    b.insert(0);
    b.insert(2);

    b.remove(0);
    b.remove(4);
    b.remove(5);


    expect(b.contains(5)).toEqual(false);
    expect(b.contains(4)).toEqual(false);
    expect(b.contains(0)).toEqual(false);
  });
});