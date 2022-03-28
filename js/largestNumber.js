/**
 * https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
const largestNumberRec = (cost, target) => {
	const memo = {};
	const rec = (rem, str, i) => {
		if (memo[[cost[i - 1], rem]]) return memo[[cost[i - 1], rem]];

		if (rem === 0) return str;

		if (i === 0) return '0';

		const currCost = cost[i - 1];
		let max = '0';
		let j = 0;

		while (rem - currCost * j >= 0) {
			const val = rec(rem - currCost * j, str + `${i}`.repeat(j), i - 1);
			max = BigInt(val) > BigInt(max) ? val : max;
			j++;
		}

		memo[[cost[i - 1], rem]] = max;
		return memo[[cost[i - 1], rem]];
	};

	return rec(target, '', cost.length);
};

/**
 * https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
const largestNumber = (cost, target) => {
	const memo = { [target]: BigInt(0) };

	for (let t = target; t > 0; t--) {
		// This value is not reachable
		if (memo[t] === undefined) continue;

		const curr = memo[t];
		for (let c = cost.length; c > 0; c--) {
			const currCost = cost[c - 1];
			const val = curr * BigInt(10) + BigInt(c);
			if (t >= currCost) {
				memo[t - currCost] =
					val > (memo[t - currCost] || 0) ? val : memo[t - currCost];
			}
		}
	}

	return (memo[0] || 0).toString();
};
const cost = [2, 4, 2, 5, 3, 2, 5, 5, 4];
const target = 739;
const res = largestNumber(cost, target);
console.log(res, res.split('').reduce((p, c) => p + cost[c - 1], 0) === target);
