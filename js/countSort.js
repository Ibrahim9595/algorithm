/**
 * https://www.hackerrank.com/challenges/countingsort4/problem
 * @param {string[]} arr
 * @returns {string}
 */
function countSort(arr) {
	const half = Math.floor(arr.length / 2);
	return arr
		.map(([id, ch], i) => [id, i < half ? '-' : ch, i])
		.sort((a, b) => parseInt(a[0]) - parseInt(b[0]) || a[2] - b[2])
		.map((el) => el[1])
		.join(' ');
}

console.log(
	countSort(
		`0 ab
6 cd
0 ef
6 gh
4 ij
0 ab
6 cd
0 ef
6 gh
0 ij
4 that
3 be
0 to
1 be
5 question
1 or
2 not
4 is
2 to
4 the`
			.split('\n')
			.map((el) => el.split(' '))
	)
);
