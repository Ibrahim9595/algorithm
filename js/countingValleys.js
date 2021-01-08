const updateValleysCount = ({ v, p }, dir) => {
  const newLevel = dir === "D" ? p - 1 : p + 1;
  return newLevel >= 0 && p < 0
    ? { v: v + 1, p: newLevel }
    : { v, p: newLevel };
};

/**
 *
 * @param {number} _
 * @param {string} path
 */
function countingValleys(_, path) {
  return path.split("").reduce(updateValleysCount, {
    p: 0,
    v: 0,
  }).v;
}

const s = countingValleys(8, "UDDDUDUU");
console.log(s);
