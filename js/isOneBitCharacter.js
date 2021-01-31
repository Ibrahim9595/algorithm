//https://leetcode.com/problems/1-bit-and-2-bit-characters/
/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = (bits) => {
  for (var i = 0; i < bits.length - 1; i++) {
    if (bits[i] === 1) i++;
  }

  return bits[i] === 0 ? true : false;
};

console.log(isOneBitCharacter([1, 0, 0, 1, 1, 1, 0, 0]));
