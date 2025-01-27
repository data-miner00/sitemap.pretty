/**
 * The task to replace string values.
 * Refer to https://github.com/eruizdechavez/grunt-string-replace
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-string-replace");

  var config = {
    xsl: {
      files: [
        {
          expand: true,
          cwd: "<%= distPath %>",
          src: ["sitemap.xsl"],
          dest: "<%= distPath %>",
        },
      ],
      options: {
        replacements: [
          {
            pattern: "tailwind.css",
            replacement: "<%= grunt.file.read('dist/css-encoded.txt') %>",
          },
        ],
      },
    },
    xml: {
      files: [
        {
          expand: true,
          cwd: "<%= distPath %>",
          src: ["sitemap.xml"],
          dest: "<%= distPath %>",
        },
      ],
      options: {
        replacements: [
          {
            pattern: "sitemap.xsl",
            replacement: "<%= grunt.file.read('dist/xsl-encoded.txt') %>",
          },
        ],
      },
    },
  };

  grunt.config("string-replace", config);
};
