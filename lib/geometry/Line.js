var Point = require('./Point');

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
		return start.distance(end);
	};
}

module.exports = Line;
