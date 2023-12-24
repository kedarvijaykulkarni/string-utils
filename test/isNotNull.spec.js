const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("Check isNotNull method", function () {
  it("should check the given string is a empty string", function () {
    let str = "";
    const throwingFunction = () => {
      stringapi.isNotNull(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is not a null!", function () {
    let str = null;
    assert.equal(stringapi.isNotNull(str), false, "given value is a null");
  });

  it("should check the given value is not a undefined!", function () {
    let str = undefined;
    assert.equal(stringapi.isNotNull(str), false, "given value is a null");
  });

  it("should check the given string is a valid string", function () {
    let str = "JavaScript";
    assert.equal(stringapi.isNotNull(str), true, "given value is not null!");
  });

  it("should check the given string is not a string", function () {
    let str = 123456;
    assert.equal(stringapi.isNotNull(str), true, "given number is not null!");
  });

  it("should check the given string is not a string", function () {
    let str = true;
    assert.equal(stringapi.isNotNull(str), true, "given boolen is not null!");
  });

  it("should check the given string is not a string", function () {
    let str = {};
    assert.equal(stringapi.isNotNull(str), true, "given object is not null!");
  });

  it("should check the given string is not a string", function () {
    let str = [];
    assert.equal(stringapi.isNotNull(str), true, "given array is not null!");
  });
});
