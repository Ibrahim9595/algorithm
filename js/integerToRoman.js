//https://leetcode.com/problems/integer-to-roman/
const intToRomanElement = (base, num) => {
  const map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  const fromUnit = () => map[base].repeat(num);

  const fromFifth = () =>
    num > 5
      ? `${map[base * 5]}${map[base].repeat(num - 5)}`
      : `${map[base].repeat(5 - num)}${map[base * 5]}`;

  const fromTenth = () =>
    10 - num === 1
      ? `${map[base].repeat(10 - num)}${map[base * 10]}`
      : "_".repeat(100);

  const transformed = [fromUnit(), fromFifth(), fromTenth()];
  transformed.sort((a, b) => a.length - b.length);
  return transformed[0];
};

const intToRoman = (num) => {
  const l = num.toString().length - 1;
  return num
    .split("")
    .map((el, i) => intToRomanElement(10 ** (l - i), el))
    .join("");
};

["3", "5", "9", "58", "1994", "3999"].forEach((el) =>
  console.log(intToRoman(el))
);
