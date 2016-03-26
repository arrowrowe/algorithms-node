'use strict';

const swap = require('../../util/swap');

module.exports = (array, transforms) => {
  const ret = [].concat(array);
  transforms.forEach(transform => {
    const a = transform[0], b = transform[1];
    if (ret[a] === ret[b]) {
      ret.duplicate = true;
      return;
    }
    swap(ret, a, b);
  });
  return ret;
};
