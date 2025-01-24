/**
 * The task for starting HTTP server.
 * Refer to https://github.com/gruntjs/grunt-contrib-connect
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-connect");

  var option = {
    server: {
      options: {
        port: 8888,
        base: "dist",
        keepalive: true,
      },
    },
  };

  grunt.config("connect", option);
};
