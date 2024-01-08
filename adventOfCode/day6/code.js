/**
 * calculate the number of ways to win the race
 * @param {number} allowedRaceTime
 * @param {number} requiredDistance
 */
const waysToWinRace = (allowedRaceTime, requiredDistance) =>
  Array(parseInt(allowedRaceTime))
    .fill(0)
    .filter(
      (_, pressedTime) =>
        (allowedRaceTime - pressedTime) * pressedTime > requiredDistance
    ).length;

/**
 * Goes through all the races and get the ways to win all the races and multiply them
 * @param {Record<string, number>} timeDistanceMap
 */
const solve = (timeDistanceMap) => {
  return Object.entries(timeDistanceMap).reduce(
    (acc, [allowedRaceTime, requiredDistance]) =>
      acc * waysToWinRace(parseInt(allowedRaceTime), requiredDistance),
    1
  );
};

console.log(
  solve({
    40: 233,
    82: 1011,
    84: 1110,
    92: 1487,
  })
);
console.log(solve({ 40828492: 233101111101487 }));
