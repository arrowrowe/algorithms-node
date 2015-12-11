'use strict';

module.exports = (y, delta) => {
  if (y < 0) {
    return NaN;
  }
  if (y === 0) {
    return 0;
  }
  delta = delta || .001;
  let x = y / 2;
  for(;;) {
    let dx = x / 2 - y / (2 * x);
    if (Math.abs(dx) < delta) {
      break;
    }
    x -= dx;
  }
  return x;
};
