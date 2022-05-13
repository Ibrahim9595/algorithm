/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
	const memo = new Array(coins.length + 1)
		.fill(0)
		.map(() =>
			new Array(amount + 1).fill(0).map((_, i) => (i === 0 ? 1 : 0))
		);

	for (let c = 1; c <= coins.length; c++) {
		for (let a = 1; a <= amount; a++) {
			memo[c][a] =
				(memo[c][a - coins[c - 1]] || 0) + (memo[c - 1][a] || 0);
		}
	}

	return memo[coins.length][amount];
};

console.log(
	// change(100, [3, 5, 7, 8, 9, 10, 11])
	change(500, [1, 2, 5])
);
