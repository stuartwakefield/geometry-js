var Point = require('./geometry/Point');

module.exports = {
	createPoint: function (x, y) {
		return new Point(x, y);
	}
};