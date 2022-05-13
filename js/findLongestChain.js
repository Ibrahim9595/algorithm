/**
 * https://leetcode.com/problems/maximum-length-of-pair-chain/
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = (pairs) => {
	const [_, res] = pairs
		.sort(([_, b], [__, d]) => b - d)
		.reduce(
			([b, acc], [c, d]) => [c > b ? d : b, c > b ? acc + 1 : acc],
			[-1001, 0]
		);

	return res;
};

console.log(
	findLongestChain([
		[-10, -8],
		[8, 9],
		[-5, 0],
		[6, 10],
		[-6, -4],
		[1, 7],
		[9, 10],
		[-4, 7],
	])
);
