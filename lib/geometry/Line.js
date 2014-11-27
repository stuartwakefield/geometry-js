function Line (start, end) {
	this.start = function () {
		return start;
	};

	this.end = function () {
		return end;
	};
}

module.exports = Line;
