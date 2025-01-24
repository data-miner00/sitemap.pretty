var sass = require("node-sass");

/**
 * The task for transpiling Sass to CSS.
 * Refer to https://github.com/sindresorhus/grunt-sass
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-sass");

  var config = {
    options: {
      implementation: sass,
      sourceMap: true,
    },
    build: {
      files: [
        {
          src: "<%= srcPath %>/styles/sass/main.sass",
          dest: "<%= distPath %>/sass.css",
        },
      ],
    },
  };

  grunt.config("sass", config);
};
