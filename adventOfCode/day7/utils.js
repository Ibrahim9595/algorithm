import { readFileSync } from "fs";

export const data = readFileSync("./input.txt");

/**
 * parse the file data into a list of tuples (hand, bid)
 * @param {string} rawFile
 * @returns {string[][]}
 */
export const parseData = (rawFile) =>
  rawFile
    .toString()
    .split("\n")
    .map((el) => el.split(" "));

/**
 *
 * @param {string} hand
 * @returns {{sorted: number[][], uniqueCounts: Record<string, number>}}
 */
export const analyzeHand = (hand) => {
  const uniqueCounts = hand
    .split("")
    .reduce((acc, c) => ({ ...acc, [c]: (acc[c] ?? 0) + 1 }), {});
  return {
    sorted: Object.entries(uniqueCounts).sort((a, c) => c[1] - a[1]),
    uniqueCounts,
  };
};

/**
 *
 * @param {string} hand
 * @returns {{sorted: number[][], uniqueCounts: Record<string, number>}}
 */
export const analyzeHand2 = (hand) => {
  const { sorted, uniqueCounts } = analyzeHand(hand);

  const el = sorted.filter((el) => el[0] !== "J");

  if (el.length === 0) return { sorted, uniqueCounts };

  const [key, value] = el[0];

  return {
    sorted: Object.entries({
      ...uniqueCounts,
      [key]: value + (uniqueCounts.J ?? 0),
    })
      .filter((el) => el[0] !== "J")
      .sort((a, c) => c[1] - a[1]),
    uniqueCounts,
  };
};

/**
 *
 * @param {string} hand1
 * @param {string} hand2
 * @param {Function} cardsScoreMap
 * @returns {number}
 */
export const compare2Hands = (hand1, hand2, cardsScoreMap, analyzeHand) => {
  const [class1, class2] = [
    getHandClass(hand1, analyzeHand),
    getHandClass(hand2, analyzeHand),
  ];

  const higherHand = Array(hand1.length)
    .fill(0)
    .reduce((p, _, i) => {
      const score1 = cardsScoreMap[hand1[i]] ?? Number(hand1[i]);
      const score2 = cardsScoreMap[hand2[i]] ?? Number(hand2[i]);

      return p !== 0 ? p : score1 - score2;
    }, 0);

  return class1 === class2 ? higherHand : class1 - class2;
};

/**
 *
 * @param {string} hand
 * @returns {number}
 */
const getHandClass = (hand, analyzeHand) => {
  const { sorted: list } = analyzeHand(hand);
  const sorted = list.map((el) => el[1]).join("");

  //   Five of a kind
  if (sorted === "5") return 7;
  //   Four of a kind
  if (sorted === "41") return 6;
  //   Full house
  if (sorted === "32") return 5;
  //   Three of a kind
  if (sorted === "311") return 4;
  //   Two pair
  if (sorted === "221") return 3;
  //   One pair
  if (sorted === "2111") return 2;

  //   High card
  return 1;
};

console.log(analyzeHand2("AJJJJ"));
