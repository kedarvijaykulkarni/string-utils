const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("Check isNil method", function () {
  it("should check the given string is a empty string", function () {
    let str = "";
    const throwingFunction = () => {
      stringapi.isNil(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is not a null!", function () {
    let str = null;
    assert.equal(stringapi.isNil(str), true, "given value is a null");
  });

  it("should check the given value is not a undefined!", function () {
    let str = undefined;
    assert.equal(stringapi.isNil(str), true, "given value is a undefined");
  });

  it("should check the given string is a valid string", function () {
    let str = "JavaScript";
    assert.equal(stringapi.isNil(str), false, "given value is not a Nil!");
  });

  it("should check the given string is not a string", function () {
    let str = 123456;
    assert.equal(stringapi.isNil(str), false, "given number is not a Nil!");
  });

  it("should check the given string is not a string", function () {
    let str = true;
    assert.equal(stringapi.isNil(str), false, "given boolen is not a Nil!");
  });

  it("should check the given string is not a string", function () {
    let str = {};
    assert.equal(stringapi.isNil(str), false, "given object is not a Nil!");
  });

  it("should check the given string is not a string", function () {
    let str = [];
    assert.equal(stringapi.isNil(str), false, "given array is not a Nil!");
  });
});
