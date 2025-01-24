/**
 * The task for transpiling coffeescript file to javascript.
 * Refer to https://github.com/gruntjs/grunt-contrib-coffee
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-coffee");

  var config = {
    default: {
      options: {
        bare: true,
      },
      files: {
        "<%= distPath %>/util.js": "<%= srcPath %>/util.coffee",
      },
    },
  };

  grunt.config("coffee", config);
};
