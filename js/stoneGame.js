/**
 * https://leetcode.com/problems/stone-game/
 * @param {number[]} piles
 * @return {boolean}
 */
const stoneGame = (piles) => {
	const memo = {};

	const recurse = (p1, p2, start, end, current) => {
		const key = piles.slice(start, end + 1).join('') + current;
		if (memo[key] !== undefined) return memo[key];

		if (start === end) memo[key] = p1 > p2;
		else {
			memo[key] =
				recurse(
					current ? p1 + piles[start] : p1,
					!current ? p2 + piles[start] : p2,
					start + 1,
					end,
					!current
				) ||
				recurse(
					current ? p1 + piles[end] : p1,
					!current ? p2 + piles[end] : p2,
					start,
					end - 1,
					!current
				);
		}

		return memo[key];
	};
	return recurse(0, 0, 0, piles.length - 1, true);
};

// note that alice can always win so
// const stoneGame = () => true;
// is a correct solution
