'use strict';

const permutationSimpleByTransform = require('./simple-by-transform');

module.exports = array => permutationSimpleByTransform(array).filter(array => !array.duplicate);
