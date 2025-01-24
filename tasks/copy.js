/**
 * The task for copying files.
 * Refer to https://github.com/gruntjs/grunt-contrib-copy
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-copy");

  var config = {
    license: {
      files: [
        {
          src: ["<%= root %>LICENSE"],
          dest: "<%= distPath %>/",
          filter: "isFile",
        },
      ],
    },
  };

  grunt.config("copy", config);
};
