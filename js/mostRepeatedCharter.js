/**
 *
 * @param {string} s
 */
const mostRepeatedCharter = (s) => {
  const { char } = s.split("").reduce(
    ({ counters, char, val }, c) => {
      const newVal = (counters[c] || 0) + 1;
      return {
        counters: Object.assign(counters, { [c]: newVal }),
        char: newVal > val ? c : char,
        val: newVal > val ? newVal : val,
      };
    },
    { counters: {}, char: "", val: -1 }
  );

  return char;
};

console.log(mostRepeatedCharter("abaccaccxxxxx"));
