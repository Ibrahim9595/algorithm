/**
 *
 * @param {string} s
 * @param {string} t
 * @param {number} k
 */
function appendAndDelete(s, t, k) {
  let i = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) break;
  }

  const l = k - (s.length + t.length - 2 * i);

  return l >= 0 && (l % 2 === 0 || (l % 2 === 1 && l > 2 * i)) ? "Yes" : "No";
}

console.log(appendAndDelete("abc", "abc", 5));
