var Point = require('./Point');
var float = require('./float');

function Line (start, end) {

	if (!(start instanceof Point && end instanceof Point)) {
		throw new Error('Both start and end must be points');
	}

	this._start = start;
	this._end = end;
}

Line.prototype.start = function () {
	return this._start;
};

Line.prototype.end = function () {
	return this._end;
};

Line.prototype.length = function () {
	return this.start().distance(this.end());
};

Line.prototype.direction = function () {
	return this.start().direction(this.end());
};

Line.prototype.intersect = function (other) {

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

Line.prototype.containsPoint = function (point) {

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

Line.prototype.contains = function (other) {
	return this.containsPoint(other.start()) && this.containsPoint(other.end());
};

Line.prototype.equals = function (other) {
	return this.start().equals(other.start()) && this.end().equals(other.end());
};

Line.prototype.reverse = function () {
	return new Line(this.end(), this.start());
};

Line.prototype.point = function (dist) {

	var s = dist / this.length();

	if (s < 0 || s > 1) {
		return null;
	}
	
	var lsx = this.start().x();
	var lsy = this.start().y();
	var lex = this.end().x();
	var ley = this.end().y();

	var dx = lex - lsx;
	var dy = ley - lsy;

	return new Point(lsx + dx * s, lsy + dy * s);
};

Line.prototype.split = function (dist) {

	var point = this.point(dist);

	if (point === null) {
		return [this];
	}

	return [new Line(this.start(), point), new Line(point, this.end())];
};

Line.prototype.colinear = function (other) {

	var lsx = this.start().x();
	var lsy = this.start().y();
	var lex = this.end().x();
	var ley = this.end().y();

	var osx = other.start().x();
	var osy = other.start().y();
	var oex = other.end().x();
	var oey = other.end().y();
	
	var ax = lex - lsx;
	var ay = ley - lsy;

	var bx = oex - osx;
	var by = oey - osy;

	var b = ay / ax;
	var c = lsy - lsx * b;

	var d = by / bx;
	var e = osy - osx * b;

	return float.equal(b, d) && float.equal(c, e);
};

module.exports = Line;
