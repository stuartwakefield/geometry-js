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

	describe('.distance(x1, y1, x2, y2)', function () {
		it('Returns the distance between the provided coordinates', function () {
			assert(geometry.distance(2.0, 3.0, 7.0, 8.0) === Math.sqrt(50.0));
		});
	});

	describe('.createPolygon(p1, p2, ..., pN)', function () {
		it('Creates a polygon from the provided points', function () {
			var polygon = geometry.createPolygon(
				geometry.createPoint(0.0, 0.0),
				geometry.createPoint(10.0, 0.0),
				geometry.createPoint(10.0, 10.0),
				geometry.createPoint(0.0, 10.0)
			);
			assert.equal(polygon.point(0).x(), 0.0);
			assert.equal(polygon.point(0).y(), 0.0);
			assert.equal(polygon.point(1).x(), 10.0);
			assert.equal(polygon.point(1).y(), 0.0);
			assert.equal(polygon.point(2).x(), 10.0);
			assert.equal(polygon.point(2).y(), 10.0);
			assert.equal(polygon.point(3).x(), 0.0);
			assert.equal(polygon.point(3).y(), 10.0);
		});
	});

	describe('.createPolygonRaw(x1, y1, x2, y2, ..., xN, yN)', function () {
		it('Creates a polygon from the provided coordinates', function () {
			var polygon = geometry.createPolygonRaw(
				0.0, 0.0,
				10.0, 0.0,
				10.0, 10.0,
				0.0, 10.0
			);
			assert.equal(polygon.point(0).x(), 0.0);
			assert.equal(polygon.point(0).y(), 0.0);
			assert.equal(polygon.point(1).x(), 10.0);
			assert.equal(polygon.point(1).y(), 0.0);
			assert.equal(polygon.point(2).x(), 10.0);
			assert.equal(polygon.point(2).y(), 10.0);
			assert.equal(polygon.point(3).x(), 0.0);
			assert.equal(polygon.point(3).y(), 10.0);
		});

		it('Throws an error if there is an uneven number of values', function () {
			assert.throws(function () {
				geometry.createPolygonRaw(
					0.0, 0.0,
					10.0, 0.0,
					10.0, 10.0,
					0.0
				);
			});
		});
	});
});
