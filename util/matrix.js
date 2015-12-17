module.exports = {
  forEach: (fn, rows) => rows.forEach((row, i) => row.forEach((element, j) => fn(element, i, j, rows))),
  map: (fn, rows) => rows.map((row, i) => row.map((element, j) => fn(element, i, j, rows)))
};
