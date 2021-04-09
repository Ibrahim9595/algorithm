/**
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=dictionaries-hashmaps&isFullScreen=true
 * @param {string[]} magazine
 * @param {string} note
 * @returns {string}
 */
const checkMagazine = (magazine, note) => {
  const m = note.reduce(
    (p, c) => Object.assign(p, { [c]: (p[c] || 0) - 1 }),
    magazine.reduce((p, c) => Object.assign(p, { [c]: (p[c] || 0) + 1 }), {})
  );

  return Object.keys(m).every((k) => m[k] >= 0) ? "Yes" : "No";
};
