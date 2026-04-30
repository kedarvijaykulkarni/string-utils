const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("trim / trimStart / trimEnd", function () {
  it("trim: should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.trim(""); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("trim: should throw an error for null", function () {
    const throwingFunction = () => { stringapi.trim(null); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("trim: should remove leading and trailing whitespace", function () {
    assert.equal(stringapi.trim("  hello  "), "hello");
  });

  it("trim: should not modify a string with no whitespace", function () {
    assert.equal(stringapi.trim("hello"), "hello");
  });

  it("trim: should trim tabs and newlines", function () {
    assert.equal(stringapi.trim("\t hello \n"), "hello");
  });

  it("trimStart: should remove only leading whitespace", function () {
    assert.equal(stringapi.trimStart("  hello  "), "hello  ");
  });

  it("trimStart: should throw an error for null", function () {
    const throwingFunction = () => { stringapi.trimStart(null); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("trimEnd: should remove only trailing whitespace", function () {
    assert.equal(stringapi.trimEnd("  hello  "), "  hello");
  });

  it("trimEnd: should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.trimEnd(undefined); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });
});
