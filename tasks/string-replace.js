/**
 * The task to replace string values.
 * Refer to https://github.com/eruizdechavez/grunt-string-replace
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-string-replace");

  var config = {
    replaceTask: {
      files: [
        {
          expand: true,
          cwd: "<%= distPath %>",
          src: ["**/**"],
          dest: "<%= distPath %>",
        },
      ],
      options: {
        replacements: [
          {
            pattern: "{{SECRETS}}",
            replacement: "Hi, this is secret",
          },
          {
            pattern: "{{SECRETS2}}",
            replacement: "$$$$ Hi, this is secret $$$$",
          },
        ],
      },
    },
  };

  grunt.config("string-replace", config);
};
