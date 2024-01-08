import { readFileSync } from "fs";

/**
 * @param { string } data
 */
const parseInput = (data) => {
  const [seeds, ...mappings] = data.toString().split("\n\n");

  return {
    seeds: seeds.split(": ")[1].split(" ").map(Number),
    mappings: mappings.map((mapping) =>
      mapping
        .split("\n")
        .slice(1)
        .map((el) => {
          const [destinationStart, sourceStart, length] = el
            .split(" ")
            .map(Number);
          return { destinationStart, sourceStart, length };
        })
    ),
  };
};

export const parsedData = parseInput(readFileSync("./input.txt"));

/**
 *
 * @param {number} value
 * @param {{ sourceStart: number, destinationStart: number, length: number }[]} mapping
 */
const mapSourceToDestination = (source, mapping) => {
  const match = mapping.find(
    ({ sourceStart, length }) =>
      source >= sourceStart && source <= sourceStart + length
  );

  return match ? match.destinationStart - match.sourceStart + source : source;
};

/**
 *
 * @param {number} seed
 * @param {{ sourceStart: number, destinationStart: number, length: number }[]} mappings
 * @returns
 */
const mapSeedToLocation = (seed, mappings) =>
  mappings.reduce(
    (source, mapping) => mapSourceToDestination(source, mapping),
    seed
  );

/**
 *
 * @param {{seeds: number[], mappings: { sourceStart: number, destinationStart: number, length: number }[]}} parsedData
 */
const solve1 = ({ seeds, mappings }) =>
  seeds.reduce(
    (minLocation, currentSeed) =>
      Math.min(minLocation, mapSeedToLocation(currentSeed, mappings)),
    Infinity
  );

console.log(solve1(parsedData));
