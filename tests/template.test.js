var assert = require("node:assert");
var { test } = require("node:test");
var { readFileSync } = require("node:fs");

test("required templates exist in XSL", () => {
  const content = readFileSync("dist/sitemap.xsl", "utf-8");
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
