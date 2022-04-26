/**
 * https://www.hackerrank.com/challenges/chief-hopper/problem
 * @param {number[]} arr
 * @returns {number}
 */
const chiefHopper = (arr) =>
	arr.reverse().reduce((p, c) => Math.ceil((p + c) / 2), 0);

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
function chiefHopperNaive(arr) {
	const n = arr.length;
	let i = 1;
	while (true) {
		let energy = i;
		for (let j = 0; j < n; j++) {
			energy = energy + (energy - arr[j]);

			if (energy < 0) break;
		}
		if (energy >= 0) return i;
		i++;
	}
}

const test = () => {
	const oneTest = () => {
		const arr = new Array(Math.floor(5 + Math.random() * 10))
			.fill(0)
			.map((_) => Math.floor(1 + Math.random() * 80));

		const naive = chiefHopperNaive(arr);
		const fast = chiefHopper(arr);

		return [naive === fast, { naive, fast, arr }];
	};

	while (true) {
		let [eq, analysis] = oneTest();
		if (!eq) {
			console.log('Fail', analysis);
			break;
		}
		console.log('Success');
	}
};

test();
