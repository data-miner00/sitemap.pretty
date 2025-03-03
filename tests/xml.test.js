var assert = require("node:assert");
var { test } = require("node:test");
var { readFileSync } = require("node:fs");
var { DOMParser } = require("xmldom");
var xslFiles = ["vogue.xsl", "basic.xsl"];

xslFiles.forEach((xslFile) => {
  test(`${xslFile} has valid XML structure`, () => {
    const content = readFileSync(`dist/${xslFile}`, "utf-8");
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/xml");
    assert.equal(doc.getElementsByTagName("parsererror").length, 0);
  });
});
