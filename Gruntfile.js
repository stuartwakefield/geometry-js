module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'performance/**/*.js']
		},
		browserify: {
			dist: {
				files: {
					'build/geometry.js': ['lib/geometry.js']
				},
				options: {
					browserifyOptions: {
						standalone: 'geometry'
					}
				}
			}
		},
		uglify: {
			dist: {
				files: {
					'build/geometry.min.js': ['build/geometry.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['jshint', 'browserify', 'uglify']);

};
