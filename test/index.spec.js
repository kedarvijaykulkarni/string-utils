const stringapi = require('../src/index');
const assert = require('chai').assert;

describe('Check string method', function () {
  it('should check the given value is string', function () {
    let str = '';
    assert.equal(
      stringapi.isString(str),
      true,
      'given value is string'
    );
  });

  it('should check the given value is palindrome', function () {
    let str = 'madam';
    assert.equal(
      stringapi.isPalindrome(str),
      true,
      'given value is palindrome'
    );
  });

});
