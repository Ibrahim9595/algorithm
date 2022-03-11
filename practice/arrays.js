// 1- Unique string
// Best conceived time is O(n) => we have to scan all characters

/**
 * Check if all characters are unique using hashTables O(n)
 * @param {string} s
 */
const allUniqueStringMap = (s) =>
  Object.values(
    s.split("").reduce((p, c) => Object.assign(p, { [c]: (p[c] || 0) + 1 }), {})
  ).every((el) => el === 1);

/**
 * Check if all characters are unique using sort O(nlgn)
 * @param {string} s
 */
const allUniqueStringSort = (s) =>
  !s
    .split("")
    .sort()
    .reduce(({ answer, p }, c) => ({ answer: p === c || answer, p: c }), {
      answer: false,
      p: "",
    })["answer"];

// 2- Check Permutation
// Best conceived time is O(n) => we have to scan all characters
/**
 * Check if s1, s2 are permutations O(n)
 * @param {string} s1
 * @param {string} s2
 */
const checkPermutationMap = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const m1 = s1
    .split("")
    .reduce((p, c) => Object.assign(p, { [c]: (p[c] || 0) + 1 }), {});

  // Sorry for that
  for (let i = 0; i < s2.length; i++) {
    if (!m1.hasOwnProperty(s2[i])) {
      return false;
    }
    m1[s2[i]] -= 1;
  }

  return true;
};

/**
 * Check if s1, s2 are permutations O(nlgn)
 * @param {string} s1
 * @param {string} s2
 */
const checkPermutationSort = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const sorted1 = s1.split("").sort();
  const sorted2 = s2.split("").sort();

  for (let i = 0; i < s1.length; i++) {
    if (sorted1[i] !== sorted2[i]) return false;
  }

  return true;
};

/**
 * replace all spaces with %20
 * @param {string} s
 * @param {number} n
 */
const URLify = (s, n) =>
  s
    .split("") // n
    .slice(0, n) // n
    .map((ch) => (ch === " " ? "%20" : ch)) // n
    .join(""); // n

const URLifyLoop = (s, n) => {
  const ret = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === " ") ret.push("%20");
    else ret.push(s[i]);
  }
  return ret.join("");
};

/**
 * The best conceivable time is O(n) as I need to scan all characters
 * check if a string can be a palindrome
 * @param {string} s
 */
const palindromePermutation = (s) => {
  // palindrome has even numbers of matching characters except for one odd character in case of odd strings
  const noSpaceString = s.replace(/[ ]/gi, "");
  const chCounts = Object.values(
    noSpaceString
      .split("")
      .reduce((p, c) => Object.assign(p, { [c]: (p[c] || 0) + 1 }), {})
  );

  const { odd } = chCounts.reduce(
    ({ odd, even }, c) =>
      c % 2 === 0 ? { even: even + 1, odd } : { odd: odd + 1, even },
    { odd: 0, even: 0 }
  );

  return (noSpaceString.length % 2 === 1 && odd === 1) || odd === 0;
};

/**
 * Best conceivable time is O(max(s, t))
 * Check if 2 strings are 1 edit distances away
 * @param {string} s
 * @param {string} t
 * @returns
 */
const isOneEditDistance = (s, t) => {
  if (Math.abs(s.length - t.length) >= 2) return false;

  let errors = false;
  const [w1, w2] = s.length < t.length ? [s, t] : [t, s];
  let i = 0;
  let j = 0;

  while (i < w1.length) {
    if (w1[j] !== w2[i]) {
      if (errors) return false;
      errors = true;
      i++;

      if (w1.length === w2.length) {
        j++;
      }
    } else {
      i++;
      j++;
    }
  }

  return errors || w1[j] !== w2[j];
};

/**
 * Best conceivable time is O(n)
 * Compress string using longer run
 * @param {string} s
 */
const StringCompression = (s) => {
  //   let prev = s[0];
  //   let count = 1;
  //   const ret = [];
  //   for (let i = 1; i < s.length; i++) {
  //     if (s[i] === prev) {
  //       count++;
  //     } else {
  //       ret.push(`${prev}${count}`);
  //       count = 1;
  //     }
  //     prev = s[i];
  //   }
  //   ret.push(`${prev}${count}`);

  //   return ret.join("");

  const { acc, prev, count } = s
    .split("")
    .slice(1)
    .reduce(
      ({ prev, count, acc }, c) => {
        const pred = prev === c;
        return {
          prev: c,
          count: pred ? count + 1 : 1,
          acc: pred ? acc : acc.concat(`${prev}${count}`),
        };
      },
      { prev: s[0], count: 1, acc: [] }
    );

  return acc.concat(`${prev}${count}`).join("");
};

/**
 *
 * @param {number[][]} m
 */
const rotateMatrix = (m) => {
  // c => column, r => row
  for (let r = 0; r < m.length; r++) {
    for (let c = r; c < m[0].length; c++) {
      const t = m[r][c];
      m[r][c] = m[c][r];
      m[c][r] = t;
    }
  }
};

const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateMatrix(m);
console.log(m);
