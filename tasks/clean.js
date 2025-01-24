/**
 * The task for cleaning files and directories.
 * Refer to https://github.com/gruntjs/grunt-contrib-clean
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  "use strict";
  grunt.loadNpmTasks("grunt-contrib-clean");

  var config = ["<%= distPath %>", "<%= zipPath %>"];

  grunt.config("clean", config);
};
