var Point = require('./geometry/Point');
var Line = require('./geometry/Line');
var Polygon = require('./geometry/Polygon');

module.exports = {
	createPoint: function (x, y) {
		return new Point(x, y);
	},

	createLine: function (start, end) {
		return new Line(start, end);
	},

	createLineRaw: function (x1, y1, x2, y2) {
		return new Line(this.createPoint(x1, y1), this.createPoint(x2, y2));
	},

	distance: function (x1, y1, x2, y2) {
		return this.createPoint(x1, y1).distance(this.createPoint(x2, y2));
	},

	createPolygon: (function() {
		var proxy = function(args) {
			return Polygon.apply(this, args);
		};
		proxy.prototype = Polygon.prototype;
		return function () {
			return new proxy(arguments);
		};
	}) (),

	createPolygonRaw: function() {

		var args = Array.prototype.slice.call(arguments);

		if (args.length % 2 !== 0) {
			throw new Error('There must be an even number of values');
		}

		return this.createPolygon.apply(this, args.reduce(function (result, current) {
			if (result[1] === null) {
				return [result[0], current];
			} else {
				result[0].push(new Point(result[1], current));
				return [result[0], null];
			}
		}, [[],null]).shift());
	}
};
