const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("countWords", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.countWords(""); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.countWords(null); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.countWords(undefined); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should count words in a normal sentence", function () {
    assert.equal(stringapi.countWords("Hello World"), 2);
  });

  it("should count a single word", function () {
    assert.equal(stringapi.countWords("JavaScript"), 1);
  });

  it("should handle multiple spaces between words", function () {
    assert.equal(stringapi.countWords("Hello   World"), 2);
  });

  it("should handle leading and trailing spaces", function () {
    assert.equal(stringapi.countWords("  Hello World  "), 2);
  });

  it("should count words in a longer sentence", function () {
    assert.equal(stringapi.countWords("The quick brown fox jumps over the lazy dog"), 9);
  });

  it("should return undefined for a number input", function () {
    assert.isUndefined(stringapi.countWords(123));
  });
});
