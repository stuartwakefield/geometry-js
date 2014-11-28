var Point = require('./Point');

function Polygon (point1, point2, /*...,*/ pointN) {

	var points = Array.prototype.slice.call(arguments);

	if (!points.length) {
		throw new Error('Arguments must contain some points');
	}

	if (points.filter(function (point) { return !(point instanceof Point); }).length) {
		throw new Error('Arguments must be valid points');
	}

	this.point = function (index) {
		return points[index];
	};
}

module.exports = Polygon;
