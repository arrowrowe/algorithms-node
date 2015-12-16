'use strict';

module.exports = (array, transforms) => {
  let ret = [].concat(array);
  transforms.forEach(transform => {
    let a = transform[0], b = transform[1];
    if (ret[a] === ret[b]) {
      ret.duplicate = true;
      return;
    }
    let t = ret[a];
    ret[a] = ret[b];
    ret[b] = t;
  });
  return ret;
};
