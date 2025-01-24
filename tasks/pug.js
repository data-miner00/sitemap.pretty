/**
 * The task for transpiling Pug.js to HTML.
 * Refer to https://github.com/gruntjs/grunt-contrib-pug
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-pug");

  var config = {
    default: {
      compile: {
        data: {
          debug: false,
        },
      },
      files: {
        "dist/index.html": "src/index.pug",
      },
    },
  };

  grunt.config("pug", config);
};
