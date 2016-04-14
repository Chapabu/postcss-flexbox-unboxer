'use strict';
var postcss = require('postcss');
var expect = require('chai').expect;
var plugin = require('../');

var test = function (input, output, options, done) {
  postcss([plugin(options)])
    .process(input)
    .then(function (results) {
      expect(results.css).to.eql(output);
      done();
    });
};

describe('postcss-flexbox-unboxer', function () {

  it('removes `display: box`', function (done) {
    test('.foo { display: box; color: red }', '.foo { color: red }', {}, done);
  });

  it('removes `display: -webkit-box`', function (done) {
    test('.foo { display: -webkit-box; color: red }', '.foo { color: red }', {}, done);
  });

  it('removes `display: -moz-box`', function (done) {
    test('.foo { display: -moz-box; color: red }', '.foo { color: red }', {}, done);
  });

  it('doesn\'t remove non-display box properties', function (done) {
    test('.foo { box-sizing: border-box; color: red }', '.foo { box-sizing: border-box; color: red }', {}, done);
  });

});
