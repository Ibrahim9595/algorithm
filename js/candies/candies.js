/**
 *https://www.hackerrank.com/challenges/candies/problem?h_r=internal-search
 * @param {number} n
 * @param {number[]} arr
 */
const candies = (n, arr) => {
	const memo = new Array(arr.length).fill(1);

	for (let i = 1; i < arr.length; i++) {
		memo[i] = arr[i - 1] < arr[i] ? memo[i - 1] + 1 : memo[i];
	}

	for (let i = arr.length - 2; i >= 0; i--) {
		memo[i] =
			arr[i + 1] < arr[i] ? Math.max(memo[i + 1] + 1, memo[i]) : memo[i];
	}

	return memo.reduce((p, c) => p + c, 0);
};

console.log(candies(10, [1, 2, 2]));
