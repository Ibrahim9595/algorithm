import { getData } from "../utils.js";
const data = getData("./input.txt");
const DIRs = [
  [0, 1],
  [0, -1],
  [1, 0],
  [1, 1],
  [1, -1],
  [-1, 0],
  [-1, 1],
  [-1, -1],
];

/**
 *
 * @param {string[][]} grid
 * @param {number} row
 * @param {number} col
 * @returns {number[][]}
 */
const takeNumber = (grid, row, col) => {
  return DIRs.some(([_row, _col]) => {
    const next = grid[row + _row]?.[col + _col];
    return next && isNaN(next) && next !== ".";
  }, []);
};

const constructCurrent = ({ acc, take } = {}) => {
  return { acc: acc ?? 0, take: take ?? false };
};

/**
 *
 * @param {string[][]} grid
 * @returns {number}
 */
const getSolution = (grid) => {
  let sum = 0;
  let current = constructCurrent();
  for (let row = 0; row < grid.length; row++) {
    sum += current.take
      ? current.negative
        ? -1 * current.acc
        : current.acc
      : 0;
    current = constructCurrent();
    for (let col = 0; col < grid[row].length; col++) {
      const el = grid[row][col];

      if (!isNaN(el)) {
        current = constructCurrent({
          acc: current.acc * 10 + Number(el),
          take: current.take || takeNumber(grid, row, col),
        });
      } else {
        sum += current.take
          ? current.negative
            ? -1 * current.acc
            : current.acc
          : 0;
        current = constructCurrent();
      }
    }
  }

  return sum;
};

const getAstrict = (grid, row, col) => {
  return DIRs.flatMap(([_row, _col]) => {
    const next = grid[row + _row]?.[col + _col];

    return next && next === "*" ? [[row + _row, col + _col]] : [];
  });
};

/**
 *
 * @param {string[]} grid
 * @returns {number}
 */
const getSolution2 = (grid) => {
  const gearMap = grid.reduce(
    (gearMap, line, row) =>
      Array.from(line.matchAll(/\d+/g)).reduce(
        (_gearMap, number) =>
          Array(number.at(0).length)
            .fill(0)
            .flatMap((_, index) => getAstrict(grid, row, number.index + index))
            .reduce(
              (p, el) =>
                Object.assign(p, {
                  [el]: p[el]
                    ? p[el].add(number.at(0))
                    : new Set([number.at(0)]),
                }),
              _gearMap
            ),
        gearMap
      ),
    {}
  );

  console.log(gearMap);

  return Object.values(gearMap).reduce((sum, gears) => {
    const els = Array.from(gears);
    return els.length === 2 ? sum + els.reduce((prod, c) => prod * c, 1) : sum;
  }, 0);
};

// getSolution(data.map((el) => el.split("")))
console.log(getSolution2(data));
