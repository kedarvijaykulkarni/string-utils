const stringapi = require("../src/index");
const assert = require("chai").assert;
const { expect } = require("chai");

describe("Check string is isPalindrome or not", function () {
  it("should check the given string is empty string", function () {
    let str = "";
    const throwingFunction = () => {
      stringapi.isPalindrome(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is not a null!", function () {
    let str = null;
    const throwingFunction = () => {
      stringapi.isPalindrome(str);
    };
    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given value is not a undefined!", function () {
    let str = undefined;
    const throwingFunction = () => {
      stringapi.isPalindrome(str);
    };

    expect(throwingFunction).to.throw(Error, "Please provided a valid input!");
  });

  it("should check the given string is not a palindrome string", function () {
    let str = "JavaScript";
    assert.equal(
      stringapi.isPalindrome(str),
      false,
      "given string is not a palindrome string!"
    );
  });

  it("should check the given string is a palindrome string!", function () {
    let str = "madam";
    assert.equal(
      stringapi.isPalindrome(str),
      true,
      "given string is a palindrome string!"
    );
  });

  it("should check the given number is a palindrome number!", function () {
    let str = 121;
    assert.equal(
      stringapi.isPalindrome(str),
      true,
      "given string is a palindrome number!"
    );
  });

  it("should check the given number is not a palindrome number!", function () {
    let str = 1234;
    assert.equal(
      stringapi.isPalindrome(str),
      false,
      "given string is not a palindrome number!"
    );
  });

  it("should check the given object is not a valid input!", function () {
    let str = {};
    assert.equal(
      stringapi.isPalindrome(str),
      false,
      "given object is not a valid input!"
    );
  });

  it("should check the given array is not a valid input!", function () {
    let str = [];
    assert.equal(
      stringapi.isPalindrome(str),
      false,
      "given object is not a valid input!"
    );
  });
});
