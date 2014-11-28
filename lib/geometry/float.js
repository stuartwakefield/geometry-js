module.exports = {
	EPSILON: Number.EPSILON || Math.pow(2, -52),

	equal: function(a, b) {
		return Math.abs(b - a) < this.EPSILON;
	}
};
