//https://leetcode.com/problems/combination-sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const answer = [];

  const backTrack = (target, acc, memo) => {
    for (let i = 0; i < candidates.length; i++) {
      const newAcc = [...acc, candidates[i]];
      newAcc.sort();

      if (target - candidates[i] === 0 && !memo[newAcc]) {
        answer.push(newAcc);
        memo[newAcc] = true;
      } else if (target - candidates[i] > 0)
        backTrack(target - candidates[i], newAcc, memo);
    }
  };

  backTrack(target, [], {});
  return answer;
};
