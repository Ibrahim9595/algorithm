/**
 *
 * @param {number} i
 * @param {number} j
 * @param {string[]} path
 * @param {number} n
 * @returns {any[]}
 */
const getNightNextMoves = ([i, j], path, n) =>
	[
		[[-2, -1], 'UL'],
		[[-2, 1], 'UR'],
		[[0, 2], 'R'],
		[[2, 1], 'LR'],
		[[2, -1], 'LL'],
		[[0, -2], 'L'],
	]
		.map(([[_i, _j], p]) => [[_i + i, _j + j], path.concat(p)])
		.filter(([[i, j]]) => i < n && i >= 0 && j < n && j >= 0);

/**
 *
 * @param {string[]} path
 * @returns {string[]}
 */

const sortPath = (path) => {
	const MAP = {
		UL: 0,
		UR: 1,
		R: 2,
		LR: 3,
		LL: 4,
		L: 5,
	};

	return path.sort((a, b) => MAP[a] - MAP[b]);
};

/**
 *
 * @param {number} i_end
 * @param {number} j_end
 * @param {any[]} moves
 * @returns {any[]}
 */
const getBestMove = (i_end, j_end, moves) => {
	const [bestMove] = moves.reduce(
		([bestMove, dist], move) => {
			const [[i, j]] = move;
			const newDist = Math.abs(i - i_end) + Math.abs(j - j_end);

			return newDist < dist ? [move, newDist] : [bestMove, dist];
		},
		[null, 10000]
	);

	return bestMove;
};

/**
 *
 * @param {number} n
 * @param {number} i_start
 * @param {number} j_start
 * @param {number} i_end
 * @param {number} j_end
 */
function printShortestPath(n, i_start, j_start, i_end, j_end) {
	const visited = {};
	let location = [i_start, j_start];
	let path = [];

	while (!(location[0] === i_end && location[1] === j_end)) {
		[location, path] = getBestMove(
			i_end,
			j_end,
			getNightNextMoves(location, path, n)
		);

		if (visited[location]) return console.log('Impossible');

		visited[location] = true;
	}

	console.log(path.length);
	console.log(sortPath(path).join(' '));
}

printShortestPath(40, 6, 6, 0, 1);
