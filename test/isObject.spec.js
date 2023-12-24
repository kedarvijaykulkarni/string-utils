const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("isObject", function () {
  it("should return true for an empty object", function () {
    assert.isTrue(stringapi.isObject({}));
  });

  it("should return true for a non-empty object", function () {
    assert.isTrue(stringapi.isObject({ key: "value" }));
  });

  it("should return false for a string", function () {
    assert.isFalse(stringapi.isObject("JavaScript"));
  });

  it("should return false for a number", function () {
    assert.isFalse(stringapi.isObject(123456));
  });

  it("should return false for a undefined", function () {
    assert.isFalse(stringapi.isObject(undefined));
  });

  it("should return true for a null", function () {
    assert.isTrue(stringapi.isObject(null));
  });

  it("should return false for a empty string", function () {
    assert.isFalse(stringapi.isObject(""));
  });


  it("should return false for a truthy number", function () {
    assert.isFalse(stringapi.isObject(1));
  });

  it("should return false for a False number", function () {
    assert.isFalse(stringapi.isObject(0));
  });


});
