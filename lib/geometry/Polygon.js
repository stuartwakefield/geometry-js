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

	this._points = points;
}

Polygon.prototype.points = function (index) {
	return this._points.slice();
};

Polygon.prototype.lines = function () {
	return this.points().map(function (point, index, points) {
		return new Line(point, points[(index + 1) % points.length]);
	});
};

Polygon.prototype.perimeter = function () {
	return this.lines().reduce(function (result, line) {
		return result + line.length();
	}, 0);
};

Polygon.prototype.area = function () {
	return this.lines().reduce(function (result, line) {
		var dx = line.start().x() - line.end().x();
		var dy = (line.end().y() + line.start().y()) / 2;
		return result + dx * dy;
	}, 0);
};

Polygon.prototype.containsPoint = function (point) {

	var px = point.x();
	var py = point.y();

	return this.lines().reduce(function (result, line) {

		var lsx = line.start().x();
		var lsy = line.start().y();
		var lex = line.end().x();
		var ley = line.end().y();

		return ((lsy > py) !== (ley > py) &&
			(px < (lex - lsx) * (py - lsy) / (ley - lsy) + lsx)) ? !result : result; 
	}, false);
};

Polygon.prototype.contains = function (other) {
	var self = this;
	return other.lines().reduce(function (result, a) {
		return result && self.lines().reduce(function (result, b) {
			return result && a.intersect(b) === null;
		});
	}, true) && this.containsPoint(other.points()[0]);
};

module.exports = Polygon;
