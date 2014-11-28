var assert = require('assert');
var float = require('../lib/geometry/float');

describe('geometry.float', function () {
	describe('.EPSILON', function () {
		it('Returns a small floating point value to use in floating point comparison', function () {
			assert.equal(float.EPSILON, Math.pow(2,-52));
		});
	});

	describe('.equal(a, b)', function () {
		it('Returns true if two floating point numbers could represent the same number', function () {
			assert(float.equal(0.1 / 0.3, 1 / 3));
		});
	});
});
