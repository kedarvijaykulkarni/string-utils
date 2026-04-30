const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("startsWith", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.startsWith("", "he"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.startsWith(null, "he"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.startsWith(undefined, "he"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should return true when string starts with the given prefix", function () {
    assert.isTrue(stringapi.startsWith("Hello World", "Hello"));
  });

  it("should return false when string does not start with the given prefix", function () {
    assert.isFalse(stringapi.startsWith("Hello World", "World"));
  });

  it("should be case-sensitive", function () {
    assert.isFalse(stringapi.startsWith("Hello World", "hello"));
  });

  it("should return true for a single character prefix", function () {
    assert.isTrue(stringapi.startsWith("JavaScript", "J"));
  });

  it("should return false for a prefix longer than the string", function () {
    assert.isFalse(stringapi.startsWith("Hi", "Hello"));
  });
});
