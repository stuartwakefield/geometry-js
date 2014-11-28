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

	createPolygon: function(points) {
		return new Polygon(points);
	}
};
