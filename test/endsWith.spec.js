const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("endsWith", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.endsWith("", "ld"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.endsWith(null, "ld"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.endsWith(undefined, "ld"); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should return true when string ends with the given suffix", function () {
    assert.isTrue(stringapi.endsWith("Hello World", "World"));
  });

  it("should return false when string does not end with the given suffix", function () {
    assert.isFalse(stringapi.endsWith("Hello World", "Hello"));
  });

  it("should be case-sensitive", function () {
    assert.isFalse(stringapi.endsWith("Hello World", "world"));
  });

  it("should return true for a single character suffix", function () {
    assert.isTrue(stringapi.endsWith("JavaScript", "t"));
  });

  it("should return false for a suffix longer than the string", function () {
    assert.isFalse(stringapi.endsWith("Hi", "Hello World"));
  });
});
