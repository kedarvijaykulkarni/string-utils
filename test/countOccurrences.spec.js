const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("countOccurrences", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.countOccurrences("", "a"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.countOccurrences(null, "a"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.countOccurrences(undefined, "a"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should return 0 for an empty substring", function () {
    assert.equal(stringapi.countOccurrences("hello", ""), 0);
  });

  it("should count a single occurrence", function () {
    assert.equal(stringapi.countOccurrences("hello world", "world"), 1);
  });

  it("should count multiple occurrences", function () {
    assert.equal(stringapi.countOccurrences("banana", "an"), 2);
  });

  it("should return 0 when substring is not found", function () {
    assert.equal(stringapi.countOccurrences("hello", "xyz"), 0);
  });

  it("should be case-sensitive", function () {
    assert.equal(stringapi.countOccurrences("Hello hello HELLO", "hello"), 1);
  });

  it("should count non-overlapping occurrences", function () {
    assert.equal(stringapi.countOccurrences("aaa", "aa"), 1);
  });
});
