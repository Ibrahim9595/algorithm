/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = (num, k) => {
  num
    .split("")
    .map((el) => parseInt(el))
    .reduce((p, c) => {
        p[p.length - 1] 
    }, [parseInt(num[0])]);
};
