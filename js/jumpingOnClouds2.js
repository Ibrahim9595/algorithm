/**
 *https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true
 * @param {numbers[]} c
 */
const jumpingOnClouds = (c) => {
  const t = c
    .slice(2)
    .reduce(
      (p, curr, i) => [
        ...p,
        (curr === 0 ? Math.min(p[i], p[i + 1]) : c.length) + 1,
      ],
      [0, c[1] === 0 ? 1 : c.length + 1]
    );

  console.log(t);

  return t[c.length - 1];
};

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
