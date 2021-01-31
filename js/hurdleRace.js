//https://www.hackerrank.com/challenges/the-hurdle-race/problem
// Complete the hurdleRace function below.
function hurdleRace(k, height) {
  const diff = Math.max(...height) - k;
  return diff > 0 ? diff : 0;
}
hurdleRace(4, "1 6 3 5 2".split(" "));
