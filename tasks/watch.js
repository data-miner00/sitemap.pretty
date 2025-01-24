/**
 * The task for watching Grunt project files.
 * Refer to https://github.com/gruntjs/grunt-contrib-watch
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");

  var config = {
    js: {
      files: ["<%= srcPath %>/*.js"],
      tasks: ["concat-js-only"],
    },
    css: {
      files: ["<%= srcPath %>/styles/*.css"],
      tasks: ["concat-css-only"],
    },
  };

  grunt.config("watch", config);
};
