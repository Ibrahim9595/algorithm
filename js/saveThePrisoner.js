/**
 * Take number of chairs(n), number of candies(m), and the start chair(s)
 * Return The last chair to have candy
 * @param {number} n
 * @param {number} m
 * @param {number} s
 */
const saveThePrisoner = (n, m, s) => (s + (m % n) - 1) % n || n;
