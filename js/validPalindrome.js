/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	return helper(s, 0, s.length - 1, false);
};

/**
 *
 * @param {string} s
 * @param {number} start
 * @param {number} end
 * @param {boolean} error
 */
const helper = (s, start, end, error) => {
	if (start === end) return true;
  
	if (start > end) return error;

	if (s[start] !== s[end]) {
		if (error) return false;

		return helper(s, start + 1, end - 1, true);
	}

	return helper(s, start + 1, end - 1, error);
};

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
readline.on('line', (line) => {
	readline.close();
	console.log(validPalindrome(line) ? 'YES' : 'NO');
});
