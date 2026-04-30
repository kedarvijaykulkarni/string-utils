const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("toTitleCase", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.toTitleCase(""); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.toTitleCase(null); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.toTitleCase(undefined); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should convert a lowercase sentence to title case", function () {
    assert.equal(stringapi.toTitleCase("hello world"), "Hello World");
  });

  it("should convert an uppercase sentence to title case", function () {
    assert.equal(stringapi.toTitleCase("HELLO WORLD"), "Hello World");
  });

  it("should handle a single word", function () {
    assert.equal(stringapi.toTitleCase("javascript"), "Javascript");
  });

  it("should handle mixed case words", function () {
    assert.equal(stringapi.toTitleCase("the quick brown FOX"), "The Quick Brown Fox");
  });

  it("should return undefined for a number input", function () {
    assert.isUndefined(stringapi.toTitleCase(123));
  });
});
