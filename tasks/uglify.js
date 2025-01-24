/**
 * The task for minifying JavaScript.
 * Refer to https://github.com/gruntjs/grunt-contrib-uglify
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-uglify");

  var config = {
    build: {
      files: [
        {
          src: "<%= distPath %>/app.js",
          dest: "<%= distPath %>/app.min.js",
        },
      ],
    },
  };

  grunt.config("uglify", config);
};
