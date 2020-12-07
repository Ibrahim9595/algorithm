const firstMatch = (str, start, end, dir) => {
  let p1 = start;
  let p2 = end;

  while (str[p1] !== str[p2] && p1 < p2) {
    dir > 0 ? p1++ : p2--;
  }

  return str[p1] === str[p2] && p1 !== p2 ? [p1, p2] : [-1, -1];
};

console.log(firstMatch("babad", 1, 4, 1));
console.log(firstMatch("babad", 1, 4, -1));
