var assert = require('assert');
var geometry = require('../lib/geometry');

describe('geometry', function () {
	describe('.createPoint(x, y)', function () {
		it('Creates a point from the provided coordinates', function () {
			var point = geometry.createPoint(10.0, 20.0);
			assert(point.x() === 10.0);
			assert(point.y() === 20.0);
		});
	});

	describe('.createLine(start, end)', function () {
		it('Creates a line from the provided points', function () {
			var start = geometry.createPoint(0.0, 0.0);
			var end = geometry.createPoint(20.0, 20.0);
			var line = geometry.createLine(start, end);
			assert(line.start().x() === 0.0);
			assert(line.start().y() === 0.0);
			assert(line.end().x() === 20.0);
			assert(line.end().y() === 20.0);
		});
	});

	describe('.createLineRaw(x1, y1, x2, y2)', function () {
		it('Creates a line from the provided coordinates', function () {
			var line = geometry.createLineRaw(0.0, 0.0, 20.0, 20.0);
			assert(line.start().x() === 0.0);
			assert(line.start().y() === 0.0);
			assert(line.end().x() === 20.0);
			assert(line.end().y() === 20.0);
		});
	});
});
