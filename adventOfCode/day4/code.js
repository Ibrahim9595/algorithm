import { getData, sum } from "../utils.js";

const data = getData("./input.txt");

/**
 *
 * @param {string[]} data
 * @returns {string[]}
 */
const parseData = (data) => {
  return data.map((line) => {
    const [_, cards] = line.split(":");
    const [winningCards, elfCards] = cards.trim().split(" | ");

    const parseCards = (cards) =>
      cards
        .split(" ")
        .filter((el) => el !== "")
        .map((el) => Number(el));

    return {
      winningCards: parseCards(winningCards),
      elfCards: parseCards(elfCards),
    };
  });
};
/**
 *
 * @param {{winningCards: string[], elfCards: string[]}[]}
 * @returns {number}
 */
const findCardsCount = ({ winningCards, elfCards }) => {
  const winningSet = new Set(winningCards);

  return elfCards.reduce((p, c) => {
    return winningSet.has(c) ? p + 1 : p;
  }, 0);
};

/**
 *
 * @param {{winningCards: string[], elfCards: string[]}[]} cards
 * @returns {number}
 */
const findScore = (cards) => {
  const winningCardsCount = findCardsCount(cards);
  return winningCardsCount > 0 ? 2 ** (winningCardsCount - 1) : 0;
};

/**
 *
 * @param {string} data
 * @returns {number}
 */
const solve1 = (data) => sum(parseData(data).map(findScore));

/**
 *
 * @param {string} data
 * @returns {number}
 */
const solve2 = (data) => {
  const parsedData = parseData(data);
  const frequencies = Array(parsedData.length).fill(1);

  parsedData.map(findCardsCount).reduce((frequencies, winningCount, index) => {
    Array(winningCount)
      .fill(0)
      .forEach((_, i) => {
        frequencies[i + index + 1] += frequencies[index];
      });

    return frequencies;
  }, frequencies);

  return sum(frequencies);
};

console.log(solve1(data));
console.log(solve2(data));
