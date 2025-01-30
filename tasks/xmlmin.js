var { existsSync } = require("node:fs"),
  { join } = require("node:path"),
  xslFile = "sitemap.xsl",
  verbose = false;

/**
 * The task for minifying XML
 * Refer to https://github.com/kristian/minify-xml
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.registerTask(
    "xmlmin",
    function () {
      var done = grunt.task.current.async();

      import("minify-xml").then(({ default: minifyXML }) => {
        if (!existsSync(join("dist", xslFile))) {
          grunt.warn(`The file '${xslFile}' is not found.`);
          done(false);
          return;
        }
        var content = grunt.file.read(join("dist", xslFile), {
          encoding: null,
        });

        var minifiedXML = minifyXML(content.toString());

        grunt.file.write(join("dist", "sitemap.min.xsl"), minifiedXML);
        grunt.log.writeln(`Minified ${xslFile}`);
        if (verbose) grunt.log.writeln(`Content: ${xslFile}`);

        done(true);
      });
    }.bind(this)
  );
};
