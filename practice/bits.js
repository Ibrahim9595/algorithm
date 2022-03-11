const flipToWin = (x) => {
  const bits = Math.ceil(Math.log2(x));
  // Iterate through all the bits
  const { max } = new Array(bits + 1).fill(0).reduce(
    ({ prev, max, count }, _, i) =>
      // Check if we still have a running 1s
      (x & (1 << i)) === 0
        ? // reset the counters and add the  running 1s count to the list
          {
            count: 0,
            prev: count,
            max: Math.max(prev + count + 1, max),
          }
        : // increase the counter
          {
            prev,
            max,
            count: count + 1,
          },
    { prev: 0, count: 0, max: 1 }
  );

  return max;
};

const drawLine = (screen, w, x1, x2, y) => {
  // number of elements per row
  const c = parseInt(w / 8);
  const elStart = c * y + parseInt(x1 / 8);
  const pxStart = x1 % 8;
  const elEnd = c * y + parseInt(x2 / 8);
  const pxEnd = x2 % 8;

  console.log({ c, elStart, pxStart, elEnd, pxEnd });
};

drawLine([], 40, 20, 31, 5);
