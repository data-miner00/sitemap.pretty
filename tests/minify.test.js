var assert = require("node:assert");
var { test } = require("node:test");
var { statSync } = require("node:fs");

test("minified css file is smaller than source file", () => {
  var originalSize = statSync("dist/tailwind.css").size;
  var minifiedSize = statSync("dist/tailwind.min.css").size;
  assert.ok(minifiedSize < originalSize);
});

test("minified xsl file is smaller than source file", () => {
  var originalSize = statSync("dist/sitemap.xsl").size;

  // Minified xsl file size minus minified css file size because the css is encoded in the xsl file
  var minifiedSize = statSync("dist/sitemap.min.xsl").size - statSync("dist/tailwind.min.css").size;
  assert.ok(minifiedSize < originalSize);
});
