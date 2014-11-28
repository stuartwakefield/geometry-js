var Point = require('./Point');

function Line (start, end) {

	if (!(start instanceof Point && end instanceof Point)) {
		throw new Error('Both start and end must be points');
	}

	this.start = function () {
		return start;
	};

	this.end = function () {
		return end;
	};

	this.length = function () {
		return this.start().distance(this.end());
	};

	this.direction = function () {
		return this.start().direction(this.end());
	};

	this.intersect = function (other) {
		var a = this.end().translate(-this.start().x(), -this.start().y());
		var b = other.end().translate(-other.start().x(), -other.start().y());
		var d = this.start().translate(-other.start().x(), -other.start().y());

		var s = (a.x() * d.y() - a.y() * d.x()) / (a.x() * b.y() - b.x() * a.y());
		var t = (b.x() * d.y() - b.y() * d.x()) / (a.x() * b.y() - b.x() * a.y());

		if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
			var x = this.start().x() + (t * a.x());
			var y = this.start().y() + (t * a.y());
			return new Point(x, y);
		}
		
		return null;
	};
}

module.exports = Line;
