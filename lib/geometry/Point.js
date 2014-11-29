function Point (x, y) {

	if (typeof x !== "number" || typeof y !== "number") {
		throw new Error('Both x and y must be numbers');
	}

	this.x = function () {
		return x;
	};

	this.y = function () {
		return y;
	};

	this.distance = function (other) {
		var dx = other.x() - this.x();
		var dy = other.y() - this.y();
		return Math.sqrt(dx * dx + dy * dy);
	};

	this.direction = function (other) {
		return Math.atan2(other.y() - this.y(), other.x() - this.x());
	};

	this.equals = function (other) {
		return other.x() === this.x() && other.y() === this.y();
	};

	this.translate = function (x, y) {
		return new Point(this.x() + x, this.y() + y);
	};

	this.subtract = function (other) {
		return this.translate(-other.x(), -other.y());
	};
}

module.exports = Point;
