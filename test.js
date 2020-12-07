const p = 4969;
let gen_count = 0;
for (let a = 1; a < p; a++) {
  let x = 1;
  let i = 0;

  do {
    x = (a * x) % p;
    i++;
  } while (x !== 1);

  if (i === p - 1) gen_count++;
}

// Number of generators in Z*_p = Phi(|Z*_p|)

console.log(`Number of generators in Z*_${p} = `, gen_count);
