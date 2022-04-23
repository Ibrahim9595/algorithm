/**
 * https://www.hackerrank.com/challenges/equality-in-a-array/problem
 * @param {number[]} arr
 * @returns {number}
 */

function equalizeArray(arr) {
	const counts = arr.reduce(
		(p, c) => Object.assign(p, { [c]: (p[c] || 0) + 1 }),
		{}
	);

	const max = Object.values(counts).reduce((p, c) => (c > p ? c : p), -1);

	return arr.length - max;
}

console.log(equalizeArray([3, 3, 2, 1, 3]));
