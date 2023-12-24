const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("Check isValid method", function () {
  it("should check the given string is a empty string", function () {
    let str = "";
    const throwingFunction = () => {
      stringapi.isValid(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is not a null!", function () {
    let str = null;
    const throwingFunction = () => {
      stringapi.isValid(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is not a undefined!", function () {
    let str = undefined;
    const throwingFunction = () => {
      stringapi.isValid(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is valid or not!", function () {
    let str = "JavaScript";
    assert.equal(stringapi.isValid(str), true, "given value is valid!");
  });

  it("should check the given value is valid or not!", function () {
    let str = 123456;
    assert.equal(stringapi.isValid(str), true, "given value is valid!");
  });

  it("should check the given value is valid or not!", function () {
    let str = true;
    assert.equal(stringapi.isValid(str), true, "given value is valid!");
  });

  it("should check the given value is valid or not!", function () {
    let str = {};
    assert.equal(stringapi.isValid(str), true, "given value is valid!");
  });

  it("should check the given value is valid or not!", function () {
    let str = [];
    assert.equal(stringapi.isValid(str), true, "given value is valid!");
  });
});
