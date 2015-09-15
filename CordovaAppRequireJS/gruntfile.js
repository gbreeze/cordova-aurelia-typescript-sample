/// <binding AfterBuild='copy:viewsJS' />

/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {


	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: "www/lib",
					layout: "byComponent",
					cleanTargetDir: false
				}
			}
		},
		ts: {
			// https://github.com/TypeStrong/grunt-ts/blob/master/sample/Gruntfile.js
			// https://github.com/TypeStrong/grunt-ts/blob/master/docs/DisableVisualStudioBuild.md
			build: {
				src: ["Scripts/**/*.ts"],
				out: 'www/scripts/tsBundle.js'
			}
		},
		copy: {
			// https://github.com/gruntjs/grunt-contrib-copy
			viewsJS: {
				expand: true,
				src: 'scripts/viewModels/*.js*',
				dest: 'www/views/',
				flatten: true,
				filter: 'isFile',
			},
		}
	});

	grunt.registerTask("default", ["bower:install"]);
	grunt.registerTask("build", ["ts:build", "webpack:build-dev"]);

	// Production build
	// https://github.com/webpack/webpack-with-common-libs/blob/master/Gruntfile.js
	// grunt.registerTask("build", ["webpack:build"]);


	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks('grunt-contrib-copy');
//	grunt.loadNpmTasks("grunt-ts");
};