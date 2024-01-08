import { getData, sum } from "../utils.js";

const data = getData("./input.txt");

/**
 *
 * @param {string} line
 * @returns {string}
 */
const handleLine = (line) => {
  const maximums = { red: 12, green: 13, blue: 14 };
  const [day, cubes] = line.split(":");
  const id = Number(day.replace("Game ", ""));

  const isValid = cubes.split(";").every((game) => {
    return game.split(",").every((cube) => {
      const [value, key] = cube.trim().split(" ");
      return maximums[key] >= Number(value);
    });
  });

  return isValid ? id : 0;
};

/**
 *
 * @param {string} line
 * @returns {string}
 */
const handleLine2 = (line) => {
  const [day, cubes] = line.split(":");

  const mins = cubes.split(";").reduce((p, game) => {
    game.split(",").forEach((cube) => {
      const [value, key] = cube.trim().split(" ");

      p[key] = Math.max(p[key] ?? 0, value);
    });

    return p;
  }, {});

  return Object.values(mins).reduce((p, c) => p * c, 1);
};

console.log(sum(data.map(handleLine)));
console.log(sum(data.map(handleLine2)));
