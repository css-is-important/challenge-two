module.exports = function (grunt) {
  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'js/dev/*.js'
        ],
        dest: 'js/prod/production.js'
      }
    },
    uglify: {
      build: {
        src: 'js/prod/production.js',
        dest: 'js/prod/production.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'stylesheets/prod/core.css': 'stylesheets/dev/master.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      // prefix the specified file
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'stylesheets/prod/core.css',
        dest: 'stylesheets/prod/core.css'
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: {
            path: '.',
            options: {
              index: 'index.html',
              maxAge: 300000
            }
          },
          open: true
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: true
        },
        files: [
          ['stylesheets/**/*.scss'],
          ['js/dev/**/*.js'],
          './index.html'
        ]
      },
      scripts: {
        files: ['js/dev/**/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['stylesheets/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    }
  })

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-connect')

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'connect', 'watch'])
  grunt.registerTask('deploy', ['concat', 'uglify', 'sass', 'autoprefixer'])
}
