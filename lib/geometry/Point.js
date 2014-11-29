function Point (x, y) {

	if (typeof x !== "number" || typeof y !== "number") {
		throw new Error('Both x and y must be numbers');
	}

	this._x = x;
	this._y = y;
}

Point.prototype.x = function () {
	return this._x;
};

Point.prototype.y = function () {
	return this._y;
};

Point.prototype.distance = function (other) {
	var dx = other.x() - this.x();
	var dy = other.y() - this.y();
	return Math.sqrt(dx * dx + dy * dy);
};

Point.prototype.direction = function (other) {
	return Math.atan2(other.y() - this.y(), other.x() - this.x());
};

Point.prototype.equals = function (other) {
	return this.x() === other.x() && this.y() === other.y();
};

Point.prototype.translate = function (dx, dy) {
	return new Point(this.x() + dx, this.y() + dy);
};

Point.prototype.subtract = function (other) {
	return this.translate(-other.x(), -other.y());
};

module.exports = Point;
