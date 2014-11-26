function Point (x, y) {
	this.x = function () {
		return x;
	};

	this.y = function () {
		return y;
	};
}

module.exports = Point;