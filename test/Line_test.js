var assert = require('assert');
var Line = require('../lib/geometry/Line');
var geometry = require('../lib/geometry');

describe('Line', function () {
	describe('.constructor(start, end)', function () {
		it('Throws an error if start and end are not points', function () {
			assert.throws(function () {
				new Line(true, false);
			});

			assert.throws(function () {
				new Line(new Point(0.0, 0.0), false);
			});
		});
	});

	describe('#start()', function () {
		it('Returns the start point of the line', function () {
			var line = geometry.createLineRaw(12.0, 23.5, 56.0, 43.0);
			assert.equal(line.start().x(), 12.0);
			assert.equal(line.start().y(), 23.5);
		});
	});

	describe('#end()', function () {
		it('Returns the end point of the line', function () {
			var line = geometry.createLineRaw(12.0, 23.5, 56.0, 43.0);
			assert.equal(line.end().x(), 56.0);
			assert.equal(line.end().y(), 43.0);
		});
	});

	describe('#length()', function () {
		it('Returns the length of the line from the start to the end', function () {
			var line = geometry.createLineRaw(12.0, 23.5, 56.0, 43.0);
			assert.equal(Math.round(line.length() * 100) / 100, 48.13);
		});
	});

	describe('#direction()', function () {
		it('Returns the direction of the line in relation to the azimuth', function () {
			var line = geometry.createLineRaw(12.0, 23.5, 56.0, 43.0);
			assert.equal(Math.round(line.direction() * 100) / 100, 0.42);
		});
	});

	describe('#intersect(other)', function () {
		it('Returns the point at which the two lines intersect', function () {
			var a = geometry.createLineRaw(0.0, 5.0, 10.0, 5.0);
			var b = geometry.createLineRaw(5.0, 0.0, 5.0, 10.0);
			var c = geometry.createLineRaw(2.0, 0.0, 4.0, 10.0);
			var d = a.intersect(b);
			var e = a.intersect(c);
			assert.equal(d.x(), 5.0);
			assert.equal(d.y(), 5.0);
			assert.equal(e.x(), 3.0);
			assert.equal(e.y(), 5.0);
		});

		it('Returns null if there the lines do not intersect', function () {
			var a = geometry.createLineRaw(0.0, 5.0, 10.0, 5.0);
			var b = geometry.createLineRaw(5.0, 0.0, 5.0, 4.0);
			assert.equal(a.intersect(b), null);
		});
	});
});
