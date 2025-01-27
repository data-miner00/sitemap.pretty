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

  grunt.registerTask("default", [
    "copy",
    "base64:css",
    "string-replace:xsl",
    "base64:xsl",
    "string-replace:xml",
  ]);

  grunt.registerTask("dev", ["copy", "connect:server", "watch"]);
};
