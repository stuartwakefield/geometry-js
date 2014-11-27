var assert = require('assert');
var Line = require('../lib/geometry/Line');

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
});
