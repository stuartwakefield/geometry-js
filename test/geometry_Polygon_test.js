var assert = require('assert');
var Polygon = require('../lib/geometry/Polygon');
var geometry = require('../lib/geometry');

describe('geometry.Polygon', function () {
	describe('.constructor(points)', function () {
		it('Throws an error if no points supplied', function () {
			assert.throws(function () {
				new Polygon();
			});
		});

		it('Throws an error if the points are not valid points', function () {
			assert.throws(function () {
				new Polygon(false);
			});
		});
	});

	describe('#points()', function () {
		it('Returns an array of the points', function () {
			var polygon = geometry.createPolygonRaw(
				0.0, 0.0,
				10.0, 10.0,
				0.0, 10.0
			);
			var points = polygon.points();
			assert.equal(points.length, 3);
			assert.equal(points[0].x(), 0.0);
			assert.equal(points[0].y(), 0.0);
			assert.equal(points[1].x(), 10.0);
			assert.equal(points[1].y(), 10.0);
			assert.equal(points[2].x(), 0.0);
			assert.equal(points[2].y(), 10.0);
		});
	});

	describe('#lines()', function () {
		it('Returns an array of the lines', function () {
			var polygon = geometry.createPolygonRaw(
				0.0, 0.0,
				10.0, 10.0,
				0.0, 10.0
			);
			var lines = polygon.lines();
			assert.equal(lines.length, 3);
			assert.equal(lines[0].start().x(), 0.0);
			assert.equal(lines[0].start().y(), 0.0);
			assert.equal(lines[0].end().x(), 10.0);
			assert.equal(lines[0].end().y(), 10.0);
			assert.equal(lines[1].start().x(), 10.0);
			assert.equal(lines[1].start().y(), 10.0);
			assert.equal(lines[1].end().x(), 0.0);
			assert.equal(lines[1].end().y(), 10.0);
			assert.equal(lines[2].start().x(), 0.0);
			assert.equal(lines[2].start().y(), 10.0);
			assert.equal(lines[2].end().x(), 0.0);
			assert.equal(lines[2].end().y(), 0.0);
		});
	});
});
