var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();
var geometry = require('../lib/geometry');

function contains1 (polygon, other) {
	return other.points().reduce(function (result, point) {
		return result && polygon.containsPoint(point);
	}, true) && other.lines().reduce(function (result, otherLine) {
		return result && polygon.lines().reduce(function (result, line) {
			return result && line.intersect(otherLine) === null;
		});
	}, true);
}

function contains2 (polygon, other) {
	return other.lines().reduce(function (result, otherLine) {
		return result && polygon.lines().reduce(function (result, line) {
			return result && line.intersect(otherLine) === null;
		});
	}, true) && polygon.containsPoint(other.points()[0]);
}

var a = geometry.createPolygonRaw(
	0.0, 0.0,
	3.0, 3.0,
	6.0, 0.0,
	6.0, 6.0,
	0.0, 6.0
);
var b = geometry.createPolygonRaw(
	1.0, 2.0,
	2.0, 4.0,
	5.0, 2.0,
	5.0, 5.0,
	1.0, 5.0
);

if (!contains1(a, b)) throw new Error('Bad contains1');
if (!contains2(a, b)) throw new Error('Bad contains2');

suite.add('Line#containsPoint1', function () {
	contains1(a, b);
}).add('Line#containsPoint2', function () {
	contains2(a, b);
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
