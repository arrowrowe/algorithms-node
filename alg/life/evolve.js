'use strict';

const Matrix = require('../../util/matrix');
const neighbor = require('./neighbor');

module.exports = world => {
  const neighbors = neighbor(world);
  return Matrix.map((alive, i, j) => (neighbors[i][j] == 3 || alive && neighbors[i][j] === 2) ? 1 : 0, world);
};
