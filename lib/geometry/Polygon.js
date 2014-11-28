var Point = require('./Point');
var Line = require('./Line');

function Polygon () {

	var points = Array.prototype.slice.call(arguments);

	if (!points.length) {
		throw new Error('Arguments must contain some points');
	}

	if (points.filter(function (point) { return !(point instanceof Point); }).length) {
		throw new Error('Arguments must be valid points');
	}

	this.points = function (index) {
		return points.slice();
	};

	this.lines = function () {
		return this.points().map(function (point, index, points) {
			return new Line(point, points[(index + 1) % points.length]);
		});
	};

	this.perimeter = function () {
		return this.lines().reduce(function (result, line) {
			return result + line.length();
		}, 0);
	};
}

module.exports = Polygon;
