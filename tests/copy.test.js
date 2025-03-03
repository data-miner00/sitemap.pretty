var assert = require("node:assert");
var { test } = require("node:test");
var { existsSync } = require("node:fs");

[
  "basic.xsl",
  "basic-encoded.txt",
  "sitemap-basic.xml",
  "sitemapindex-basic.xml",
  "vogue.xsl",
  "vogue-encoded.txt",
  "sitemap-vogue.xml",
  "sitemapindex-vogue.xml",
  "index.html",
  "tailwind.min.css",
].forEach((file) => {
  test(`${file} found in dist folder`, () => {
    assert.equal(existsSync(`dist/${file}`), true);
  });
});
