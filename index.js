/*!
 * string-pattern-object
 * Copyright(c) 2016 martinerko <martinerko@gmail.com>
 * MIT Licensed
 */

/**
 * Constants
 */

var PROPS_PATTERN = /\$\{[a-zA-Z]+\}/g;

/**
 * Compares indexes collected from source file with those from db and returns
 * map of those which should be removed.
 *
 * @param  {String} text
 * @param  {String} pattern
 * @return {Object}
 */

function stringPattern2obj(text, pattern) {
  var props = pattern.match(PROPS_PATTERN);
  var r = pattern.split(PROPS_PATTERN).join('(.+)');
  var values = text.match(r) || [];

  return props.reduce(function(obj, key, i) {
    return obj[key.replace(/^\$\{/, '').replace(/\}$/, '')] = values[i + 1], obj;
  }, {});
}

module.exports = stringPattern2obj;
