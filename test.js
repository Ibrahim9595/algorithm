// // const seqLength = (n, mem = {}, c = 0) => {
// //   if (mem[n]) return mem[n] + c;

// //   if (n === 1) return c;

// //   if (n % 2 === 0) return seqLength(parseInt(n / 2), mem, c + 1);

// //   return seqLength(3 * n + 1, mem, c + 1);
// // };

// // const getSeqLength = (() => {
// //   let mem = {};
// //   return (n) => {
// //     mem[n] = seqLength(n, mem);
// //     return mem[n];
// //   };
// // })();

// // const then = Date.now();
// // const [_, result] = new Array(10 ** 6).fill(0).reduce(
// //   (p, _, i) => {
// //     const c = getSeqLength(i + 1);
// //     return c > p[0] ? [c, i + 1] : p;
// //   },
// //   [0, 0]
// // );
// // console.log(`result=${result}, Time = ${(Date.now() - then) / 1000}secs`);

// // const test = () => {
// //   const x = new Array(101).fill(0);

// //   for (let i = 1; i <= 100; i++) {
// //     for (let j = i; j <= 100; j += i) {
// //       x[j] = x[j] === 1 ? 0 : 1;
// //     }

// //     if (i === 100) break;
// //   }

// //   console.log(x.map((el, i) => (el === 1 ? i : -1)).filter((el) => el !== -1));
// //   console.log(x.reduce((p, c) => p + c));
// // };

// // test();

// /** Template for reading input from stdio
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function main() {
// }
// */
// const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
// const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];

// const getDiff = (arr1, arr2) => {
//   const map = {};
//   const res = [];

//   for (let i = 0; i < arr1.length; i++) {
//     map[arr1[i]] = true;
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (!map[arr2[i]]) {
//       res.push(arr2[i]);
//     }
//   }

//   return res;
// };

// console.log(`arr1 diff from arr2 in ${getDiff(arrayOne, arrayTwo)}`);
// console.log(`arr2 diff from arr1 in ${getDiff(arrayTwo, arrayOne)}`);

const toUpper = (x) => x.toUpperCase();
const exclimination = (x) => `${x}!`;

// Function Model
const Fn = (run) => ({
  run,
  // Monoid
  concat: (other) => Fn((x) => run(x).concat(other.run(x))),
  // Functor
  map: (f) => Fn((x) => f(run(x))),
  // Monad
  chain: (f) => Fn((x) => f(run(x)).run(x)),
});

// Reader Monad
Fn.ask = Fn((x) => x);
Fn.of = (x) => Fn(() => x);

const res = Fn.of("Test")
  .map(toUpper)
  .chain((upper) => Fn.ask.map((config) => [config, upper]))
  .run({port: 3000});

console.log(res);

// Endo works only on a -> a functions
// const Endo = run =>
// ({
//     run,
//     concat: other => Endo(x => other.run(run(x)))
// })

// Endo.empty = () => Endo(x => x)