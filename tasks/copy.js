var path = require("node:path");

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
      src: ["index.html"],
      dest: "<%= distPath %>",
    },
    vogue: {
      expand: true,
      cwd: "<%= srcPath %>",
      src: ["sitemap.xml", "sitemapindex.xml", "vogue.xsl"],
      dest: "<%= distPath %>",
      rename: function (src, dest) {
        return renameAux(src, dest, "vogue");
      },
    },
    basic: {
      expand: true,
      cwd: "<%= srcPath %>",
      src: ["sitemap.xml", "sitemapindex.xml", "basic.xsl"],
      dest: "<%= distPath %>",
      rename: function (src, dest) {
        return renameAux(src, dest, "basic");
      },
    },
  };

  grunt.config("copy", config);

  function renameAux(src, dest, themeName) {
    var [filename, extension] = dest.split(".");
    var rename = filename + "-" + themeName + "." + extension;

    if (extension === "xsl") {
      var destination = path.join(src, dest);
      return destination;
    }

    grunt.log.writeln(`Renamed ${dest} to ${rename}.`);

    var destination = path.join(src, rename);

    return destination;
  }
};
