/**
 * https://www.hackerrank.com/challenges/common-child/problem?isFullScreen=false
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
const commonChild = (s1, s2) => {
	const l1 = s1.length + 1;
	const l2 = s2.length + 1;
	const m = new Array(l1).fill(0).map((_) => new Array(l2).fill(0));

	for (let i = 1; i < l1; i++) {
		for (let j = 1; j < l2; j++) {
			if (s1[i - 1] === s2[j - 1]) {
				m[i][j] = m[i - 1][j - 1] + 1;
			} else {
				m[i][j] = Math.max(m[i - 1][j], m[i][j - 1]);
			}
		}
	}

	return m[l1 - 1][l2 - 1];
};

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
 */
const commonChildRec = (s1, s2) => {
    let solution;
	const memo = new Array(s1.length)
		.fill(0)
		.map((_) => new Array(s2.length).fill(0));

        const solve = (i, j) => {
            if (i < 0 || j < 0) return 0;
        
            if (memo[i][j]) return memo[i][j];
        
            if (s1[i] === s2[j]) solution = solve(i - 1, j - 1) + 1;
            
            else solution = Math.max(solve(i - 1, j), solve(i, j - 1));
            
            memo[i][j] = solution;
            return solution;
          };
        
          return solve(s1.length - 1, s2.length - 1);
};

console.log(commonChildRec('haly', 'sary'));
