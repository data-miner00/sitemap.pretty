/**
 * The entry for Grunt task runner.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  });

  // Register tasks
  grunt.loadTasks("tasks");

  // Run standalone concat tasks
  grunt.registerTask("concat-js-only", ["concat:js"]);
  grunt.registerTask("concat-css-only", ["concat:css"]);

  grunt.registerTask("default", [
    "clean",
    "pug",
    "coffee",
    "concat",
    "string-replace",
    "jshint",
    "sass",
    "less",
    "cssmin",
    "uglify",
    "copy",
    "compress",
  ]);
};
