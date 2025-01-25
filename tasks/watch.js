/**
 * The task for watching Grunt project files.
 * Refer to https://github.com/gruntjs/grunt-contrib-watch
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");

  var config = {
    default: {
      files: ["<%= srcPath %>/**"],
      tasks: ["copy"],
    },
  };

  grunt.config("watch", config);
};
