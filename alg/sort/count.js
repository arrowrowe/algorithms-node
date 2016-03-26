'use strict';

module.exports = a => {
  const counts = [];
  a.forEach(e => e in counts ? counts[e]++ : counts[e] = 1);
  let fillFrom = 0;
  counts.forEach((times, e) => {
    for (let i = 0; i < times; i++, fillFrom++) {
      a[fillFrom] = e;
    }
  });
  return a;
};
