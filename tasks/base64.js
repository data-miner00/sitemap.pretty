var { existsSync } = require("node:fs");
var { join } = require("node:path");
var cssFile = "tailwind.min.css",
  xslFile = "sitemap.xsl";
var verbose = false;

/**
 * The task for encoding to base 64.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.registerTask("base64:xsl", function () {
    if (!existsSync(join("dist", xslFile))) {
      grunt.warn(`The file '${xslFile}' is not found.`);
      return;
    }

    var content = grunt.file.read(join("dist", xslFile), {
      encoding: null,
    });

    var base64encoded = content.toString("base64");
    var xslPadded = "data:text/xsl;base64," + base64encoded;

    grunt.file.write(join("dist", "xsl-encoded.txt"), xslPadded);
    grunt.log.writeln(`Base 64 encoded ${xslFile}`);
    if (verbose) grunt.log.writeln(`Content: ${xslPadded}`);
  });
};
