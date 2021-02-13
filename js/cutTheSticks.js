//https://www.hackerrank.com/challenges/cut-the-sticks/problem

/**
 *
 * @param {number[]} arr
 */
const cutTheSticks = (arr) => {
  const map = arr.reduce((p, c) => ({ ...p, [c]: (p[c] || 0) + 1 }), {});
  const temp = Object.keys(map)
    .sort((a, b) => a - b)
    .reduce((p, c) => [...p, p[p.length - 1] - map[c]], [arr.length]);

  return temp.slice(0, temp.length - 1);
};

console.log(cutTheSticks(`5 4 4 2 2 8`.split(" ")));
