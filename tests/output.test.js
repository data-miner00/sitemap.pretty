var assert = require("node:assert");
var { test } = require("node:test");
var { readFileSync } = require("node:fs");

test("build output contains required elements", () => {
  const content = readFileSync("dist/vogue.xsl", "utf-8");
  const requiredElements = [
    '<meta charset="utf-8"',
    'role="document"',
    "aria-label",
  ];

  requiredElements.forEach((element) => {
    assert.ok(
      content.includes(element),
      `Missing required element: ${element}`
    );
  });
});

test("build output does not contains replaced elements", () => {
  const content = readFileSync("dist/vogue.xsl", "utf-8");
  const replacedElements = ['<link rel="stylesheet"'];

  replacedElements.forEach((element) => {
    assert.ok(
      !content.includes(element),
      `Missing required element: ${element}`
    );
  });
});
