/**
 *
 * @param {number[]} keyboards
 * @param {number[]} drives
 * @param {number} b
 */
function getMoneySpent(keyboards, drives, b) {
  let max = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const s = keyboards[i] + drives[j];
      if (s <= b && s > max) max = s;
    }
  }

  return max;
}

console.log(
  getMoneySpent(
    new Array(1000).fill(0).map((_, i) => i),
    new Array(1000).fill(0).map((_, i) => i),
    10
  )
);
