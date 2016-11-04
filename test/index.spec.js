/*!
 * string-pattern-object
 * Copyright(c) 2016 martinerko <martinerko@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var assert = require('assert');
var stringPattern2obj = require('..');

describe('string pattern to object module', function() {
  var obj;
  before(function() {
    obj = stringPattern2obj('https://admin:Password123@google.com.au', 'https://${user}:${password}@${website}');
  });

  it('should return an object with three properties', function() {
    assert.equal(3, Object.keys(obj).length);
  });

  it('should return an object with specific properties', function() {
    assert.deepEqual(['user', 'password', 'website'].sort(), Object.keys(obj).sort());
  });

  it('should return an object with correct values', function() {
    assert.equal('admin', obj.user);
    assert.equal('Password123', obj.password);
    assert.equal('google.com.au', obj.website);
  });
});
