var assert = require("node:assert");
var { test } = require("node:test");
var { readFileSync } = require("node:fs");

[
  {
    name: "css-encoded.txt",
    expected: "data:text/css;base64,"
  },
  {
    name: "xsl-encoded.txt",
    expected: "data:text/xsl;base64,"
  }
].forEach(({ name, expected }) => {
  test(`Base 64 encoded ${name} contains correct header`, () => {
    const content = readFileSync(`dist/${name}`, "utf-8");
    assert.ok(content.startsWith(expected));
  });
});
