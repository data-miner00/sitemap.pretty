/**
 * The task for copying files.
 * Refer to https://github.com/gruntjs/grunt-contrib-copy
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-copy");

  var config = {
    withcss: {
      expand: true,
      cwd: "<%= srcPath %>",
      src: "**",
      dest: "<%= distPath %>",
    },
    excludecss: {
      files: [
        {
          src: [
            "<%= srcPath %>/index.html",
            "<%= srcPath %>/sitemap.xml",
            "<%= srcPath %>/sitemap.xsl",
          ],
          dest: "<%= distPath %>/",
          filter: "isFile",
        },
      ],
    },
  };

  grunt.config("copy", config);
};
