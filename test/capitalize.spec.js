const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("capitalize", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.capitalize(""); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.capitalize(null); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.capitalize(undefined); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should capitalize the first letter of a lowercase string", function () {
    assert.equal(stringapi.capitalize("hello"), "Hello");
  });

  it("should not change a string that is already capitalized", function () {
    assert.equal(stringapi.capitalize("Hello"), "Hello");
  });

  it("should capitalize the first letter and leave the rest unchanged", function () {
    assert.equal(stringapi.capitalize("javaScript"), "JavaScript");
  });

  it("should handle a single character string", function () {
    assert.equal(stringapi.capitalize("a"), "A");
  });

  it("should return false for a number input", function () {
    assert.isUndefined(stringapi.capitalize(123));
  });
});
