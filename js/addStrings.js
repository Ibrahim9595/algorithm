/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  const [max, min] = Math.max(num1.length > num2.length)
    ? [num1, "0".repeat(num1.length - num2.length) + num2]
    : [num2, "0".repeat(num2.length - num1.length) + num1];

  let c = 0;
  let sum = 0;
  let res = [];
  for (let i = max.length - 1; i >= 0; i--) {
    sum = parseInt(max[i]) + parseInt(min[i]);
    res.push((sum + c) % 10);
    c = parseInt((sum + c) / 10);
  }
  return (c > 0 ? [...res, c] : res).reverse().join("");
};

module.exports = addStrings;
