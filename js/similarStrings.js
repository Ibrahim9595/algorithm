/**
 * https://www.hackerrank.com/challenges/similar-strings/problem
 * @param {string} s
 * @param {number[][]} queries
 * @returns {number[]}
 */
const similarStrings = (s, queries) =>
	queries.map((query) => similarStringsQuery(s, query));

/**
 * @param {string} s
 * @param {number} start
 * @param {number} length
 * @returns {string}
 */
const encodeString = (s, start, length) => {
	const m = {};
	const chars = [];
	for (let j = start; j < start + length; j++) {
		const el = s[j];
		if (m[el] === 0) {
			m[el] = 1;
		} else {
			m[el] = 0;
		}
		chars.push(el);
	}

	const code = chars.map((el) => (m[el] !== 0 ? m[el] : 0)).join('');

	return code;
};

/**
 * @param {string} s
 * @param {number[]} query
 * @returns {number}
 */
const similarStringsQuery = (s, [start, length]) => {
	const similar = {};
	for (let i = start - 1; i <= s.length - length; i++) {
		const code = encodeString(s, i, length);
		similar[code] = (similar[code] || 0) + 1;
	}

	return Object.values(similar).reduce((p, c) => (p > c ? p : c), 0);
};

const queries = `1 22
1 24
3 7
4 8
4 17
5 27
6 14
7 8
7 11
7 12
7 39
8 11
8 16
8 48
9 19
9 21
10 12
10 18
12 16
12 19
15 20
15 22
16 19
18 19
18 33
19 31
19 32
20 29
23 37
23 40
24 44
25 27
25 44
26 33
26 45
27 48
29 31
29 37
29 38
30 30
30 38
30 41
37 41
39 50
41 45
42 43
42 44
43 45
45 45
49 50`
	.split('\n')
	.map((el) => el.split(' ').map((ee) => parseInt(ee)));

console.log(
	similarStringsQuery(
		'bjaibcejcjcabjdehdagheidedeahdbijbacjigbibiajbhgjb',
		[6, 14]
	)
);
