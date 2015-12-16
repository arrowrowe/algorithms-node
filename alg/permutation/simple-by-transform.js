'use strict';

const transformGenerate = require('./transform-generate');
const transformApply = require('./transform-apply');

module.exports = array => transformGenerate(array.length).map(transform => transformApply(array, transform));
