//https://leetcode.com/problems/multiply-strings/
const addStrings = require("./addStrings");

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  const q = num1.length > num2.length ? num2 : num1;
  const m = num1.length > num2.length ? num1 : num2;
  const results = [];
  for (let i = q.length - 1; i >= 0; i--) {
    let s = 0;
    const r = [];
    let c = 0;
    for (let j = m.length - 1; j >= 0; j--) {
      const res = parseInt(q[i]) * parseInt(m[j]);
      r.push((res + c) % 10);
      c = parseInt((res + c) / 10);
    }

    results.push(
      (c || "") + r.reverse().join("") + "0".repeat(q.length - i - 1)
    );
  }

  const answer = add(results).replace(/^0+/, "");
  return answer.length ? answer : 0;
};

/**
 *
 * @param {string[]} param0
 * @returns {string}
 */
const add = ([num1, num2, ...rest]) => {
  if (!num2) return num1;
  if (rest.length === 0) return addStrings(num1, num2);
  return add([addStrings(num1, num2), ...rest]);
};

console.log(multiply("2".repeat(1000), "0".repeat(1000)));
console.log(multiply("498828660196", "840477629533"));
