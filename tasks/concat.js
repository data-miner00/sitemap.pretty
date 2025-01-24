/**
 * The task for concatenating files.
 * Refer to https://github.com/gruntjs/grunt-contrib-concat
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-concat");

  var config = {
    js: {
      options: {
        banner: "void function(){'use strict';\n",
        footer: "\n}();",
      },
      src: ["<%= srcPath %>/*.js"],
      dest: "<%= distPath %>/app.js",
    },
    css: {
      src: ["<%= srcPath %>/styles/*.css"],
      dest: "<%= distPath %>/styles.css",
    },
  };

  grunt.config("concat", config);
};
