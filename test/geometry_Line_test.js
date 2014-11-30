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

	describe('#contains(other)', function () {
		it('Returns true if the line contains other', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = geometry.createLineRaw(2.0, 2.0, 8.0, 8.0);
			assert(a.contains(b));
			assert(a.contains(a));
		});

		it('Returns false if the line does not contain other', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = geometry.createLineRaw(2.0, 2.0, 8.0, 8.0);
			assert(!b.contains(a));
		});
	});

	describe('#equals(other)', function () {
		it('Returns true if the two lines represent the same lines', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			assert(a.equals(b));
		});

		it('Returns false if the two lines do not represent the same lines', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = geometry.createLineRaw(2.0, 2.0, 8.0, 8.0);
			assert(!a.equals(b));
		});

		it('Returns false if the two lines have the same coordinates but are reversed', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = geometry.createLineRaw(10.0, 10.0, 0.0, 0.0);
			assert(!a.equals(b));
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

	describe('#point(dist)', function () {
		it('Returns the point at the specified distance from the start', function () {
			var a = geometry.createLineRaw(0.0, 5.0, 10.0, 5.0);
			var b = geometry.createLineRaw(5.0, 0.0, 5.0, 10.0);
			var c = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var d = a.point(5.0);
			var e = b.point(2.0);
			var f = c.point(8.0);
			assert.equal(d.x(), 5.0);
			assert.equal(d.y(), 5.0);
			assert.equal(e.x(), 5.0);
			assert.equal(e.y(), 2.0);
			assert.equal(Math.round(f.x() * 100) / 100, 5.66);
			assert.equal(Math.round(f.y() * 100) / 100, 5.66);
		});

		it('Returns null if the dist is out of bounds', function () {
			var a = geometry.createLineRaw(0.0, 5.0, 10.0, 5.0);
			var b = geometry.createLineRaw(5.0, 0.0, 5.0, 10.0);
			var c = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var d = a.point(12.0);
			var e = b.point(-2.0);
			var f = c.point(15.0);
			assert(d === null);
			assert(e === null);
			assert(d === null);
		});
	});

	describe('#split(dist)', function () {
		it('Returns the line components resulting from splitting at the specified distance from the start', function () {
			var a = geometry.createLineRaw(0.0, 5.0, 10.0, 5.0);
			var b = geometry.createLineRaw(5.0, 0.0, 5.0, 10.0);
			var c = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var d = a.split(5.0);
			var e = b.split(2.0);
			var f = c.split(8.0);

			assert.equal(d.length, 2);
			assert.equal(d[0].start().x(), 0.0);
			assert.equal(d[0].start().y(), 5.0);
			assert.equal(d[0].end().x(), 5.0);
			assert.equal(d[0].end().y(), 5.0);
			assert.equal(d[1].start().x(), 5.0);
			assert.equal(d[1].start().y(), 5.0);
			assert.equal(d[1].end().x(), 10.0);
			assert.equal(d[1].end().y(), 5.0);

			assert.equal(e.length, 2);
			assert.equal(e[0].start().x(), 5.0);
			assert.equal(e[0].start().y(), 0.0);
			assert.equal(e[0].end().x(), 5.0);
			assert.equal(e[0].end().y(), 2.0);
			assert.equal(e[1].start().x(), 5.0);
			assert.equal(e[1].start().y(), 2.0);
			assert.equal(e[1].end().x(), 5.0);
			assert.equal(e[1].end().y(), 10.0);

			assert.equal(f.length, 2);
			assert.equal(f[0].start().x(), 0.0);
			assert.equal(f[0].start().y(), 0.0);
			assert.equal(Math.round(f[0].end().x() * 100) / 100, 5.66);
			assert.equal(Math.round(f[0].end().y() * 100) / 100, 5.66);
			assert.equal(Math.round(f[1].start().x() * 100) / 100, 5.66);
			assert.equal(Math.round(f[1].start().y() * 100) / 100, 5.66);
			assert.equal(f[1].end().x(), 10.0);
			assert.equal(f[1].end().y(), 10.0);
		});

		it('Returns a single line component if dist is out of bounds', function () {
			var a = geometry.createLineRaw(0.0, 5.0, 10.0, 5.0);
			var b = geometry.createLineRaw(5.0, 0.0, 5.0, 10.0);
			var c = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var d = a.split(12.0);
			var e = b.split(-2.0);
			var f = c.split(15.0);

			assert.equal(d.length, 1);
			assert(d[0].equals(a));

			assert.equal(e.length, 1);
			assert(e[0].equals(b));

			assert.equal(f.length, 1);
			assert(f[0].equals(c));
		});
	});

	describe('#colinear(other)', function () {
		it('Returns true if other is colinear', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = geometry.createLineRaw(50.0, 50.0, 100.0, 100.0);
			var c = geometry.createLineRaw(5.0, 5.0, 7.0, 7.0);
			var d = geometry.createLineRaw(-20.0, -20.0, 5.0, 5.0);

			assert(a.colinear(b));
			assert(a.colinear(c));
			assert(a.colinear(d));
			assert(b.colinear(c));
			assert(b.colinear(d));
			assert(c.colinear(d));
		});

		it('Returns false if other is not colinear', function () {
			var a = geometry.createLineRaw(0.0, 0.0, 10.0, 10.0);
			var b = geometry.createLineRaw(50.0, 50.0, 100.0, 50.0);
			var c = geometry.createLineRaw(5.0, 3.0, 7.0, 5.0);
			var d = geometry.createLineRaw(-20.0, -10.0, 5.0, 5.0);

			assert(!a.colinear(b), 'a-b');
			assert(!a.colinear(c), 'a-c');
			assert(!a.colinear(d), 'a-d');
			assert(!b.colinear(c), 'b-c');
			assert(!b.colinear(d), 'b-d');
			assert(!c.colinear(d), 'c-d');
		});
	});
});
