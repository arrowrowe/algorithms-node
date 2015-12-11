module.exports = (fn, array) => array.sort((a, b) => fn(a) - fn(b));
