import { getData, sum } from "../utils.js";

const data = getData("./input.txt");

/**
 *
 * @param {string} line
 * @returns {number[]}
 */
const handleLine = (line) =>
  line
    .split("")
    .filter((el) => !isNaN(el))
    .map((el) => parseInt(el));

/**
 *
 * @param {string} line
 * @returns {number[]}
 */
const parseLine = (line) => {
  const map = {
    one: 1,
    1: 1,
    two: 2,
    2: 2,
    three: 3,
    3: 3,
    four: 4,
    4: 4,
    five: 5,
    5: 5,
    six: 6,
    6: 6,
    seven: 7,
    7: 7,
    eight: 8,
    8: 8,
    nine: 9,
    9: 9,
  };

  let result = [];

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length + 1; j++) {
      const substr = line.slice(i, j);
      if (map[substr]) result.push(map[substr]);
    }
  }

  return result;
};

/**
 *
 * @param {string[]} data
 * @returns {number}
 */
const handleFileData = (data) =>
  data.map((line) => {
    const parsedLine = parseLine(line);
    return parsedLine.at(0) * 10 + parsedLine.at(-1);
  });

console.log(sum(handleFileData(data)));
