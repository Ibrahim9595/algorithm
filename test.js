// const seqLength = (n, mem = {}, c = 0) => {
//   if (mem[n]) return mem[n] + c;

//   if (n === 1) return c;

//   if (n % 2 === 0) return seqLength(parseInt(n / 2), mem, c + 1);

//   return seqLength(3 * n + 1, mem, c + 1);
// };

// const getSeqLength = (() => {
//   let mem = {};
//   return (n) => {
//     mem[n] = seqLength(n, mem);
//     return mem[n];
//   };
// })();

// const then = Date.now();
// const [_, result] = new Array(10 ** 6).fill(0).reduce(
//   (p, _, i) => {
//     const c = getSeqLength(i + 1);
//     return c > p[0] ? [c, i + 1] : p;
//   },
//   [0, 0]
// );
// console.log(`result=${result}, Time = ${(Date.now() - then) / 1000}secs`);
