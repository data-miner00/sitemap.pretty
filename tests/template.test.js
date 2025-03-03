var assert = require("node:assert");
var { test } = require("node:test");
var { readFileSync } = require("node:fs");
var xslFiles = ["vogue.xsl", "basic.xsl"];

xslFiles.forEach((xslFile) => {
  test(`required templates exist in ${xslFile}`, () => {
    const content = readFileSync(`dist/${xslFile}`, "utf-8");
    const requiredTemplates = [
      'match="/"',
      'match="sitemap:urlset"',
      'match="sitemap:sitemapindex"',
      'name="format-date"',
    ];

    requiredTemplates.forEach((template) => {
      assert.ok(content.includes(template), `Missing template: ${template}`);
    });
  });
});
