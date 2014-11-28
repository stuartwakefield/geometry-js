var assert = require('assert');
var Line = require('../lib/geometry/Line');
var Point = require('../lib/geometry/Point');

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
			var line = new Line(new Point(12.0, 23.5), new Point(56.0, 43.0));
			assert.equal(line.start().x(), 12.0);
			assert.equal(line.start().y(), 23.5);
		});
	});

	describe('#end()', function () {
		it('Returns the end point of the line', function () {
			var line = new Line(new Point(12.0, 23.5), new Point(56.0, 43.0));
			assert.equal(line.end().x(), 56.0);
			assert.equal(line.end().y(), 43.0);
		});
	});

	describe('#length()', function () {
		it('Returns the length of the line from the start to the end', function () {
			var line = new Line(new Point(12.0, 23.5), new Point(56.0, 43.0));
			assert.equal(Math.round(line.length() * 100) / 100, 48.13);
		});
	});
});
