describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'addToHead', 'removeTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.addToHead).toEqual(jasmine.any(Function));
    expect(linkedList.removeTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should add objects", function() {
    linkedList.addToTail(0);
    linkedList.addToHead("hello");
  });

  it("should add and remove objects", function () {
    // From the tail side.
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    var results = [];
    for (var i = 0; i < 4; i++) {
      results.push(linkedList.removeHead());
    }
    expect(results).toEqual([1, 2, 3, 4]);

    // From the head side.
    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);
    linkedList.addToHead(4);
    results = [];
    for (var j = 0; j < 4; j++) {
      results.push(linkedList.removeTail());
    }
    expect(results).toEqual([1, 2, 3, 4]);
  });

  it("should handle removal from an empty list and continue regular functioning", function() {
    var undef = linkedList.removeHead();
    expect(undef).toEqual(null);
    undef = linkedList.removeTail();
    expect(undef).toEqual(null);
    linkedList.addToTail(1);
    var def = linkedList.removeHead();
    expect(def).toEqual(1);
  });

  it("should be able to use 'contains'", function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    expect(linkedList.contains(1)).toEqual(true);
    expect(linkedList.contains(4)).toEqual(true);
    expect(linkedList.contains(5)).toEqual(false);
    expect(linkedList.contains(undefined)).toEqual(false);
    expect(linkedList.contains(null)).toEqual(false);
  });

  it("should be able to use 'contains' on an empty list", function() {
    expect(linkedList.contains(0)).toEqual(false);
    expect(linkedList.contains(undefined)).toEqual(false);
    expect(linkedList.contains(null)).toEqual(false);
  });

  it ("should support removal and adding from both sides together", function() {
    linkedList.addToTail(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);
    expect(linkedList.removeTail()).toEqual(1);
    expect(linkedList.removeTail()).toEqual(2);
    expect(linkedList.removeTail()).toEqual(3);
  });

  // add more tests here to test the functionality of linkedList
});