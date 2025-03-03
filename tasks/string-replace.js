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
          src: ["vogue.xsl", "basic.xsl"],
          dest: "<%= distPath %>",
        },
      ],
      options: {
        replacements: [
          {
            pattern: '<link rel="stylesheet" href="tailwind.css" />',
            replacement:
              "<style>\n<%= grunt.file.read('dist/tailwind.min.css') %>\n</style>",
          },
        ],
      },
    },
  };

  grunt.config("string-replace", config);
};
