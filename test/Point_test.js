var assert = require('assert');
var Point = require('../lib/geometry/Point');

describe('Point', function () {

	var a = new Point(10.0, 20.0);
	var b = new Point(30.0, 40.0);
	var c = new Point(10.0, 20.0);

	describe('.constructor(x, y)', function () {
		it('Throws an error if x and y are not numbers', function () {
			assert.throws(function () {
				new Point(true, false);
			});

			assert.throws(function () {
				new Point("10.0", "20.0");
			});

			assert.throws(function () {
				new Point();
			});

			assert.throws(function () {
				new Point(10.0, false);
			});
		});
	});

	describe('#x()', function () {
		it('Returns the x position of the point', function () {
			assert(a.x() === 10.0);
		});
	});

	describe('#y()', function () {
		it('Returns the y position of the point', function () {
			assert(a.y() === 20.0);
		});
	});

	describe('#distance(other)', function () {
		it('Returns the distance to another point', function () {
			assert(Math.ceil(a.distance(b)) === 29);
		});

		it('Throws an error if the other point is not a point', function () {
			assert.throws(function () {
				a.distance(false);
			});
		});
	});

	describe('#direction(other)', function () {
		it('Returns the angle of direction to another point in relation to the azimuth', function () {
			assert.equal(new Point(0.0, 0.0).direction(new Point(0.0, 10.0)), Math.PI / 2);
			assert.equal(new Point(0.0, 0.0).direction(new Point(10.0, 0.0)), 0.0);
			assert.equal(new Point(0.0, 0.0).direction(new Point(-10.0, 0.0)), Math.PI);
			assert.equal(new Point(0.0, 0.0).direction(new Point(0.0, -10.0)), -Math.PI / 2);
		});
	});

	describe('#equals(other)', function () {
		it('Returns true if the other point represents the same coordinates', function () {
			assert(a.equals(c));
		});

		it('Throws an error if the other point is not a point', function () {
			assert.throws(function () {
				a.equals(false);
			});
		});
	});
});
