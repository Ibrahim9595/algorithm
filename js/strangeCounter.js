/*https://www.hackerrank.com/contests/ramadan-contest-challenge1/challenges/strange-code/submissions/code/1343398585
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

function strangeCounter(t) {
	let value = 3;
	let time = 1;
	while (time + value < t) {
		time += value;
		value *= 2;
	}

	return value - (t - time) || value * 2;
}

function naiveSolution(t) {
	let lastValue = 3;
	let value = 3;
	let time = 1;

	while (time !== t) {
		time++;
		value--;
		if (value === 0) {
			value = 2 * lastValue;
			lastValue *= 2;
		}
	}

	return value;
}

for (let index = 1; index <= 100000; index++) {
	if (naiveSolution(index) !== strangeCounter(index)) {
		console.log('ERROR', index);
	}
}
