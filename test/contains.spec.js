const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("contains", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.contains("", "lo"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.contains(null, "lo"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.contains(undefined, "lo"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should return true when string contains the substring", function () {
    assert.isTrue(stringapi.contains("Hello World", "World"));
  });

  it("should return false when string does not contain the substring", function () {
    assert.isFalse(stringapi.contains("Hello World", "xyz"));
  });

  it("should be case-sensitive", function () {
    assert.isFalse(stringapi.contains("Hello World", "world"));
  });

  it("should return true for a single character substring", function () {
    assert.isTrue(stringapi.contains("JavaScript", "S"));
  });

  it("should return true when substring is found at the start", function () {
    assert.isTrue(stringapi.contains("JavaScript", "Java"));
  });

  it("should return true when substring is found at the end", function () {
    assert.isTrue(stringapi.contains("JavaScript", "Script"));
  });
});
