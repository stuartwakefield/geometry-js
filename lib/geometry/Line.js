var Point = require('./Point');
var float = require('./float');

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

		var l1sx = this.start().x();
		var l1sy = this.start().y();
		var l1ex = this.end().x();
		var l1ey = this.end().y();
		var l2sx = other.start().x();
		var l2sy = other.start().y();
		var l2ex = other.end().x();
		var l2ey = other.end().y();

		var ax = l1ex - l1sx;
		var ay = l1ey - l1sy;
		var bx = l2ex - l2sx;
		var by = l2ey - l2sy;
		var dx = l1sx - l2sx;
		var dy = l1sy - l2sy;

		var s = (ax * dy - ay * dx) / (ax * by - bx * ay);
		var t = (bx * dy - by * dx) / (ax * by - bx * ay);

		if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
			var x = l1sx + (t * ax);
			var y = l1sy + (t * ay);
			return new Point(x, y);
		}
		
		return null;
	};

	this.containsPoint = function (point) {

		var lsx = this.start().x();
		var lsy = this.start().y();
		var lex = this.end().x();
		var ley = this.end().y();
		var px = point.x();
		var py = point.y();
		
		var ax = lex - lsx;
		var ay = ley - lsy;

		var b = ay / ax;
		var c = lsy - lsx * b;

		var s = (px - lsx) / (lex - lsx);

		return s >= 0 && s <= 1 && float.equal(b * px + c, py);
	};
}

module.exports = Line;
