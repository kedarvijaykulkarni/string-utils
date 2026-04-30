const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("repeat", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.repeat("", 3); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.repeat(null, 3); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.repeat(undefined, 3); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should repeat a string the given number of times", function () {
    assert.equal(stringapi.repeat("ha", 3), "hahaha");
  });

  it("should return an empty string when repeated 0 times", function () {
    assert.equal(stringapi.repeat("hello", 0), "");
  });

  it("should return the original string when repeated 1 time", function () {
    assert.equal(stringapi.repeat("hello", 1), "hello");
  });

  it("should handle repeating a single character", function () {
    assert.equal(stringapi.repeat("*", 5), "*****");
  });

  it("should return undefined when n is not a number", function () {
    assert.isUndefined(stringapi.repeat("hello", "3"));
  });
});
