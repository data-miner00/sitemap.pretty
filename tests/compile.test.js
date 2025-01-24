var assert = require("node:assert");
var { test } = require("node:test");
var fs = require("node:fs");

var content = fs.readFileSync("src/compile.js").toString();
eval(content);

[
  { argument1: "hello", argument2: "world", expected: "helloworld" },
  { argument1: "hi", argument2: "mom", expected: "himom" },
].forEach((testCase) => {
  test(`${testCase.argument1} and ${testCase.argument2} with prefix should be ${testCase.expected}`, () => {
    var actual = compileInputs(testCase.argument1, testCase.argument2, "");
    assert.equal(actual, testCase.expected);
  });
});
