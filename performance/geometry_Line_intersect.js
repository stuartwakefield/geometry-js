var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var geometry = require('../lib/geometry');
var Point = require('../lib/geometry/Point');

function intersect1(l1, l2) {

	var a = l1.end().subtract(l1.start());
	var b = l2.end().subtract(l2.start());
	var d = l1.start().subtract(l2.start());

	var s = (a.x() * d.y() - a.y() * d.x()) / (a.x() * b.y() - b.x() * a.y());
	var t = (b.x() * d.y() - b.y() * d.x()) / (a.x() * b.y() - b.x() * a.y());

	if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
		return l1.start().translate((t * a.x()), (t * a.y()));
	}
	
	return null;
}

function intersect2(l1, l2) {

	var l1sx = l1.start().x();
	var l1sy = l1.start().y();
	var l1ex = l1.end().x();
	var l1ey = l1.end().y();
	var l2sx = l2.start().x();
	var l2sy = l2.start().y();
	var l2ex = l2.end().x();
	var l2ey = l2.end().y();

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
}

function intersect3(l1, l2) {

	var a = l1.end().subtract(l1.start());
	var b = l2.end().subtract(l2.start());
	var d = l1.start().subtract(l2.start());

	var ax = a.x();
	var ay = a.y();
	var bx = b.x();
	var by = b.y();
	var dx = d.x();
	var dy = d.y();

	var s = (ax * dy - ay * dx) / (ax * by - bx * ay);
	var t = (bx * dy - by * dx) / (ax * by - bx * ay);

	if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
		return l1.start().translate((t * ax), (t * ay));
	}
	
	return null;
}

var a = geometry.createLineRaw(1.0, 4.0, 10.0, 5.0);
var b = geometry.createLineRaw(5.0, -23.0, 2.0, 21.0);

suite.add('Line#intersect1', function () {
	intersect1(a, b);
})
.add('Line#intersect2', function () {
	intersect2(a, b);
})
.add('Line#intersect3', function () {
	intersect3(a, b);
})

// add listeners
.on('cycle', function (event) {
	console.log(String(event.target));
})
.on('complete', function () {
	console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})

// run async
.run({ 'async': true });
