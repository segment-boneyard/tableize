
/**
 * Expose `tableize()`.
 */

module.exports = tableize;

/**
 * Tableize `obj` by flattening and normalizing the keys.
 *
 * @param {Object} obj
 * @return {Object}
 * @api public
 */

function tableize(obj) {
  var ret = {};
  type(ret, obj, '');
  return ret;
}

/**
 * Type `obj` recursively.
 *
 * @param {Object} schema
 * @param {Object} obj
 * @param {String} prefix
 * @api private
 */

function type(schema, obj, prefix) {
  Object.keys(obj).forEach(function(key){
    var val = obj[key];

    if (isObject(val)) {
      type(schema, val, normalize(key) + '.');
    } else {
      schema[prefix + normalize(key)] = val;
    }
  });
}

/**
 * Check if `val` is an object.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isObject(val) {
  return '[object Object]' == Object.prototype.toString.call(val);
}

/**
 * Normalize `key`.
 *
 * @param {String} key
 * @return {String}
 * @api private
 */

function normalize(key) {
  return key
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_');
}
