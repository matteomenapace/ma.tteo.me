module.exports = function(grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8080,
					base: '_site'
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/sassy.css': '_sass/sassy.scss'
				}
			}
		},
		watch: {
			scripts: {
				files: [
					'index.html'
				],
				options: {
					livereload: true
				},
			},
			css: {
				files: [
					'_sass/**'
				],
				tasks: ['sass'],
				options: {
					livereload: true
				},
			},
		},

		browserSync: {
			default_options: {
				bsFiles: {
					src: [
						'./*.html',
						'./css/*.css'
					]
				},
				options: {
					watchTask: true,
					server: './',
					watchOptions: {
						ignoreInitial: true,
						ignored: ['*.txt', 'node_modules', '.git'],
					},
					browser: 'google chrome',
					notify: false
				}	
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-contrib-connect')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-browser-sync');
	
	grunt.registerTask('default', ['browserSync', 'watch'])
}
