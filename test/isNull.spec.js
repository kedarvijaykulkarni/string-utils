const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("Check isNull method", function () {
  it("should check the given string is a empty string", function () {
    let str = "";
    const throwingFunction = () => {
      stringapi.isNull(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is not a null!", function () {
    let str = null;
    assert.equal(stringapi.isNull(str), true, "given value is a null");
  });

  it("should check the given value is not a undefined!", function () {
    let str = undefined;
    const throwingFunction = () => {
      stringapi.isNull(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given string is a valid string", function () {
    let str = "JavaScript";
    assert.equal(stringapi.isNull(str), false, "given value is not a Nil!");
  });

  it("should check the given string is not a string", function () {
    let str = 123456;
    assert.equal(stringapi.isNull(str), false, "given number is not a Nil!");
  });

  it("should check the given string is not a string", function () {
    let str = true;
    assert.equal(stringapi.isNull(str), false, "given boolen is not a Nil!");
  });

  it("should check the given string is not a string", function () {
    let str = {};
    assert.equal(stringapi.isNull(str), false, "given object is not a Nil!");
  });

  it("should check the given string is not a string", function () {
    let str = [];
    assert.equal(stringapi.isNull(str), false, "given array is not a Nil!");
  });
});
