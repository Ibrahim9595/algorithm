const fs = require('fs');

/**
 *
 * @param {number} k
 * @param {number[]} arr
 */
function pairsFn(k, arr) {
	const map = arr.reduce((p, c) => Object.assign(p, { [c]: true }), {});

	return Object.keys(map).reduce(
		(p, key) => (map[parseInt(key) + k] ? p + 1 : p),
		0
	);
}

/**
 * https://www.hackerrank.com/challenges/pairs/problem?isFullScreen=true
 * @param {number} k
 * @param {number[]} arr
 * @returns {number} number of pairs that has difference k
 */
function pairs(k, arr) {
	let pairsCount = 0;
	const found = {};

	for (let c of arr) {
		found[c] = true;
	}

	for (let i of Object.keys(found)) {
		if (found[parseInt(i) + k]) pairsCount += 1;
	}

	return pairsCount;
}

const [k, numbers] = fs.readFileSync('test.txt').toString().split('\n');

console.log(
	pairsFn(
		parseInt(k),
		numbers.split(' ').map((el) => parseInt(el))
	)
);
