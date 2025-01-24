/**
 * The task for tutorial purpose tasks
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.registerTask("run", function () {
    console.log("Running from grunt");
  });

  grunt.registerTask("run2", function () {
    console.log("Running from grunt 2");
  });

  grunt.registerTask("test-env", ["run", "run2"]);
};
