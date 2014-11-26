var assert = require('assert');
var Point = require('../lib/geometry/Point');

describe('Point', function () {

	var a = new Point(10.0, 20.0);
	var b = new Point(30.0, 40.0);

	describe('#x()', function () {
		it('Returns the x position of the point', function () {
			assert(a.x() == 10.0);
		});
	});

	describe('#y()', function () {
		it('Returns the y position of the point', function () {
			assert(a.y() == 20.0);
		});
	});

	describe('#distance(other)', function () {
		it('Returns the distance to another point', function () {
			assert(Math.ceil(a.distance(b)) == 29);
		});
	});
});
