'use strict';
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-flexbox-unboxer', function (opts) {

  return function (css) {
    css.walkDecls('display', function (decl) {
      if (decl.value.indexOf('box') > -1) {
        decl.remove();
      }
    });
  };

});
