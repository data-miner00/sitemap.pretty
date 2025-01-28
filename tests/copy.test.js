var assert = require("node:assert");
var { test } = require("node:test");
var { existsSync } = require("node:fs");

[
  "sitemap.xsl",
  "sitemap.xml",
  "index.html",
  "tailwind.min.css",
  "css-encoded.txt",
  "xsl-encoded.txt",
].forEach((file) => {
  test(`${file} found in dist folder`, () => {
    assert.equal(existsSync(`dist/${file}`), true);
  });
});
