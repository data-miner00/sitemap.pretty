var assert = require("node:assert");
var { test } = require("node:test");

/**
 * Add two numbers.
 * @param {number} num1
 * @param {number} num2
 * @returns The sum.
 */
function add(num1, num2) {
  return num1 + num2;
}

test("2 + 3 equals 5", () => {
  assert.equal(5, add(2, 3));
});
