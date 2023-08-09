const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("Check isString method", function () {
  it("should check the given string is a empty string", function () {
    let str = "";
    const throwingFunction = () => {
      stringapi.isString(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is not a null!", function () {
    let str = null;
    const throwingFunction = () => {
      stringapi.isString(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is not a undefined!", function () {
    let str = undefined;
    const throwingFunction = () => {
      stringapi.isString(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given string is a valid string", function () {
    let str = "JavaScript";
    assert.equal(
      stringapi.isString(str),
      true,
      "given string is a valid string!"
    );
  });

  it("should check the given string is a valid string", function () {
    let str = "1234";
    assert.equal(
      stringapi.isString(str),
      true,
      "given string is a valid string!"
    );
  });

  it("should check the given string is not a string", function () {
    let str = 123456;
    assert.equal(
      stringapi.isString(str),
      false,
      "given string is not a string!"
    );
  });

  it("should check the given string is not a string", function () {
    let str = true;
    assert.equal(
      stringapi.isString(str),
      false,
      "given string is not a string!"
    );
  });

  it("should check the given string is not a string", function () {
    let str = {};
    assert.equal(
      stringapi.isString(str),
      false,
      "given string is not a string!"
    );
  });

  it("should check the given string is not a string", function () {
    let str = [];
    assert.equal(
      stringapi.isString(str),
      false,
      "given string is not a string!"
    );
  });
});
