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

// const test = () => {
//   const x = new Array(101).fill(0);

//   for (let i = 1; i <= 100; i++) {
//     for (let j = i; j <= 100; j += i) {
//       x[j] = x[j] === 1 ? 0 : 1;
//     }

//     if (i === 100) break;
//   }

//   console.log(x.map((el, i) => (el === 1 ? i : -1)).filter((el) => el !== -1));
//   console.log(x.reduce((p, c) => p + c));
// };

// test();

/** Template for reading input from stdio
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
}
*/
