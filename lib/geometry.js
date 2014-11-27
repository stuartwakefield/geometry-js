var Point = require('./geometry/Point');
var Line = require('./geometry/Line');

module.exports = {
	createPoint: function (x, y) {
		return new Point(x, y);
	},

	createLine: function (start, end) {
		return new Line(start, end);
	}
};
