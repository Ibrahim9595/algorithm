import { parsedData } from "./code.js";

/**
 *
 * @param {number[][]} sourceRanges
 * @param {{ sourceStart: number, destinationStart: number, length: number }[]} mapping
 */
const mapSourceRangesToDestination = (sourceRanges, mapping) => {
  return sourceRanges.reduce((destinationRanges, [start, end]) => {
    const { intersections, minStart, maxEnd } = mapping.reduce(
      (data, { sourceStart, destinationStart, length }) => {
        const sourceEnd = sourceStart + length;
        const noIntersection =
          (sourceStart > start && sourceStart > end) ||
          (start >= sourceEnd && end > sourceEnd);

        if (noIntersection) return data;

        const diff = destinationStart - sourceStart;
        return {
          minStart: Math.min(data.minStart, sourceStart),
          maxEnd: Math.max(data.maxEnd, sourceEnd),
          intersections: data.intersections.concat([
            [
              diff + Math.max(start, sourceStart),
              diff + Math.min(end, sourceEnd),
            ],
          ]),
        };
      },
      { intersections: [], minStart: Infinity, maxEnd: -Infinity }
    );

    return destinationRanges
      .concat(
        minStart > start && minStart !== Infinity ? [[start, minStart]] : []
      )
      .concat(intersections.length > 0 ? intersections : [[start, end]])
      .concat(maxEnd < end && maxEnd !== -Infinity ? [[maxEnd, end]] : []);
  }, []);
};

/**
 *
 * @param {number[]} range
 * @param {{ sourceStart: number, destinationStart: number, length: number }[]} mappings
 * @returns
 */
const mapSeedsRangeToLocations = (range, mappings) => {
  return mappings.reduce(
    (sourceRanges, mapping) =>
      mapSourceRangesToDestination(sourceRanges, mapping),
    [range]
  );
};

/**
 *
 * @param {number[][]} locationRanges
 * @returns {number}
 */
const getMinLocationFromRanges = (locationRanges) =>
  locationRanges.reduce((p, [start]) => Math.min(p, start), Infinity);

/**
 *
 * @param {number[]} seeds
 */
const parseSeedsRanges = (seeds) =>
  seeds.flatMap((el, index) =>
    index % 2 === 0 ? [[el, el + parsedData.seeds[index + 1]]] : []
  );

/**
 *
 * @param {{seedsRanges: number[][], mappings: { sourceStart: number, destinationStart: number, length: number }[]}} parsedData
 */
const solve2 = ({ seedsRanges, mappings }) => {
  return seedsRanges.reduce(
    (p, seedsRange) =>
      Math.min(
        p,
        getMinLocationFromRanges(mapSeedsRangeToLocations(seedsRange, mappings))
      ),
    Infinity
  );
};

console.log(
  solve2({ ...parsedData, seedsRanges: parseSeedsRanges(parsedData.seeds) })
);
