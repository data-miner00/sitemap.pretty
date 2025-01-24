/**
 * The task to compress artifacts.
 * Refer to https://github.com/gruntjs/grunt-contrib-compress
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-compress");

  var config = {
    all: {
      options: {
        archive: "<%= zipPath %>/artifact.zip",
      },
      files: [
        {
          // Error faced: unable to stat srcFile
          // Reference: https://stackoverflow.com/questions/28710187/unable-to-stat-srcfile-error-for-gruntcompress
          expand: true,
          cwd: "<%= distPath %>/",
          src: ["**"],
          dest: "subfolder/",
        },
      ],
    },
  };

  grunt.config("compress", config);
};
