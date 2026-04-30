const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("hasProperty", function () {
  it("should throw an error for empty string key", function () {
    const throwingFunction = () => { stringapi.hasProperty({ a: 1 }, ""); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null key", function () {
    const throwingFunction = () => { stringapi.hasProperty({ a: 1 }, null); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined key", function () {
    const throwingFunction = () => { stringapi.hasProperty({ a: 1 }, undefined); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should return true when the object has the given property", function () {
    assert.isTrue(stringapi.hasProperty({ name: "Alice", age: 30 }, "name"));
  });

  it("should return false when the object does not have the given property", function () {
    assert.isFalse(stringapi.hasProperty({ name: "Alice" }, "age"));
  });

  it("should return false for inherited properties", function () {
    const obj = Object.create({ inherited: true });
    assert.isFalse(stringapi.hasProperty(obj, "inherited"));
  });

  it("should return true for a property with a falsy value", function () {
    assert.isTrue(stringapi.hasProperty({ count: 0 }, "count"));
  });

  it("should return true for a nested object key at top level", function () {
    assert.isTrue(stringapi.hasProperty({ a: { b: 1 } }, "a"));
  });
});
