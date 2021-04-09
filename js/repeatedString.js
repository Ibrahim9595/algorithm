/**
 *
 * @param {string} s
 * @param {number} n
 */
const repeatedString = (s, n) => {
  const filterFn = (el) => el === "a";

  return (
    s.split("").filter(filterFn).length * Math.floor(n / s.length) +
    s
      .substring(0, n % s.length)
      .split("")
      .filter(filterFn).length
  );
};

console.log(
  repeatedString(
    "epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq",
    549382313570
  )
);
