var Point = require('./Point');

function Polygon (points) {

	if (typeof points !== 'object' && typeof points.length === 'undefined') {
		throw new Error('Argument points must be an array');
	}

	if (!points.length) {
		throw new Error('Argument points must contain points');
	}

	if (points.filter(function (point) { return !(point instanceof Point); }).length) {
		throw new Error('Argument points must contain valid points');
	}

	this.point = function (index) {
		return points[index];
	};
}

module.exports = Polygon;
