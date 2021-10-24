const stringapi = require('../lib/index');
const assert = require('chai').assert;

describe('Check string method', function () {
  it('should check the given value is string', function () {
    const str = '';
    assert.equal(
      stringapi.isString(str),
      true,
      'given value is string'
    );
  });
});
