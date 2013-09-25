describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should be able to contain strings", function() {
    set.add("hi");
    set.add("hello");
    expect(set.contains("hi")).toEqual(true);
    expect(set.contains("hello")).toEqual(true);
    expect(set.contains("yo")).toEqual(false);
  });
  
  it("should be able to remove elements", function() {
    set.add("hi");
    expect(set.contains("hi")).toEqual(true);
    set.remove("hi");
    expect(set.contains("hi")).toEqual(false);
  });

  it("should be ok with removing from an empty set", function() {
    set.remove();
    set.remove();
  });

  it("should not count double-adding", function() {
    set.add("twice");
    set.add("twice");
    expect(set.contains("twice")).toEqual(true);
    set.remove("twice");
    expect(set.contains("twice")).toEqual(false);
  });
});