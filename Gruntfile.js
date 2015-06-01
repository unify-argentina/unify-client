// Generated on 2015-05-13 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-exec');

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  var config = {
    app: 'app',
    temp: 'temp',
    dist: 'dist',
    distMac32: 'dist/macOS',
    distMac64: 'dist/macOS',
    distLinux32: 'dist/Linux32',
    distLinux64: 'dist/Linux64',
    distWin: 'dist/Win',
    tmp: 'buildTmp',
    resources: 'resources'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

     // Project settings
    yeoman: appConfig,

    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:copy:app', 'newer:jshint:all --force'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/app/lib',
                connect.static('./app/lib')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/app/lib',
                connect.static('./app/lib')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },
    ngconstant: {
      // Options for all targets
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {%= __ngModule %}',
        name: 'config',
      },
      // Environment targets
      dev: {
        options: {
          dest: '<%= yeoman.app %>/scripts/config.js'
        },
        constants:{
          ENV: grunt.file.readJSON('app/scripts/conf/dev.json')
        }
      },
      prod: {
        options: {
          dest: '<%= config.temp %>/scripts/config.js'
        },
        constants: {
          ENV: grunt.file.readJSON('app/scripts/conf/prod.json')
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      temp: {
        files: [{
          dot: true,
          src: [
            '<%= config.temp %>'
          ]
        }]
      },
      postTemp: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.app %>/styles',
            '<%= config.temp %>/styles/{,*/}*.{css, css.map}',
            '<%= config.temp %>/styles/*',
            '!<%= config.temp %>/styles/main.css',
            '<%= config.temp %>/sass',
            '<%= config.temp %>/scripts/*',            
            '!<%= config.temp %>/scripts/app.js',      
            '!<%= config.temp %>/scripts/i18n/',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      distMac32: {
        files: [{
          dot: true,
          src: [
            '<%= config.distMac32 %>/*',
            '<%= yeoman.app %>/styles/{,*/}*.{css,css.map}',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      distMac64: {
        files: [{
          dot: true,
          src: [
            '<%= config.distMac64 %>/*',
            '<%= yeoman.app %>/styles/{,*/}*.{css,css.map}',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      distLinux64: {
        files: [{
          dot: true,
          src: [
            '<%= config.distLinux64 %>/*',
            '<%= yeoman.app %>/{,*/}*.{css,css.map}',
            '<%= config.temp %>/*'
          ]
        }]
      },
      postDist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.app %>/{,*/}*.{css, css.map}',
            '<%= config.temp %>'
          ]
        }]
      },
      distLinux32: {
        files: [{
          dot: true,
          src: [
            '<%= config.distLinux32 %>/*',
            '<%= yeoman.app %>/{,*/}*.{css,css.map}',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      distWin: {
        files: [{
          dot: true,
          src: [
            '<%= config.distWin %>/*',
            '<%= yeoman.app %>/{,*/}*.{css,css.map}',
            '<%= config.tmp %>/*'
          ]
        }]
      },
      server: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.app %>/scripts/config.js',
            '<%= yeoman.app %>/styles/{,*/}*.{css,css.map}'
          ]
        }]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      server: {
        options: {
          map: true,
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
              detect: {
                js: /'(.*\.js)'/gi
              },
              replace: {
                js: '\'{{filePath}}\','
              }
            }
          }
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}app\/lib\//
      }
    },

    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/sass',
        cssDir: '<%= yeoman.app %>/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: 'app/lib',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          sourcemap: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= config.temp %>/',
        flow: {
          html: {
            steps: {
              js: ['concat'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= config.temp %>/{,*/}*.html'],
      css: ['<%= config.temp %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= config.temp %>/',
          '<%= config.temp %>/images',
          '<%= config.temp %>/styles'
        ]
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= config.temp %>/styles/main.css': [
            '<%= config.temp %>/styles/{,*/}*.css'
          ]
        }
      }
    },
    uglify: {
          options: {
              mangle: false
          },
        dist: {
          files: {
            '<%= config.temp %>/scripts/app.js': [
              '<%= config.temp %>/scripts/{,*/}*.js'
            ]
          }
        }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: '<%= config.temp %>/scripts/{,*/}*.js',
        dest: '<%= config.temp %>/scripts/app.js'
      }
    },


    exec: {
      runLinux: {
        cmd: 'resources/node-webkit/Linux64/nw app'
      },
      runLinux32: {
        cmd: 'resources/node-webkit/Linux32/nw app'
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.temp %>',
          src: ['*.html', '{,*/}*.html'],
          dest: '<%= config.temp %>/'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      temp: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.temp %>/',
          src: '**'
        }]
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'app/lib/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      appLinux: {
        files: [{
          expand: true,
          cwd: '<%= config.temp %>',
          dest: '<%= config.distLinux64 %>/app.nw',
          src: '**'
        }]
      },
      appLinux32: {
        files: [{
          expand: true,
          cwd: '<%= config.temp %>',
          dest: '<%= config.distLinux32 %>/app.nw',
          src: '**'
        }]
      },
      appMacos32: {
        files: [{
          expand: true,
          cwd: '<%= config.temp %>',
          dest: '<%= config.distMac32 %>/node-webkit.app/Contents/Resources/app.nw',
          src: '**'
        }, {
          expand: true,
          cwd: '<%= config.resources %>/mac/',
          dest: '<%= config.distMac32 %>/node-webkit.app/Contents/',
          filter: 'isFile',
          src: '*.plist'
        }, {
          expand: true,
          cwd: '<%= config.resources %>/mac/',
          dest: '<%= config.distMac32 %>/node-webkit.app/Contents/Resources/',
          filter: 'isFile',
          src: '*.icns'
        }, {
          expand: true,
          cwd: '<%= config.temp %>/../node_modules/',
          dest: '<%= config.distMac32 %>/node-webkit.app/Contents/Resources/app.nw/node_modules/',
          src: '**'
        }]
      },
      appMacos64: {
        files: [{
          expand: true,
          cwd: '<%= config.temp %>',
          dest: '<%= config.distMac64 %>/node-webkit.app/Contents/Resources/app.nw',
          src: '**'
        }, {
          expand: true,
          cwd: '<%= config.resources %>/mac/',
          dest: '<%= config.distMac64 %>/node-webkit.app/Contents/',
          filter: 'isFile',
          src: '*.plist'
        }, {
          expand: true,
          cwd: '<%= config.resources %>/mac/',
          dest: '<%= config.distMac64 %>/node-webkit.app/Contents/Resources/',
          filter: 'isFile',
          src: '*.icns'
        }, {
          expand: true,
          cwd: '<%= config.temp %>/../node_modules/',
          dest: '<%= config.distMac64 %>/node-webkit.app/Contents/Resources/app.nw/node_modules/',
          src: '**'
        }]
      },
      webkit32: {
        files: [{
          expand: true,
          cwd: '<%=config.resources %>/node-webkit/MacOS32',
          dest: '<%= config.distMac32 %>/',
          src: '**'
        }]
      },
      webkit64: {
        files: [{
          expand: true,
          cwd: '<%=config.resources %>/node-webkit/MacOS64',
          dest: '<%= config.distMac64 %>/',
          src: '**'
        }]
      },
      copyWinToTmp: {
        files: [{
          expand: true,
          cwd: '<%= config.resources %>/node-webkit/Windows/',
          dest: '<%= config.tmp %>/',
          src: '**'
        }]
      }
    },
    compress: {
      appToTmp: {
        options: {
          archive: '<%= config.tmp %>/app.zip'
        },
        files: [{
          expand: true,
          cwd: '<%= config.temp %>',
          src: ['**']
        }]
      },
      finalWindowsApp: {
        options: {
          archive: '<%= config.distWin %>/myFirstNwApp.zip'
        },
        files: [{
          expand: true,
          cwd: '<%= config.tmp %>',
          src: ['**']
        }]
      }
    },
    rename: {
      macApp32: {
        files: [{
          src: '<%= config.distMac32 %>/node-webkit.app',
          dest: '<%= config.distMac32 %>/myFirstNwApp.app'
        }]
      },
      macApp64: {
        files: [{
          src: '<%= config.distMac64 %>/node-webkit.app',
          dest: '<%= config.distMac64 %>/myFirstNwApp.app'
        }]
      },
      zipToApp: {
        files: [{
          src: '<%= config.tmp %>/app.zip',
          dest: '<%= config.tmp %>/app.nw'
        }]
      }
    },
    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist'
        /*,
        'imagemin',
        'svgmin'*/
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'wiredep',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('chmod32', 'Add lost Permissions.', function () {
    var fs = require('fs'),
      path = config.distMac32 + '/myFirstNwApp.app/Contents/';
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper EH.app/Contents/MacOS/nwjs Helper EH', '555');
    }
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper NP.app/Contents/MacOS/nwjs Helper NP', '555');
    }
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper.app/Contents/MacOS/nwjs Helper', '555');
    }
    if (fs.existsSync(path + 'MacOS/node-webkit')) {
      fs.chmodSync(path + 'MacOS/node-webkit', '555');
    } else {
      fs.chmodSync(path + 'MacOS/nwjs', '555');
    }
  });

  grunt.registerTask('chmod64', 'Add lost Permissions.', function () {
    var fs = require('fs'),
      path = config.distMac64 + '/myFirstNwApp.app/Contents/';
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper EH.app/Contents/MacOS/nwjs Helper EH', '555');
    }
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper NP.app/Contents/MacOS/nwjs Helper NP', '555');
    }
    if (fs.existsSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper')) {
      fs.chmodSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper', '555');
    } else {
      fs.chmodSync(path + 'Frameworks/nwjs Helper.app/Contents/MacOS/nwjs Helper', '555');
    }
    if (fs.existsSync(path + 'MacOS/node-webkit')) {
      fs.chmodSync(path + 'MacOS/node-webkit', '555');
    } else {
      fs.chmodSync(path + 'MacOS/nwjs', '555');
    }
  });

  grunt.registerTask('createLinuxApp', 'Create linux distribution.', function (version) {
    var done = this.async();
    var childProcess = require('child_process');
    var exec = childProcess.exec;
    var path = './' + (version === 'Linux64' ? config.distLinux64 : config.distLinux32);
    exec('mkdir -p ' + path + '; cp resources/node-webkit/' + version + '/nw.pak ' + path + ' && cp resources/node-webkit/' + version + '/nw ' + path + '/node-webkit && cp resources/node-webkit/' + version + '/icudtl.dat ' + path + '/icudtl.dat', function (error, stdout, stderr) {
      var result = true;
      if (stdout) {
        grunt.log.write(stdout);
      }
      if (stderr) {
        grunt.log.write(stderr);
      }
      if (error !== null) {
        grunt.log.error(error);
        result = false;
      }
      done(result);
    });
  });


  grunt.registerTask('createWindowsApp', 'Create windows distribution.', function () {
    var done = this.async();
    var concat = require('concat-files');
    concat([
      'buildTmp/nw.exe',
      'buildTmp/app.nw'
    ], 'buildTmp/myFirstNwApp.exe', function () {
      var fs = require('fs');
      fs.unlink('buildTmp/app.nw', function (error, stdout, stderr) {
        if (stdout) {
          grunt.log.write(stdout);
        }
        if (stderr) {
          grunt.log.write(stderr);
        }
        if (error !== null) {
          grunt.log.error(error);
          done(false);
        } else {
          fs.unlink('buildTmp/nw.exe', function (error, stdout, stderr) {
            var result = true;
            if (stdout) {
              grunt.log.write(stdout);
            }
            if (stderr) {
              grunt.log.write(stderr);
            }
            if (error !== null) {
              grunt.log.error(error);
              result = false;
            }
            done(result);
          });
        }
      });
    });
  });

  grunt.registerTask('setVersion', 'Set version to all needed files', function (version) {
    var config = grunt.config.get(['config']);
    var appPath = config.app;
    var resourcesPath = config.resources;
    var mainPackageJSON = grunt.file.readJSON('package.json');
    var appPackageJSON = grunt.file.readJSON(appPath + '/package.json');
    var infoPlistTmp = grunt.file.read(resourcesPath + '/mac/Info.plist.tmp', {
      encoding: 'UTF8'
    });
    var infoPlist = grunt.template.process(infoPlistTmp, {
      data: {
        version: version
      }
    });
    mainPackageJSON.version = version;
    appPackageJSON.version = version;
    grunt.file.write('package.json', JSON.stringify(mainPackageJSON, null, 2), {
      encoding: 'UTF8'
    });
    grunt.file.write(appPath + '/package.json', JSON.stringify(appPackageJSON, null, 2), {
      encoding: 'UTF8'
    });
    grunt.file.write(resourcesPath + '/mac/Info.plist', infoPlist, {
      encoding: 'UTF8'
    });
  });

  grunt.registerTask('createPlistFile', 'set node webkit and app relevant information to a new plist file', function() {
    var metadata = grunt.file.readJSON('.yo-rc.json');
    var resourcesPath = config.resources;
    var nwExecuteable = 'nwjs';
    if (metadata.nodeWebkitVersion.indexOf('v0.8.') === 0 || metadata.nodeWebkitVersion.indexOf('v0.9.') === 0 || metadata.nodeWebkitVersion.indexOf('v0.10.') === 0 || metadata.nodeWebkitVersion.indexOf('v0.11.') === 0) {
      nwExecuteable = 'node-webkit';
    }
    var infoPlistTmp = grunt.file.read(resourcesPath + '/mac/Info.plist.tmp', {
      encoding: 'UTF8'
    });
    var infoPlist = grunt.template.process(infoPlistTmp, {
      data: {
        nwExecutableName: nwExecuteable
      }
    });
    grunt.file.write(resourcesPath + '/mac/Info.plist', infoPlist, {
      encoding: 'UTF8'
    });
  });

     

  grunt.registerTask('runLinuxApp', 'Run linux distribution.', function (version) {
    var done = this.async();
    var childProcess = require('child_process');
    var exec = childProcess.exec;
    exec('resources/node-webkit/' + version + '/nw app', function (error, stdout, stderr) {
      var result = true;
      if (stdout) {
        grunt.log.write(stdout);
      }
      if (stderr) {
        grunt.log.write(stderr);
      }
      if (error !== null) {
        grunt.log.error(error);
        result = false;
      }
      done(result);
    });
  });

  //'runLinuxApp:Linux64'
  grunt.registerTask('run-linux', [
      'clean:server',
      'ngconstant:dev', 
      'wiredep',
      'concurrent:server',
      'autoprefixer:server',
      'exec:runLinux'
  ]);

  grunt.registerTask('run-linux32', [
      'clean:server',
      'ngconstant:dev', 
      'wiredep',
      'concurrent:server',
      'autoprefixer:server',
      'exec:runLinux32'
  ]);

  grunt.registerTask('prepareDist', [
    'clean:temp',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer:dist',
    'copy:temp',
    'ngconstant:prod', 
    'cssmin:dist',
    'concat:dist',
    'uglify:dist',
    'usemin',
    'htmlmin:dist',
    'clean:postTemp'
  ]);

  grunt.registerTask('dist-linux', [
    'clean:distLinux64',
    'prepareDist',
    'copy:appLinux',
    'createLinuxApp:Linux64',
    'clean:postDist'
  ]);

  grunt.registerTask('dist-linux32', [
    'clean:distLinux32',
    'prepareDist',
    'copy:appLinux32',
    'createLinuxApp:Linux32',
    'clean:postDist'
  ]);

  grunt.registerTask('dist-win', [
    'clean:distWin',
    'prepareDist',
    'copy:copyWinToTmp',
    'compress:appToTmp',
    'rename:zipToApp',
    'createWindowsApp',
    'compress:finalWindowsApp',
    'clean:postDist'
  ]);

  grunt.registerTask('dist-mac', [
    'clean:distMac64',
    'prepareDist',
    'createPlistFile',
    'copy:webkit64',
    'copy:appMacos64',
    'rename:macApp64',
    'chmod64'
  ]);

  grunt.registerTask('dist-mac32', [
    'clean:distMac32',
    'prepareDist',
    'createPlistFile',
    'copy:webkit32',
    'copy:appMacos32',
    'rename:macApp32',
    'chmod32'
  ]);

  grunt.registerTask('check', [
    'jshint'
  ]);

  grunt.registerTask('dmg', 'Create dmg from previously created app folder in dist.', function () {
    var done = this.async();
    var createDmgCommand = 'resources/mac/package.sh "myFirstNwApp"';
    require('child_process').exec(createDmgCommand, function (error, stdout, stderr) {
      var result = true;
      if (stdout) {
        grunt.log.write(stdout);
      }
      if (stderr) {
        grunt.log.write(stderr);
      }
      if (error !== null) {
        grunt.log.error(error);
        result = false;
      }
      done(result);
    });
  });
};
