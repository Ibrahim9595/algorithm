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

  const l = s.length + t.length - 2 * i;

  return s === t || (k >= l && k % 2 === l % 2) ? "Yes" : "No";
}

console.log(appendAndDelete("qwerasdf", "qwerbsdf", 6));
