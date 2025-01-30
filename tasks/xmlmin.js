var { existsSync } = require("node:fs"),
  { join } = require("node:path"),
  { DIST_FOLDER_PATH } = require("./variables"),
  xslFile = "sitemap.xsl",
  xslMinFile = "sitemap.min.xsl",
  distFolder = DIST_FOLDER_PATH,
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
        if (!existsSync(join(distFolder, xslFile))) {
          grunt.warn(`The file '${xslFile}' is not found.`);
          done(false);
          return;
        }
        var content = grunt.file.read(join(distFolder, xslFile), {
          encoding: null,
        });

        var minifiedXML = minifyXML(content.toString());

        grunt.file.write(join(distFolder, xslMinFile), minifiedXML);
        grunt.log.writeln(`Minified ${xslFile}`);
        if (verbose) grunt.log.writeln(`Content: ${xslFile}`);

        done(true);
      });
    }.bind(this)
  );
};
