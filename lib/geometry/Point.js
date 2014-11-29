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
		var dx = other.x() - x;
		var dy = other.y() - y;
		return Math.sqrt(dx * dx + dy * dy);
	};

	this.direction = function (other) {
		return Math.atan2(other.y() - y, other.x() - x);
	};

	this.equals = function (other) {
		return x === other.x() && y === other.y();
	};

	this.translate = function (dx, dy) {
		return new Point(x + dx, y + dy);
	};

	this.subtract = function (other) {
		return this.translate(-other.x(), -other.y());
	};
}

module.exports = Point;
