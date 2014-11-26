var assert = require('assert');
var geometry = require('../lib/geometry');

describe('geometry', function () {
	describe('.createPoint(x, y)', function () {
		it('Creates a point with the provided coordinates', function () {
			var point = geometry.createPoint(10.0, 20.0);
		});
	});
});