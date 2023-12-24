const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("isNumber", function () {
  it("should return true for an empty object", function () {
    assert.isFalse(stringapi.isNumber({}));
  });

  it("should return true for a non-empty object", function () {
    assert.isFalse(stringapi.isNumber({ key: "value" }));
  });

  it("should return false for a string", function () {
    assert.isFalse(stringapi.isNumber("JavaScript"));
  });

  it("should return false for a number", function () {
    assert.isTrue(stringapi.isNumber(123456));
  });

  it("should return false for a undefined", function () {
    assert.isFalse(stringapi.isNumber(undefined));
  });

  it("should return true for a null", function () {
    assert.isFalse(stringapi.isNumber(null));
  });

  it("should return false for a empty string", function () {
    assert.isFalse(stringapi.isNumber(""));
  });


  it("should return false for a truthy number", function () {
    assert.isTrue(stringapi.isNumber(1));
  });

  it("should return false for a False number", function () {
    assert.isTrue(stringapi.isNumber(0));
  });

});
