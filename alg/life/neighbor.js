'use strict';

const Matrix = require('../../util/matrix');

module.exports = world => {
  const n = world.length;
  const inRange = u => u >= 0 && u < n;
  const grid = (u, v) => inRange(u) && inRange(v) ? world[u][v] : 0;
  return Matrix.map((element, i, j) =>
    grid(i - 1, j - 1) + grid(i - 1, j) + grid(i - 1, j + 1) +
    grid(i,     j - 1)                  + grid(i,     j + 1) +
    grid(i + 1, j - 1) + grid(i + 1, j) + grid(i + 1, j + 1),
    world
  );
};
