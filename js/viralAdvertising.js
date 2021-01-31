/**
 * @param {number} n
 */
const viralAdvertising = (n) =>
  new Array(n).fill(0).reduce(
    ({ commutative, shared }) => {
      const liked = Math.floor(shared / 2);
      return {
        liked,
        commutative: commutative + liked,
        shared: liked * 3,
      };
    },
    { shared: 5, liked: 0, commutative: 0 }
  ).commutative;
