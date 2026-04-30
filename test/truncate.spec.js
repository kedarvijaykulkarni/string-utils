const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("truncate", function () {
  it("should throw an error for empty string", function () {
    const throwingFunction = () => { stringapi.truncate("", 5); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for null", function () {
    const throwingFunction = () => { stringapi.truncate(null, 5); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should throw an error for undefined", function () {
    const throwingFunction = () => { stringapi.truncate(undefined, 5); };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should return the original string if it is within maxLength", function () {
    assert.equal(stringapi.truncate("Hello", 10), "Hello");
  });

  it("should truncate and append default suffix '...'", function () {
    assert.equal(stringapi.truncate("Hello, World!", 8), "Hello...");
  });

  it("should truncate and append a custom suffix", function () {
    assert.equal(stringapi.truncate("Hello, World!", 8, "~"), "Hello, ~");
  });

  it("should return a string of exactly maxLength", function () {
    const result = stringapi.truncate("Hello, World!", 8);
    assert.equal(result.length, 8);
  });

  it("should return undefined for a number as first argument", function () {
    assert.isUndefined(stringapi.truncate(123, 5));
  });
});
