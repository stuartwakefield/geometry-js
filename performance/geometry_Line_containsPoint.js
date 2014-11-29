var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var geometry = require('../lib/geometry');
var float = require('../lib/geometry/float');

function containsPoint1 (line, point) {
	var a = line.end().subtract(line.start());
	var b = a.y() / a.x();
	var c = line.start().y() - line.start().x() * b;

	var s = (point.x() - line.start().x()) / (line.end().x() - line.start().x());

	return s >= 0 && s <= 1 && float.equal(b * point.x() + c, point.y());
}

function containsPoint2 (line, point) {

	var lsx = line.start().x();
	var lsy = line.start().y();
	var lex = line.end().x();
	var ley = line.end().y();
	var px = point.x();
	var py = point.y();
	
	var ax = lex - lsx;
	var ay = ley - lsy;

	var b = ay / ax;
	var c = lsy - lsx * b;

	var s = (px - lsx) / (lex - lsx);

	return s >= 0 && s <= 1 && float.equal(b * px + c, py);
}

var a = geometry.createLineRaw(0.0, 0.0, 60.0, 100.0);
var b = geometry.createPoint(36.0, 60.0);

suite.add('Line#containsPoint1', function () {
	containsPoint1(a, b);
})
.add('Line#containsPoint2', function () {
	containsPoint2(a, b);
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
