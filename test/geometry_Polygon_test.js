var assert = require('assert');
var Polygon = require('../lib/geometry/Polygon');

describe('geometry.Polygon', function () {
	describe('.constructor(points)', function () {
		it('Throws an error if points is not an array of points', function () {
			assert.throws(function () {
				new Polygon();
			});
		});

		it('Throws an error if the points array does not contain any points', function () {
			assert.throws(function () {
				new Polygon([]);
			});
		});

		it('Throws an error if the points array contains something other than points', function () {
			assert.throws(function () {
				new Polygon([false]);
			});
		});
	});
});
