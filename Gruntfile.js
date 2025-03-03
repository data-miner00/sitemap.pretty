/**
 * The entry for Grunt task runner.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  });

  grunt.loadTasks("tasks");

  grunt.registerTask("default", ["copy", "string-replace:xsl", "base64:xsl"]);

  grunt.registerTask("dev", ["copy", "connect:server", "watch"]);
};
