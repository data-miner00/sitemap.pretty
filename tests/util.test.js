var assert = require("node:assert");
var { test } = require("node:test");
var fs = require("node:fs");

var content = fs.readFileSync("dist/util.js").toString();
eval(content);

[
  {
    number: 5,
    expected: 25,
  },
  {
    number: 10,
    expected: 100,
  },
].forEach((testCase) => {
  test(`Number ${testCase.number} square should be ${testCase.expected}`, () => {
    var actual = square(testCase.number);
    assert(actual, testCase.expected);
  });
});

[
  {
    number: 5,
    expected: 125,
  },
  {
    number: 10,
    expected: 1000,
  },
].forEach((testCase) => {
  test(`Number ${testCase.number} cube should be ${testCase.expected}`, () => {
    var actual = cube(testCase.number);
    assert(actual, testCase.expected);
  });
});
