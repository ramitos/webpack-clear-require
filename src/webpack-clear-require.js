var forEach = require('lodash.foreach');
var isString = require('lodash.isstring');
var keys = require('lodash.keys');


var clear = function(id) {
  delete require.cache[id];
};

var all = function() {
  forEach(keys(require.cache), clear);
};

module.exports = function(name) {
  if (!isString(name)) {
    return all();
  }

  clear(require.resolve(name));
};
