const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("stripHtml", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.stripHtml(""); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.stripHtml(null); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.stripHtml(undefined); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should strip a simple HTML tag", function () {
    assert.equal(stringapi.stripHtml("<p>Hello</p>"), "Hello");
  });

  it("should strip multiple HTML tags", function () {
    assert.equal(stringapi.stripHtml("<h1>Title</h1><p>Body</p>"), "TitleBody");
  });

  it("should strip tags with attributes", function () {
    assert.equal(stringapi.stripHtml('<a href="https://example.com">Link</a>'), "Link");
  });

  it("should return plain text unchanged", function () {
    assert.equal(stringapi.stripHtml("Hello World"), "Hello World");
  });

  it("should strip self-closing tags", function () {
    assert.equal(stringapi.stripHtml("Hello<br/>World"), "HelloWorld");
  });

  it("should return undefined for a number input", function () {
    assert.isUndefined(stringapi.stripHtml(123));
  });
});
