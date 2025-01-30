var SRC_FOLDER_PATH = "src",
  DIST_FOLDER_PATH = "dist",
  ARTIFACTS_FOLDER_PATH = "artifacts";

/**
 * The task to declare globally usable variables.
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {
  grunt.config("root", "./");
  grunt.config("srcPath", "<%= root %>" + SRC_FOLDER_PATH);
  grunt.config("distPath", "<%= root %>" + DIST_FOLDER_PATH);
  grunt.config("zipPath", "<%= root %>" + ARTIFACTS_FOLDER_PATH);
};

module.exports.SRC_FOLDER_PATH = SRC_FOLDER_PATH;
module.exports.DIST_FOLDER_PATH = DIST_FOLDER_PATH;
module.exports.ARTIFACTS_FOLDER_PATH = ARTIFACTS_FOLDER_PATH;
