var assert = require('assert');
var Line = require('../lib/geometry/Line');
var geometry = require('../lib/geometry');

describe('geometry.Line', function () {
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

	describe('#containsPoint(point)', function () {
		it('Returns true if the point is along the line', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = geometry.createLineRaw(0.0, 2.0, 10.0, 10.0);
			var c = geometry.createPoint(3.0, 3.0);
			var d = geometry.createPoint(7.0, 7.0);
			var e = geometry.createPoint(5.0, 6.0);
			assert(a.containsPoint(c));
			assert(a.containsPoint(d));
			assert(b.containsPoint(e));
		});

		it('Returns false if the point is not along the line', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = geometry.createLineRaw(0.0, 2.0, 10.0, 10.0);
			var c = geometry.createPoint(3.0, 3.0);
			var d = geometry.createPoint(7.0, 7.0);
			var e = geometry.createPoint(5.0, 6.0);
			var f = geometry.createPoint(11.0, 11.0);
			assert(!b.containsPoint(c));
			assert(!b.containsPoint(d));
			assert(!a.containsPoint(e));
			assert(!a.containsPoint(f));
		});

		it('Returns true even if the points suffers floating point comparison issues', function () {
			var a = geometry.createLineRaw(0.0, 0.1, 0.3, 0.2);
			var b = geometry.createPoint(0.15, 0.15);
			assert(a.containsPoint(b));
		});
	});

	describe('#reverse()', function () {
		it('Reverses the start and end points of a line', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = a.reverse();
			assert.equal(a.start().x(), 0.0);
			assert.equal(b.start().x(), 10.0);
			assert.equal(a.start().y(), 0.0);
			assert.equal(b.start().y(), 10.0);
			assert.equal(a.end().x(), 10.0);
			assert.equal(b.end().x(), 0.0);
			assert.equal(a.end().y(), 10.0);
			assert.equal(b.end().y(), 0.0);
		});
	});
});
