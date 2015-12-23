'use strict';

const minus = (a, b) => a - b;

const __gcd = (a, b) => b % a ? _gcd(a, b - Math.floor(b / a) * a) : a;

const _gcd = (a, b) => __gcd.apply(null, [a, b].sort(minus));

module.exports = (a, b) => a === 0 ? b : b === 0 ? a : _gcd(Math.abs(a), Math.abs(b));
