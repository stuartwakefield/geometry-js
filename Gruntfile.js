module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
		},
		browserify: {
			dist: {
				files: {
					'build/geometry.js': ['lib/geometry.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['jshint', 'browserify']);

};
