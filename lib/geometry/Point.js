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

	this.equals = function (other) {
		return other.x() === this.x() && other.y() === this.y();
	};
}

module.exports = Point;
