const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("reverseString", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.reverseString(""); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.reverseString(null); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.reverseString(undefined); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should reverse a regular string", function () {
    assert.equal(stringapi.reverseString("hello"), "olleh");
  });

  it("should reverse a palindrome and return the same string", function () {
    assert.equal(stringapi.reverseString("madam"), "madam");
  });

  it("should reverse a single character string", function () {
    assert.equal(stringapi.reverseString("a"), "a");
  });

  it("should reverse a string with spaces", function () {
    assert.equal(stringapi.reverseString("Hello World"), "dlroW olleH");
  });

  it("should return undefined for a number input", function () {
    assert.isUndefined(stringapi.reverseString(123));
  });
});
