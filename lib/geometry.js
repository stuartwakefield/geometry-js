var Point = require('./geometry/Point');
var Line = require('./geometry/Line');

module.exports = {
	createPoint: function (x, y) {
		return new Point(x, y);
	},

	createLine: function (start, end) {
		return new Line(start, end);
	},

	createLineRaw: function (x1, y1, x2, y2) {
		return new Line(this.createPoint(x1, y1), this.createPoint(x2, y2));
	}
};
