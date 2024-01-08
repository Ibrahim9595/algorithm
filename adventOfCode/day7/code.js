import { sum } from "../utils.js";
import { compare2Hands, data, parseData, analyzeHand, analyzeHand2 } from "./utils.js";

/**
 * solve the first part
 * @param {string[][]} handBidsList
 * @returns {number}
 */
const solve = (handBidsList, cardsScoreMap, _getHandClass) => {
  return sum(
    handBidsList
      .sort((a, b) => compare2Hands(a[0], b[0], cardsScoreMap, _getHandClass))
      .map((el, i) => parseInt(el[1]) * (i + 1))
  );
};

console.log(
  solve(parseData(data), { A: 14, K: 13, Q: 12, J: 11, T: 10 }, analyzeHand)
);
console.log(
  solve(parseData(data), { A: 14, K: 13, Q: 12, J: 1, T: 10 }, analyzeHand2)
);
