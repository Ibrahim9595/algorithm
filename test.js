const p = 4969;
// let gen_count = 0;
// const orders = {};
const generators = {};
for (let a = 1; a < p; a++) {
  let x = 1;
  let i = 0;

  do {
    x = (a * x) % p;
    i++;
  } while (x !== 1);

  // orders[i] = (orders[i] || 0) + 1;
  if (i === p - 1) {
    // console.log(a);
    generators[a] = true;
  }
}

console.log(generators);

// Number of generators in Z*_p = Phi(|Z*_p|)

// console.log(`Number of generators in Z*_${p} = `, gen_count);

// console.log(Object.values(generators).length);

// const tries = 1000000;
// let isPrem = 0;
// for (let i = 0; i < tries; i++) {
//   const rand = Math.floor(1 + Math.random() * p);
//   if (generators[rand]) isPrem++;
// }

// console.log(isPrem / tries);
