/**
 * The task for copying files.
 * Refer to https://github.com/gruntjs/grunt-contrib-copy
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-copy");

  var config = {
    default: {
      expand: true,
      cwd: "<%= srcPath %>",
      src: [
        "index.html",
        "sitemap.xml",
        "sitemap.xsl",
        "sitemapindex.xml",
        "basic.xsl",
      ],
      dest: "<%= distPath %>",
    },
  };

  grunt.config("copy", config);
};
